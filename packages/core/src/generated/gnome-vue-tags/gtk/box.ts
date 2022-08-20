import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkBox = defineElement({
  tagName: "gtk-box",
  constructorClass: Gtk.Box,
  props: {
    baselinePosition: {
      key: "baseline_position",
      type: Type.Object,
      setter: "set_baseline_position"
    },
    homogeneous: {
      key: "homogeneous",
      type: Type.Boolean,
      setter: "set_homogeneous"
    },
    spacing: {
      key: "spacing",
      type: Type.Number,
      setter: "set_spacing"
    }
  },
  parentElementDefinition: gtkWidget
});