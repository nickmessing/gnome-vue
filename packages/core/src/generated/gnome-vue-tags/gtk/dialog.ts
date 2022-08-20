import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWindow } from "../gtk/window";
export const gtkDialog = defineElement({
  tagName: "gtk-dialog",
  constructorClass: Gtk.Dialog,
  props: {},
  parentElementDefinition: gtkWindow
});