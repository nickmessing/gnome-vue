import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkStatusbar = defineElement({
  tagName: "gtk-statusbar",
  constructorClass: Gtk.Statusbar,
  props: {},
  parentElementDefinition: gtkWidget
});