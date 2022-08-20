import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkListBoxRow = defineElement({
  tagName: "gtk-list-box-row",
  constructorClass: Gtk.ListBoxRow,
  props: {
    activatable: {
      key: "activatable",
      type: Type.Boolean,
      setter: "set_activatable"
    },
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    selectable: {
      key: "selectable",
      type: Type.Boolean,
      setter: "set_selectable"
    }
  },
  parentElementDefinition: gtkWidget
});