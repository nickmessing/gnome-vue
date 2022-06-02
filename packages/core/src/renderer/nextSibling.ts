import Gtk from '@/generated/Gjs/Gtk-4.0'
import { parentNode } from './parentNode'
import { ROptions } from './types'

export const nextSibling: ROptions['nextSibling'] = node => {
  if (node instanceof Gtk.Widget) {
    return node.get_next_sibling()
  }

  const parent = parentNode(node)

  if (parent == null) {
    return null
  }

  throw `nextSibling is not implemented for parent of type "${parent?.constructor.name}"`
}
