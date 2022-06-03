import Gtk from '@/generated/Gjs/Gtk-4.0'
import { ROptions } from './types'

export const createText: ROptions['createText'] = text => new Gtk.Label({ label: text })
