import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkCheckButton = defineElement({
  tagName: "gtk-check-button",
  constructorClass: Gtk.CheckButton,
  props: {
    active: {
      key: "active",
      type: Type.Boolean,
      setter: "set_active"
    },
    inconsistent: {
      key: "inconsistent",
      type: Type.Boolean,
      setter: "set_inconsistent"
    },
    label: {
      key: "label",
      type: Type.String,
      setter: "set_label"
    },
    useUnderline: {
      key: "use_underline",
      type: Type.Boolean,
      setter: "set_use_underline"
    }
  },
  parentElementDefinition: gtkWidget
});