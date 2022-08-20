import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkMediaControls = defineElement({
  tagName: "gtk-media-controls",
  constructorClass: Gtk.MediaControls,
  props: {
    mediaStream: {
      key: "media_stream",
      type: Type.Object,
      setter: "set_media_stream"
    }
  },
  parentElementDefinition: gtkWidget
});