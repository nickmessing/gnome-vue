import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const adwWindowTitle = defineElement({
  tagName: "adw-window-title",
  constructorClass: Adw.WindowTitle,
  props: {
    subtitle: {
      key: "subtitle",
      type: Type.String,
      setter: "set_subtitle"
    },
    title: {
      key: "title",
      type: Type.String,
      setter: "set_title"
    }
  },
  parentElementDefinition: gtkWidget
});