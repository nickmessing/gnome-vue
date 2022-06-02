import Gtk from '@/generated/Gjs/Gtk-4.0'
import { ROptions } from './types'

export const parentNode: ROptions['parentNode'] = node => {
  if (node == null) {
    return null
  }
  if (node instanceof Gtk.Widget) {
    return node.get_parent()
  }
  throw `parentNode is not implemented for "${node}"`
}
