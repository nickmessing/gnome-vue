import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkPopoverMenuBar = defineElement({
  tagName: "gtk-popover-menu-bar",
  constructorClass: Gtk.PopoverMenuBar,
  props: {
    menuModel: {
      key: "menu_model",
      type: Type.Object,
      setter: "set_menu_model"
    }
  },
  parentElementDefinition: gtkWidget
});