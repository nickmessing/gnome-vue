import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkWindowControls = defineElement({
  tagName: "gtk-window-controls",
  constructorClass: Gtk.WindowControls,
  props: {
    decorationLayout: {
      key: "decoration_layout",
      type: Type.String,
      setter: "set_decoration_layout"
    },
    side: {
      key: "side",
      type: Type.Object,
      setter: "set_side"
    }
  },
  parentElementDefinition: gtkWidget
});