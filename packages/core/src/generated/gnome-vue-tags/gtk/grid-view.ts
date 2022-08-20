import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkListBase } from "../gtk/list-base";
export const gtkGridView = defineElement({
  tagName: "gtk-grid-view",
  constructorClass: Gtk.GridView,
  props: {
    enableRubberband: {
      key: "enable_rubberband",
      type: Type.Boolean,
      setter: "set_enable_rubberband"
    },
    factory: {
      key: "factory",
      type: Type.Object,
      setter: "set_factory"
    },
    maxColumns: {
      key: "max_columns",
      type: Type.Number,
      setter: "set_max_columns"
    },
    minColumns: {
      key: "min_columns",
      type: Type.Number,
      setter: "set_min_columns"
    },
    model: {
      key: "model",
      type: Type.Object,
      setter: "set_model"
    },
    singleClickActivate: {
      key: "single_click_activate",
      type: Type.Boolean,
      setter: "set_single_click_activate"
    }
  },
  parentElementDefinition: gtkListBase
});