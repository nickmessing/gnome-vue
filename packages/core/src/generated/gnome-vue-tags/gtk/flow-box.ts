import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkFlowBox = defineElement({
  tagName: "gtk-flow-box",
  constructorClass: Gtk.FlowBox,
  props: {
    activateOnSingleClick: {
      key: "activate_on_single_click",
      type: Type.Boolean,
      setter: "set_activate_on_single_click"
    },
    columnSpacing: {
      key: "column_spacing",
      type: Type.Number,
      setter: "set_column_spacing"
    },
    homogeneous: {
      key: "homogeneous",
      type: Type.Boolean,
      setter: "set_homogeneous"
    },
    maxChildrenPerLine: {
      key: "max_children_per_line",
      type: Type.Number,
      setter: "set_max_children_per_line"
    },
    minChildrenPerLine: {
      key: "min_children_per_line",
      type: Type.Number,
      setter: "set_min_children_per_line"
    },
    rowSpacing: {
      key: "row_spacing",
      type: Type.Number,
      setter: "set_row_spacing"
    },
    selectionMode: {
      key: "selection_mode",
      type: Type.Object,
      setter: "set_selection_mode"
    }
  },
  parentElementDefinition: gtkWidget
});