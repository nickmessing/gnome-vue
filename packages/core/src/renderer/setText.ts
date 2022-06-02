import Gtk from '@/generated/Gjs/Gtk-4.0'
import { ROptions } from './types'

export const setText: ROptions['setText'] = (node, text) => {
  if (node instanceof Gtk.Label) {
    return node.set_label(text)
  }
  throw `setText is not implemented for "${node?.constructor.name}"`
}
