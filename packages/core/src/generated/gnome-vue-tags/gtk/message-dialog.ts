import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkDialog } from "../gtk/dialog";
export const gtkMessageDialog = defineElement({
  tagName: "gtk-message-dialog",
  constructorClass: Gtk.MessageDialog,
  props: {},
  parentElementDefinition: gtkDialog
});