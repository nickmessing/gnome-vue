import Gtk from '@/generated/Gjs/Gtk-4.0'
import { defineProperties } from '../utils'
import { ROptions } from '../../types'
import { gtkWidgetPropsHandlers } from './widget'

export const gtkButtonPropsHandlers = defineProperties<Gtk.Button, Gtk.Button.ConstructorProperties>(
  {},
  gtkWidgetPropsHandlers,
)

export const createGtkButtonProps = (vnodeProps?: Parameters<ROptions['createElement']>[3]) =>
  gtkButtonPropsHandlers.getConstructorProperties(vnodeProps)

export const createGtkButtonElement = (vnodeProps?: Parameters<ROptions['createElement']>[3]) =>
  new Gtk.Button(createGtkButtonProps(vnodeProps))
