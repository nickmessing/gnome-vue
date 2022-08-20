import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkLevelBar = defineElement({
  tagName: "gtk-level-bar",
  constructorClass: Gtk.LevelBar,
  props: {
    inverted: {
      key: "inverted",
      type: Type.Boolean,
      setter: "set_inverted"
    },
    maxValue: {
      key: "max_value",
      type: Type.Number,
      setter: "set_max_value"
    },
    minValue: {
      key: "min_value",
      type: Type.Number,
      setter: "set_min_value"
    },
    mode: {
      key: "mode",
      type: Type.Object,
      setter: "set_mode"
    },
    value: {
      key: "value",
      type: Type.Number,
      setter: "set_value"
    }
  },
  parentElementDefinition: gtkWidget
});