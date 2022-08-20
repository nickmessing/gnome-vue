import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkIconView = defineElement({
  tagName: "gtk-icon-view",
  constructorClass: Gtk.IconView,
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
    columns: {
      key: "columns",
      type: Type.Number,
      setter: "set_columns"
    },
    itemOrientation: {
      key: "item_orientation",
      type: Type.Object,
      setter: "set_item_orientation"
    },
    itemPadding: {
      key: "item_padding",
      type: Type.Number,
      setter: "set_item_padding"
    },
    itemWidth: {
      key: "item_width",
      type: Type.Number,
      setter: "set_item_width"
    },
    margin: {
      key: "margin",
      type: Type.Number,
      setter: "set_margin"
    },
    markupColumn: {
      key: "markup_column",
      type: Type.Number,
      setter: "set_markup_column"
    },
    model: {
      key: "model",
      type: Type.Object,
      setter: "set_model"
    },
    pixbufColumn: {
      key: "pixbuf_column",
      type: Type.Number,
      setter: "set_pixbuf_column"
    },
    reorderable: {
      key: "reorderable",
      type: Type.Boolean,
      setter: "set_reorderable"
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
    },
    spacing: {
      key: "spacing",
      type: Type.Number,
      setter: "set_spacing"
    },
    textColumn: {
      key: "text_column",
      type: Type.Number,
      setter: "set_text_column"
    },
    tooltipColumn: {
      key: "tooltip_column",
      type: Type.Number,
      setter: "set_tooltip_column"
    }
  },
  parentElementDefinition: gtkWidget
});