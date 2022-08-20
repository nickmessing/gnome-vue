import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkTreeExpander = defineElement({
  tagName: "gtk-tree-expander",
  constructorClass: Gtk.TreeExpander,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    indentForIcon: {
      key: "indent_for_icon",
      type: Type.Boolean,
      setter: "set_indent_for_icon"
    },
    listRow: {
      key: "list_row",
      type: Type.Object,
      setter: "set_list_row"
    }
  },
  parentElementDefinition: gtkWidget
});