import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkDrawingArea = defineElement({
  tagName: "gtk-drawing-area",
  constructorClass: Gtk.DrawingArea,
  props: {
    contentHeight: {
      key: "content_height",
      type: Type.Number,
      setter: "set_content_height"
    },
    contentWidth: {
      key: "content_width",
      type: Type.Number,
      setter: "set_content_width"
    }
  },
  parentElementDefinition: gtkWidget
});