import Gtk from '@/generated/Gjs/Gtk-4.0'
import { ROptions } from './types'

export const remove: ROptions['remove'] = node => {
  if (node instanceof Gtk.Widget) {
    const parent = node.get_parent()
    if (parent instanceof Gtk.Box || parent instanceof Gtk.Grid) {
      return parent.remove(node)
    } else if (parent instanceof Gtk.Grid) {
      return parent.remove(node)
    }
  }
  throw `Remove is not implemented for "${node?.constructor.name}" from "${node?.get_parent()?.constructor.name}" yet`
}
