import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkCellView = defineElement({
  tagName: "gtk-cell-view",
  constructorClass: Gtk.CellView,
  props: {
    drawSensitive: {
      key: "draw_sensitive",
      type: Type.Boolean,
      setter: "set_draw_sensitive"
    },
    fitModel: {
      key: "fit_model",
      type: Type.Boolean,
      setter: "set_fit_model"
    },
    model: {
      key: "model",
      type: Type.Object,
      setter: "set_model"
    }
  },
  parentElementDefinition: gtkWidget
});