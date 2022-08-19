import Adw from '@/generated/Gjs/Adw-1'
import Gtk from '@/generated/Gjs/Gtk-4.0'
import { gtkButtonPropsHandlers } from './elements/gtk/button'
import { ROptions } from './types'

export const patchProp: ROptions['patchProp'] = (el, key, prevValue, nextValue) => {
  if (el instanceof Adw.ApplicationWindow) {
    if (key === 'title') {
      return el.set_title(nextValue)
    }
  } else if (el instanceof Gtk.Button) {
    if (key === 'onClicked') {
      return el.connect('clicked', nextValue)
    }
    const patched = gtkButtonPropsHandlers.patchProperty(el, key, prevValue, nextValue)
    if (patched) {
      return
    }
  }
  log(`Cant patch prop "${key}" for element "${el.constructor.name}" yet`)
  return
}
