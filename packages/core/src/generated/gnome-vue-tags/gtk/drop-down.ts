import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkDropDown = defineElement({
  tagName: "gtk-drop-down",
  constructorClass: Gtk.DropDown,
  props: {
    enableSearch: {
      key: "enable_search",
      type: Type.Boolean,
      setter: "set_enable_search"
    },
    expression: {
      key: "expression",
      type: Type.Object,
      setter: "set_expression"
    },
    factory: {
      key: "factory",
      type: Type.Object,
      setter: "set_factory"
    },
    listFactory: {
      key: "list_factory",
      type: Type.Object,
      setter: "set_list_factory"
    },
    model: {
      key: "model",
      type: Type.Object,
      setter: "set_model"
    },
    selected: {
      key: "selected",
      type: Type.Number,
      setter: "set_selected"
    },
    showArrow: {
      key: "show_arrow",
      type: Type.Boolean,
      setter: "set_show_arrow"
    }
  },
  parentElementDefinition: gtkWidget
});