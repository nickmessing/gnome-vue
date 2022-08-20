import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkShortcutLabel = defineElement({
  tagName: "gtk-shortcut-label",
  constructorClass: Gtk.ShortcutLabel,
  props: {
    accelerator: {
      key: "accelerator",
      type: Type.String,
      setter: "set_accelerator"
    },
    disabledText: {
      key: "disabled_text",
      type: Type.String,
      setter: "set_disabled_text"
    }
  },
  parentElementDefinition: gtkWidget
});