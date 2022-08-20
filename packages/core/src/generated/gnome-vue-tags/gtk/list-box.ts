import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkListBox = defineElement({
  tagName: "gtk-list-box",
  constructorClass: Gtk.ListBox,
  props: {
    activateOnSingleClick: {
      key: "activate_on_single_click",
      type: Type.Boolean,
      setter: "set_activate_on_single_click"
    },
    selectionMode: {
      key: "selection_mode",
      type: Type.Object,
      setter: "set_selection_mode"
    },
    showSeparators: {
      key: "show_separators",
      type: Type.Boolean,
      setter: "set_show_separators"
    }
  },
  parentElementDefinition: gtkWidget
});