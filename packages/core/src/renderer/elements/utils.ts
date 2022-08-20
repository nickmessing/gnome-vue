import GObject from '@/generated/Gjs/GObject-2.0'
import { Gtk } from '../../generated/Gjs/Gtk-4.0'
import { ROptions } from '../types'

type VNodeProps = Parameters<ROptions['createElement']>[3]

export enum Type {
  String = 'String',
  Boolean = 'Boolean',
  Number = 'Number',
  Object = 'Object',
  StringArray = 'StringArray',
}

export type ElementPropertyDescriptor = {
  key: string
  type: Type
  setter: string
}

export type DefineElementOptions = {
  tagName: string
  constructorClass: typeof Gtk.Widget
  parentElementDefinition?: ElementDefinition
  props: Record<string, ElementPropertyDescriptor>
}

export type ElementDefinition = DefineElementOptions & {
  createProperties: (vnodeProps?: VNodeProps) => Record<string, any>
  patchProperty: (el: any, key: string, prevValue: any, nextValue: any) => boolean
  createElement: (vnodeProps?: VNodeProps) => Gtk.Widget
}

type EventHandledWidget = Gtk.Widget & {
  _eventHandlersIds?: Record<string, Map<any, number>>
}

export const defineElement = ({
  tagName,
  constructorClass,
  props,
  parentElementDefinition,
}: DefineElementOptions): ElementDefinition => {
  const createProperties: ElementDefinition['createProperties'] = vnodeProps => {
    const properties = parentElementDefinition ? parentElementDefinition.createProperties(vnodeProps) : {}

    for (const key in vnodeProps) {
      if (key in props) {
        const descriptor = props[key]
        properties[descriptor.key] = vnodeProps[key]
      } else if (key === 'class') {
        properties.css_classes = vnodeProps[key].split(' ')
      } else if (!(key in properties) && !key.startsWith('on') && key !== 'key' && key !== 'ref' && key !== 'ref_key') {
        // log(`Unknown property "${key}" for element "${tagName}"`)
      }
    }

    return properties
  }

  const patchProperty: ElementDefinition['patchProperty'] = (el, key, prevValue, nextValue) => {
    const setParent = parentElementDefinition && parentElementDefinition.patchProperty(el, key, prevValue, nextValue)
    if (setParent) {
      return true
    }

    const propDetails = props[key]
    if (propDetails) {
      const setter = propDetails.setter
      if (setter in el) {
        el[setter](nextValue)
        return true
      }
    } else if (key === 'class') {
      el.set_css_classes(nextValue.split(' '))
      return true
    } else if (key.startsWith('on')) {
      const widget = el as EventHandledWidget
      if (widget._eventHandlersIds == null) {
        widget._eventHandlersIds = {}
      }

      const eventName = key[2].toLowerCase() + key.substring(3)
      if (prevValue != null) {
        const handlersIds = widget._eventHandlersIds[eventName]
        if (handlersIds) {
          const id = handlersIds.get(prevValue)
          if (id != null) {
            widget.disconnect(id)
          }
        }
      }
      if (nextValue != null) {
        const id = widget.connect(eventName, nextValue)
        if (widget._eventHandlersIds[eventName] == null) {
          widget._eventHandlersIds[eventName] = new Map()
        }
        widget._eventHandlersIds[eventName].set(nextValue, id)
      }
      return true
    } else if (key !== 'key' && key !== 'ref' && key !== 'ref_key') {
      // log(`Unknown property "${key}" for element "${tagName}" (prevValue: ${prevValue}, nextValue: ${nextValue})`)
    }
    return false
  }

  const createElement: ElementDefinition['createElement'] = vnodeProps => {
    const initialProps = createProperties(vnodeProps)
    const instance = new constructorClass(initialProps)
    if (initialProps.visible !== false) {
      instance.show()
    }
    return instance
  }

  return {
    tagName,
    constructorClass,
    props,
    parentElementDefinition,
    createProperties,
    patchProperty,
    createElement,
  }
}
