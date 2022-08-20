import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkColorButton = defineElement({
  tagName: "gtk-color-button",
  constructorClass: Gtk.ColorButton,
  props: {
    modal: {
      key: "modal",
      type: Type.Boolean,
      setter: "set_modal"
    },
    title: {
      key: "title",
      type: Type.String,
      setter: "set_title"
    }
  },
  parentElementDefinition: gtkWidget
});