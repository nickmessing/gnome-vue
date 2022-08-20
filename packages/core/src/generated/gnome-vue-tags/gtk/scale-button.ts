import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkScaleButton = defineElement({
  tagName: "gtk-scale-button",
  constructorClass: Gtk.ScaleButton,
  props: {
    adjustment: {
      key: "adjustment",
      type: Type.Object,
      setter: "set_adjustment"
    },
    value: {
      key: "value",
      type: Type.Number,
      setter: "set_value"
    }
  },
  parentElementDefinition: gtkWidget
});