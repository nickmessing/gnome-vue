import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkDialog } from "../gtk/dialog";
export const gtkColorChooserDialog = defineElement({
  tagName: "gtk-color-chooser-dialog",
  constructorClass: Gtk.ColorChooserDialog,
  props: {},
  parentElementDefinition: gtkDialog
});