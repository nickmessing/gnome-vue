import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkAppChooserButton = defineElement({
  tagName: "gtk-app-chooser-button",
  constructorClass: Gtk.AppChooserButton,
  props: {
    heading: {
      key: "heading",
      type: Type.String,
      setter: "set_heading"
    },
    modal: {
      key: "modal",
      type: Type.Boolean,
      setter: "set_modal"
    },
    showDefaultItem: {
      key: "show_default_item",
      type: Type.Boolean,
      setter: "set_show_default_item"
    },
    showDialogItem: {
      key: "show_dialog_item",
      type: Type.Boolean,
      setter: "set_show_dialog_item"
    }
  },
  parentElementDefinition: gtkWidget
});