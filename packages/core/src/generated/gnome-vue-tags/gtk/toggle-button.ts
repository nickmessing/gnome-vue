import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkButton } from "../gtk/button";
export const gtkToggleButton = defineElement({
  tagName: "gtk-toggle-button",
  constructorClass: Gtk.ToggleButton,
  props: {
    active: {
      key: "active",
      type: Type.Boolean,
      setter: "set_active"
    }
  },
  parentElementDefinition: gtkButton
});