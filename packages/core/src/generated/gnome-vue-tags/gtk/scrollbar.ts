import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkScrollbar = defineElement({
  tagName: "gtk-scrollbar",
  constructorClass: Gtk.Scrollbar,
  props: {
    adjustment: {
      key: "adjustment",
      type: Type.Object,
      setter: "set_adjustment"
    }
  },
  parentElementDefinition: gtkWidget
});