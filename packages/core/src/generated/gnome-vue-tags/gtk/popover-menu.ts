import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkPopover } from "../gtk/popover";
export const gtkPopoverMenu = defineElement({
  tagName: "gtk-popover-menu",
  constructorClass: Gtk.PopoverMenu,
  props: {
    menuModel: {
      key: "menu_model",
      type: Type.Object,
      setter: "set_menu_model"
    }
  },
  parentElementDefinition: gtkPopover
});