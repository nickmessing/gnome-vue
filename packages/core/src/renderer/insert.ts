import Adw from '@/generated/Gjs/Adw-1'
import Gtk from '@/generated/Gjs/Gtk-4.0'
import { ROptions } from './types'

export const insert: ROptions['insert'] = (el, parent, anchor) => {
  if (el == null) {
    return
  }

  if (parent instanceof Gtk.Application) {
    if (el instanceof Gtk.Window) {
      return parent.add_window(el)
    } else if (el instanceof Gtk.Label) {
      return
    }
  } else if (parent instanceof Adw.Window) {
    if (el instanceof Gtk.Widget) {
      if (parent.get_content() != null) {
        throw 'ApplicationWindow can only have a single child'
      }
      return parent.set_content(el)
    }
  } else if (parent instanceof Gtk.Box) {
    if (el instanceof Gtk.Widget) {
      if (anchor == null) {
        return parent.append(el)
      } else {
        if (anchor instanceof Gtk.Widget) {
          return parent.insert_child_after(el, anchor.get_prev_sibling())
        }
      }
    }
  } else if (parent instanceof Gtk.Widget) {
    if (el instanceof Gtk.Widget) {
      return el.insert_after(parent, (anchor as Gtk.Widget) ?? null)
    }
  }

  throw `Can't insert "${el?.constructor.name}" in parent "${parent.constructor.name}" yet`
}
