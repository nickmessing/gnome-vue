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

    return new Gtk.ApplicationWindow(constructProps)
  } else if (type === 'box') {
    return new Gtk.Box()
  } else if (type === 'button') {
    return new Gtk.Button()
  }
  throw `Cant create element "${type}" yet`
}
