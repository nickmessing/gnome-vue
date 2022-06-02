import Gtk from '@/generated/Gjs/Gtk-4.0'
import { ROptions } from './types'

export const createText: ROptions['createText'] = text => {
  // const node = Gtk.TextView.new_with_buffer(new Gtk.TextBuffer({ text }))
  const node = new Gtk.Label({ label: text })
  node.show()
  return node
}
