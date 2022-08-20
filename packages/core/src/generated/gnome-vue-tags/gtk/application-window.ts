import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWindow } from "../gtk/window";
export const gtkApplicationWindow = defineElement({
  tagName: "gtk-application-window",
  constructorClass: Gtk.ApplicationWindow,
  props: {
    showMenubar: {
      key: "show_menubar",
      type: Type.Boolean,
      setter: "set_show_menubar"
    }
  },
  parentElementDefinition: gtkWindow
});