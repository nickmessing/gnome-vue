import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkDialog } from "../gtk/dialog";
export const gtkAppChooserDialog = defineElement({
  tagName: "gtk-app-chooser-dialog",
  constructorClass: Gtk.AppChooserDialog,
  props: {
    heading: {
      key: "heading",
      type: Type.String,
      setter: "set_heading"
    }
  },
  parentElementDefinition: gtkDialog
});