import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkNotebook = defineElement({
  tagName: "gtk-notebook",
  constructorClass: Gtk.Notebook,
  props: {
    groupName: {
      key: "group_name",
      type: Type.String,
      setter: "set_group_name"
    },
    scrollable: {
      key: "scrollable",
      type: Type.Boolean,
      setter: "set_scrollable"
    },
    showBorder: {
      key: "show_border",
      type: Type.Boolean,
      setter: "set_show_border"
    },
    showTabs: {
      key: "show_tabs",
      type: Type.Boolean,
      setter: "set_show_tabs"
    },
    tabPos: {
      key: "tab_pos",
      type: Type.Object,
      setter: "set_tab_pos"
    }
  },
  parentElementDefinition: gtkWidget
});