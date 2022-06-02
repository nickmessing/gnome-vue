import Gtk from '@/generated/Gjs/Gtk-4.0'
import { ROptions } from './types'

export const createElement: ROptions['createElement'] = (type, isSVG, isCustomizedBuiltIn, vnodeProps) => {
  if (type === 'application-window') {
    const constructProps: Gtk.ApplicationWindow_ConstructProps = {}

    if (vnodeProps) {
      if ('title' in vnodeProps && typeof vnodeProps.title === 'string') {
        constructProps.title = vnodeProps.title
      }
    }

    const el = new Gtk.ApplicationWindow(constructProps)
    el.show()

    return el
  } else if (type === 'box') {
    const el = new Gtk.Box()
    el.show()
    return el
  } else if (type === 'button') {
    const el = new Gtk.Button()
    el.show()
    return el
  }
  throw `Cant create element "${type}" yet`
}
