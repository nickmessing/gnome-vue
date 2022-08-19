import GObject from '@/generated/Gjs/GObject-2.0'
import Gtk from '@/generated/Gjs/Gtk-4.0'

class CommentC extends Gtk.Widget {
  constructor(public comment: string) {
    super({
      visible: false,
      name: comment,
    })
  }
}

export const Comment = GObject.registerClass(CommentC)
export type Comment = CommentC
