import Adw from '@/generated/Gjs/Adw-1'
import Gtk from '@/generated/Gjs/Gtk-4.0'
import { RendererOptions } from '@vue/runtime-core'
import { Comment } from './customWidgets'

export type Node = Adw.ApplicationWindow | Gtk.Application | Gtk.Box | Gtk.Button | Gtk.Widget | Comment
export type ROptions = RendererOptions<Node>
