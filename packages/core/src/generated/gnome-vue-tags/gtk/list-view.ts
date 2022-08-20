import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkListBase } from "../gtk/list-base";
export const gtkListView = defineElement({
  tagName: "gtk-list-view",
  constructorClass: Gtk.ListView,
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
    model: {
      key: "model",
      type: Type.Object,
      setter: "set_model"
    },
    showSeparators: {
      key: "show_separators",
      type: Type.Boolean,
      setter: "set_show_separators"
    },
    singleClickActivate: {
      key: "single_click_activate",
      type: Type.Boolean,
      setter: "set_single_click_activate"
    }
  },
  parentElementDefinition: gtkListBase
});