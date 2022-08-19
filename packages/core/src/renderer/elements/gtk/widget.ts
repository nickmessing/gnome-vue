import Gtk from '@/generated/Gjs/Gtk-4.0'
import { defineProperties, Type } from '../../elements/utils'
import { ROptions } from '../../types'

export const gtkWidgetPropsHandlers = defineProperties<Gtk.Widget, Gtk.Widget.ConstructorProperties>({
  visible: {
    key: 'visible',
    type: Type.Boolean,
    setter: 'set_visible',
    default: true,
  },
  canFocus: {
    key: 'can_focus',
    type: Type.Boolean,
    setter: 'set_can_focus',
  },
  canTarget: {
    key: 'can_target',
    type: Type.Boolean,
    setter: 'set_can_target',
  },
  class: {
    key: 'css_classes',
    type: Type.ClassArray,
    setter: 'set_css_classes',
  },
  cursor: {
    key: 'cursor',
    type: Type.Cursor,
    setter: 'set_cursor',
  },
})

export const createGtkWidgetProps = (vnodeProps?: Parameters<ROptions['createElement']>[3]) =>
  gtkWidgetPropsHandlers.getConstructorProperties(vnodeProps)

export const createGtkWidgetElement = (vnodeProps?: Parameters<ROptions['createElement']>[3]) =>
  new Gtk.Widget(createGtkWidgetProps(vnodeProps))
