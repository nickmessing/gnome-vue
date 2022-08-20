import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkGrid = defineElement({
  tagName: "gtk-grid",
  constructorClass: Gtk.Grid,
  props: {
    baselineRow: {
      key: "baseline_row",
      type: Type.Number,
      setter: "set_baseline_row"
    },
    columnHomogeneous: {
      key: "column_homogeneous",
      type: Type.Boolean,
      setter: "set_column_homogeneous"
    },
    columnSpacing: {
      key: "column_spacing",
      type: Type.Number,
      setter: "set_column_spacing"
    },
    rowHomogeneous: {
      key: "row_homogeneous",
      type: Type.Boolean,
      setter: "set_row_homogeneous"
    },
    rowSpacing: {
      key: "row_spacing",
      type: Type.Number,
      setter: "set_row_spacing"
    }
  },
  parentElementDefinition: gtkWidget
});