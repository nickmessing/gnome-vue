import Gtk from '@/generated/Gjs/Gtk-4.0'
import { ROptions } from './types'

export const patchProp: ROptions['patchProp'] = (el, key, prevValue, nextValue) => {
  if (el instanceof Gtk.ApplicationWindow) {
    if (key === 'title') {
      el.set_title(nextValue)
      return
    }
  } else if (el instanceof Gtk.Button) {
    if (key === 'onClicked') {
      el.connect('clicked', nextValue)
      return
    }
  }
  throw `Cant patch prop "${key}" for element "${el.constructor.name}" yet`
}
