import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkFrame = defineElement({
  tagName: "gtk-frame",
  constructorClass: Gtk.Frame,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    label: {
      key: "label",
      type: Type.String,
      setter: "set_label"
    },
    labelWidget: {
      key: "label_widget",
      type: Type.Object,
      setter: "set_label_widget"
    }
  },
  parentElementDefinition: gtkWidget
});