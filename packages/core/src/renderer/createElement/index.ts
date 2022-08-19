import Gtk from '@/generated/Gjs/Gtk-4.0'
import { createGtkButtonElement } from '../elements/gtk/button'
import { ROptions } from '../types'
import { createAdwWindowElement } from './adw/window'

export const createElement: ROptions['createElement'] = (type, isSVG, isCustomizedBuiltIn, vnodeProps) => {
  switch (type) {
    case 'adw-window':
      return createAdwWindowElement(vnodeProps)
    case 'gtk-button':
      return createGtkButtonElement(vnodeProps)
    case 'box':
      return new Gtk.Box()
  }

  throw `Cant create element "${type}" yet`
}
