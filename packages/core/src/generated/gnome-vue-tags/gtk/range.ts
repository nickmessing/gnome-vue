import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkRange = defineElement({
  tagName: "gtk-range",
  constructorClass: Gtk.Range,
  props: {
    adjustment: {
      key: "adjustment",
      type: Type.Object,
      setter: "set_adjustment"
    },
    fillLevel: {
      key: "fill_level",
      type: Type.Number,
      setter: "set_fill_level"
    },
    inverted: {
      key: "inverted",
      type: Type.Boolean,
      setter: "set_inverted"
    },
    restrictToFillLevel: {
      key: "restrict_to_fill_level",
      type: Type.Boolean,
      setter: "set_restrict_to_fill_level"
    },
    roundDigits: {
      key: "round_digits",
      type: Type.Number,
      setter: "set_round_digits"
    },
    showFillLevel: {
      key: "show_fill_level",
      type: Type.Boolean,
      setter: "set_show_fill_level"
    }
  },
  parentElementDefinition: gtkWidget
});