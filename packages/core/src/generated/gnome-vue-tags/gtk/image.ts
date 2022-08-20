import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkImage = defineElement({
  tagName: "gtk-image",
  constructorClass: Gtk.Image,
  props: {
    iconSize: {
      key: "icon_size",
      type: Type.Object,
      setter: "set_icon_size"
    },
    pixelSize: {
      key: "pixel_size",
      type: Type.Number,
      setter: "set_pixel_size"
    }
  },
  parentElementDefinition: gtkWidget
});