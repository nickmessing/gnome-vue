import Gdk from '@/generated/Gjs/Gdk-4.0'
import { ROptions } from '../types'

export type ClassList = string | ClassList[] | Record<string, boolean>

export const processClasses = (classes: ClassList): string[] => {
  if (Array.isArray(classes)) {
    return classes.reduce<string[]>((acc, classList) => acc.concat(processClasses(classList)), [])
  } else if (typeof classes === 'string') {
    return classes.split(' ')
  } else {
    return Object.keys(classes).filter(key => classes[key])
  }
}

export const processValue = (propDetails: PropDeclaration<any, any, any>, value: any) => {
  if (propDetails.type === Type.Boolean) {
    return value !== false
  } else if (propDetails.type === Type.ClassArray) {
    return processClasses(value)
  } else if (propDetails.type === Type.Cursor) {
    return Gdk.Cursor.new_from_name(value, null)
  } else {
    return value
  }
}

export enum Type {
  Cursor = 'Cursor',
  Boolean = 'Boolean',
  ClassArray = 'ClassArray',
}

export type PropDeclaration<
  WidgetInstanceType extends {},
  ConstructorProperties extends {},
  K extends keyof ConstructorProperties,
> = {
  key: K
  type: Type
  setter: K extends string
    ? `set_${K}` extends keyof WidgetInstanceType
      ? `set_${K}`
      : keyof WidgetInstanceType
    : keyof WidgetInstanceType
  default?: ConstructorProperties[K]
}

export type PropsDeclaration<WidgetInstanceType extends {}, ConstructorProperties extends {}> = Record<
  string,
  PropDeclaration<WidgetInstanceType, ConstructorProperties, keyof ConstructorProperties>
>

type PropertiesDefinition<WidgetInstanceType extends {}, ConstructorProperties extends {}> = {
  getConstructorProperties: (vnodeProps: Parameters<ROptions['createElement']>[3]) => ConstructorProperties
  patchProperty: (el: WidgetInstanceType, key: string, prevValue: any, nextValue: any) => boolean
}

export const defineProperties = <WidgetInstanceType extends {}, ConstructorProperties extends {}>(
  props: PropsDeclaration<WidgetInstanceType, ConstructorProperties>,
  parentDefinition?: PropertiesDefinition<any, any>,
): PropertiesDefinition<WidgetInstanceType, ConstructorProperties> => ({
  getConstructorProperties: vnodeProps => {
    const constructorProperties: Record<string, any> = parentDefinition
      ? parentDefinition.getConstructorProperties(vnodeProps)
      : {}

    if (vnodeProps != null) {
    }

    for (const [key, prop] of Object.entries(props)) {
      const propDetails = prop as PropDeclaration<
        WidgetInstanceType,
        ConstructorProperties,
        keyof ConstructorProperties
      >
      if (vnodeProps != null && key in vnodeProps) {
        constructorProperties[propDetails.key as string] = processValue(propDetails, vnodeProps[key])
      } else if (propDetails.default != null) {
        constructorProperties[propDetails.key as string] = propDetails.default
      }
    }

    return constructorProperties as ConstructorProperties
  },

  patchProperty: (el, key, prevValue, nextValue) => {
    const patched = parentDefinition?.patchProperty(el, key, prevValue, nextValue)
    if (patched) {
      return patched
    }

    if (key in props) {
      const propDetails = props[
        key as keyof PropsDeclaration<WidgetInstanceType, ConstructorProperties>
      ] as PropDeclaration<WidgetInstanceType, ConstructorProperties, keyof ConstructorProperties>
      ;(el as any)[propDetails.setter](processValue(propDetails, nextValue))
      return true
    }
    return false
  },
})
