import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkActionBar = defineElement({
  tagName: "gtk-action-bar",
  constructorClass: Gtk.ActionBar,
  props: {
    revealed: {
      key: "revealed",
      type: Type.Boolean,
      setter: "set_revealed"
    }
  },
  parentElementDefinition: gtkWidget
});