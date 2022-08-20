import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkStackSwitcher = defineElement({
  tagName: "gtk-stack-switcher",
  constructorClass: Gtk.StackSwitcher,
  props: {
    stack: {
      key: "stack",
      type: Type.Object,
      setter: "set_stack"
    }
  },
  parentElementDefinition: gtkWidget
});