import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkRange } from "../gtk/range";
export const gtkScale = defineElement({
  tagName: "gtk-scale",
  constructorClass: Gtk.Scale,
  props: {
    digits: {
      key: "digits",
      type: Type.Number,
      setter: "set_digits"
    },
    drawValue: {
      key: "draw_value",
      type: Type.Boolean,
      setter: "set_draw_value"
    },
    hasOrigin: {
      key: "has_origin",
      type: Type.Boolean,
      setter: "set_has_origin"
    },
    valuePos: {
      key: "value_pos",
      type: Type.Object,
      setter: "set_value_pos"
    }
  },
  parentElementDefinition: gtkRange
});