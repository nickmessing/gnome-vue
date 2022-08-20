import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkTreeView = defineElement({
  tagName: "gtk-tree-view",
  constructorClass: Gtk.TreeView,
  props: {
    activateOnSingleClick: {
      key: "activate_on_single_click",
      type: Type.Boolean,
      setter: "set_activate_on_single_click"
    },
    enableSearch: {
      key: "enable_search",
      type: Type.Boolean,
      setter: "set_enable_search"
    },
    enableTreeLines: {
      key: "enable_tree_lines",
      type: Type.Boolean,
      setter: "set_enable_tree_lines"
    },
    expanderColumn: {
      key: "expander_column",
      type: Type.Object,
      setter: "set_expander_column"
    },
    fixedHeightMode: {
      key: "fixed_height_mode",
      type: Type.Boolean,
      setter: "set_fixed_height_mode"
    },
    headersClickable: {
      key: "headers_clickable",
      type: Type.Boolean,
      setter: "set_headers_clickable"
    },
    headersVisible: {
      key: "headers_visible",
      type: Type.Boolean,
      setter: "set_headers_visible"
    },
    hoverExpand: {
      key: "hover_expand",
      type: Type.Boolean,
      setter: "set_hover_expand"
    },
    hoverSelection: {
      key: "hover_selection",
      type: Type.Boolean,
      setter: "set_hover_selection"
    },
    levelIndentation: {
      key: "level_indentation",
      type: Type.Number,
      setter: "set_level_indentation"
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
    rubberBanding: {
      key: "rubber_banding",
      type: Type.Boolean,
      setter: "set_rubber_banding"
    },
    searchColumn: {
      key: "search_column",
      type: Type.Number,
      setter: "set_search_column"
    },
    showExpanders: {
      key: "show_expanders",
      type: Type.Boolean,
      setter: "set_show_expanders"
    },
    tooltipColumn: {
      key: "tooltip_column",
      type: Type.Number,
      setter: "set_tooltip_column"
    }
  },
  parentElementDefinition: gtkWidget
});