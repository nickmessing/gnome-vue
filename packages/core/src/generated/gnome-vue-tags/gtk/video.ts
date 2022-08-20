import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkVideo = defineElement({
  tagName: "gtk-video",
  constructorClass: Gtk.Video,
  props: {
    autoplay: {
      key: "autoplay",
      type: Type.Boolean,
      setter: "set_autoplay"
    },
    file: {
      key: "file",
      type: Type.Object,
      setter: "set_file"
    },
    loop: {
      key: "loop",
      type: Type.Boolean,
      setter: "set_loop"
    },
    mediaStream: {
      key: "media_stream",
      type: Type.Object,
      setter: "set_media_stream"
    }
  },
  parentElementDefinition: gtkWidget
});