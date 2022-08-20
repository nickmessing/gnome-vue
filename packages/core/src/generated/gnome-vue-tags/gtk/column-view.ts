import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkColumnView = defineElement({
  tagName: "gtk-column-view",
  constructorClass: Gtk.ColumnView,
  props: {
    enableRubberband: {
      key: "enable_rubberband",
      type: Type.Boolean,
      setter: "set_enable_rubberband"
    },
    model: {
      key: "model",
      type: Type.Object,
      setter: "set_model"
    },
    reorderable: {
      key: "reorderable",
      type: Type.Boolean,
      setter: "set_reorderable"
    },
    showColumnSeparators: {
      key: "show_column_separators",
      type: Type.Boolean,
      setter: "set_show_column_separators"
    },
    showRowSeparators: {
      key: "show_row_separators",
      type: Type.Boolean,
      setter: "set_show_row_separators"
    },
    singleClickActivate: {
      key: "single_click_activate",
      type: Type.Boolean,
      setter: "set_single_click_activate"
    }
  },
  parentElementDefinition: gtkWidget
});