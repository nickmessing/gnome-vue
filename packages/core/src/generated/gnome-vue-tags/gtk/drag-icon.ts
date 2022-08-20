import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkDragIcon = defineElement({
  tagName: "gtk-drag-icon",
  constructorClass: Gtk.DragIcon,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    }
  },
  parentElementDefinition: gtkWidget
});