import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkSwitch = defineElement({
  tagName: "gtk-switch",
  constructorClass: Gtk.Switch,
  props: {
    active: {
      key: "active",
      type: Type.Boolean,
      setter: "set_active"
    },
    state: {
      key: "state",
      type: Type.Boolean,
      setter: "set_state"
    }
  },
  parentElementDefinition: gtkWidget
});