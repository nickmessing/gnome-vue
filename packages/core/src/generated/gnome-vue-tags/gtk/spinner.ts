import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkSpinner = defineElement({
  tagName: "gtk-spinner",
  constructorClass: Gtk.Spinner,
  props: {
    spinning: {
      key: "spinning",
      type: Type.Boolean,
      setter: "set_spinning"
    }
  },
  parentElementDefinition: gtkWidget
});