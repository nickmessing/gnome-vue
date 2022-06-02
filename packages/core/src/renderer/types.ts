import Gtk from '@/generated/Gjs/Gtk-4.0'
import { RendererOptions } from '@vue/runtime-core'
import { Comment } from './custom-widgets/comment'

export type Node = Gtk.ApplicationWindow | Gtk.Application | Gtk.Box | Gtk.Button | Gtk.Widget | Comment
export type ROptions = RendererOptions<Node>
