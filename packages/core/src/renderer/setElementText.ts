import Gtk from '@/generated/Gjs/Gtk-4.0'
import { ROptions } from './types'

export const setElementText: ROptions['setElementText'] = (node, text) => {
  if (node instanceof Gtk.Button) {
    node.set_label(text)
    return
  }
  throw `Cant set element "${node.constructor.name}" text yet`
}
