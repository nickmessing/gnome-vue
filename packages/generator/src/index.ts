import { readFileSync, writeFileSync } from 'fs'
import { platform } from 'os'
import { parseStringPromise } from 'xml2js'
import { ParsedGir, GirPropertyElement } from '@ts-for-gir/cli/lib'
import { kebabCase, camelCase } from 'lodash'
import mkdirp from 'mkdirp'
import rimraf from 'rimraf'
import { join } from 'path'

import generate from '@babel/generator'
import * as t from '@babel/types'

const targetDir = join(__dirname, '..', '..', 'core', 'src', 'generated', 'gnome-vue-tags')

const directory = platform() === 'darwin' ? '/usr/local/share/gir-1.0' : '/usr/share/gir-1.0'

const files = {
  gtk: 'Gtk-4.0.gir',
  adw: 'Adw-1.gir',
}

const importDeclarations = [
  t.importDeclaration(
    [t.importSpecifier(t.identifier('Gtk'), t.identifier('Gtk'))],
    t.stringLiteral('../../Gjs/Gtk-4.0'),
  ),
  t.importDeclaration(
    [t.importSpecifier(t.identifier('Adw'), t.identifier('Adw'))],
    t.stringLiteral('../../Gjs/Adw-1'),
  ),
  t.importDeclaration(
    [
      t.importSpecifier(t.identifier('defineElement'), t.identifier('defineElement')),
      t.importSpecifier(t.identifier('Type'), t.identifier('Type')),
    ],
    t.stringLiteral('../../../renderer/elements/utils'),
  ),
]

const mapPropertyName = (name: string) => t.identifier(camelCase(name))

const getPropertyType = (property: GirPropertyElement, className: string) => {
  const type = property.type?.[0]
  const array = property.array?.[0]
  if (type == null && array == null) {
    console.log({ type, array })
    throw new Error(`No type for ${property.$.name}@${className}`)
  }
  if (array != null) {
    switch (array.type?.[0].$.name) {
      case 'utf8':
        return t.memberExpression(t.identifier('Type'), t.identifier('StringArray'))
    }
  }
  if (type != null) {
    switch (type.$.name) {
      case 'utf8':
        return t.memberExpression(t.identifier('Type'), t.identifier('String'))
      case 'gboolean':
        return t.memberExpression(t.identifier('Type'), t.identifier('Boolean'))
      case 'gdouble':
      case 'gfloat':
      case 'gint':
      case 'guint':
        return t.memberExpression(t.identifier('Type'), t.identifier('Number'))
    }
    if (type.$.name && type.$.name[0] >= 'A' && type.$.name[0] <= 'Z') {
      return t.memberExpression(t.identifier('Type'), t.identifier('Object'))
    }
  }

  console.log({ type, array, className, property: property.$.name })
  throw new Error('Can not handle this yet')
}

function notNull<TValue>(value: TValue | null | undefined): value is TValue {
  return value != null
}

const main = async () => {
  rimraf.sync(targetDir)

  const parsedFiles = {
    gtk: (await parseStringPromise(readFileSync(join(directory, files.gtk), 'utf8'))) as ParsedGir,
    adw: (await parseStringPromise(readFileSync(join(directory, files.adw), 'utf8'))) as ParsedGir,
  }

  const parents: Record<string, string> = {}

  const imports = {
    gtk: [] as string[],
    adw: [] as string[],
  }

  for (const [name, parsed] of Object.entries(parsedFiles)) {
    const moduleName = parsed.repository.namespace?.[0].$.name ?? ''
    const classes = parsed.repository.namespace?.[0].class ?? []
    for (const girClass of classes) {
      const className = girClass.$.name
      const parent = girClass.$.parent
      if (parent) {
        parents[`${moduleName}.${className}`] = parent.includes('.') ? parent : `${moduleName}.${parent}`
      }
    }
  }

  const getRootParent = (className: string): string | null => {
    if (className === 'Gtk.Widget') {
      return 'Gtk.Widget'
    }
    const parent = parents[className]
    if (parent == null) {
      return null
    }
    return getRootParent(parent) ?? parent
  }

  for (const [name, parsed] of Object.entries(parsedFiles)) {
    const moduleName = parsed.repository.namespace?.[0].$.name ?? ''
    const classes = parsed.repository.namespace?.[0].class ?? []

    await mkdirp(join(targetDir, name))

    const imports: string[] = []

    for (const girClass of classes) {
      const kebabCaseName = kebabCase(girClass.$.name)
      const vueTagName = `${name}-${kebabCaseName}`
      const camelCasedTagName = camelCase(vueTagName)

      const properties = girClass.property ?? []

      const namespacedName = `${moduleName}.${girClass.$.name}`

      const rootParent = getRootParent(namespacedName)
      const parent = namespacedName === 'Gtk.Widget' ? null : camelCase(parents[namespacedName])

      if (rootParent === 'Gtk.Widget') {
        imports.push(kebabCaseName)
        writeFileSync(
          join(targetDir, name, `${kebabCaseName}.ts`),
          generate(
            t.file(
              t.program([
                ...importDeclarations,
                ...(parent
                  ? [
                      t.importDeclaration(
                        [t.importSpecifier(t.identifier(parent), t.identifier(parent))],
                        t.stringLiteral(`../${parent.substring(0, 3)}/${kebabCase(parent.substring(3))}`),
                      ),
                    ]
                  : []),
                t.exportNamedDeclaration(
                  t.variableDeclaration('const', [
                    t.variableDeclarator(
                      t.identifier(camelCasedTagName),
                      t.callExpression(t.identifier('defineElement'), [
                        t.objectExpression([
                          t.objectProperty(t.identifier('tagName'), t.stringLiteral(vueTagName)),
                          t.objectProperty(
                            t.identifier('constructorClass'),
                            t.memberExpression(t.identifier(moduleName), t.identifier(girClass.$.name)),
                          ),
                          t.objectProperty(
                            t.identifier('props'),
                            t.objectExpression(
                              properties
                                .map(property => {
                                  if (
                                    property.$.writable !== '1' ||
                                    !property.$.setter ||
                                    !property.$.getter ||
                                    !property.$.getter.startsWith('get_')
                                  )
                                    return null
                                  return t.objectProperty(
                                    mapPropertyName(property.$.name),
                                    t.objectExpression([
                                      t.objectProperty(
                                        t.identifier('key'),
                                        t.stringLiteral(property.$.getter.substring(4)),
                                      ),
                                      t.objectProperty(
                                        t.identifier('type'),
                                        getPropertyType(property, girClass.$.name),
                                      ),
                                      t.objectProperty(t.identifier('setter'), t.stringLiteral(property.$.setter)),
                                    ]),
                                  )
                                })
                                .filter(notNull),
                            ),
                          ),
                          ...(parent
                            ? [t.objectProperty(t.identifier('parentElementDefinition'), t.identifier(parent))]
                            : []),
                        ]),
                      ]),
                    ),
                  ]),
                ),
              ]),
            ),
          ).code,
        )
      } else {
        console.log('Skipping', girClass.$.name, 'root parent', rootParent)
      }
    }

    writeFileSync(
      join(targetDir, name, 'index.ts'),
      generate(
        t.file(t.program([...imports.map(importName => t.exportAllDeclaration(t.stringLiteral(`./${importName}`)))])),
      ).code,
    )
  }

  writeFileSync(
    join(targetDir, 'index.ts'),
    generate(
      t.file(
        t.program([t.exportAllDeclaration(t.stringLiteral(`./adw`)), t.exportAllDeclaration(t.stringLiteral(`./gtk`))]),
      ),
    ).code,
  )
}

main()
