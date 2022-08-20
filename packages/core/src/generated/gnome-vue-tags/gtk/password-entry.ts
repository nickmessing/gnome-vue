import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkPasswordEntry = defineElement({
  tagName: "gtk-password-entry",
  constructorClass: Gtk.PasswordEntry,
  props: {
    extraMenu: {
      key: "extra_menu",
      type: Type.Object,
      setter: "set_extra_menu"
    },
    showPeekIcon: {
      key: "show_peek_icon",
      type: Type.Boolean,
      setter: "set_show_peek_icon"
    }
  },
  parentElementDefinition: gtkWidget
});