import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkFontButton = defineElement({
  tagName: "gtk-font-button",
  constructorClass: Gtk.FontButton,
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
    },
    useFont: {
      key: "use_font",
      type: Type.Boolean,
      setter: "set_use_font"
    },
    useSize: {
      key: "use_size",
      type: Type.Boolean,
      setter: "set_use_size"
    }
  },
  parentElementDefinition: gtkWidget
});