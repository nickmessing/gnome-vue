import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkDialog } from "../gtk/dialog";
export const gtkPageSetupUnixDialog = defineElement({
  tagName: "gtk-page-setup-unix-dialog",
  constructorClass: Gtk.PageSetupUnixDialog,
  props: {},
  parentElementDefinition: gtkDialog
});