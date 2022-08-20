import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkProgressBar = defineElement({
  tagName: "gtk-progress-bar",
  constructorClass: Gtk.ProgressBar,
  props: {
    ellipsize: {
      key: "ellipsize",
      type: Type.Object,
      setter: "set_ellipsize"
    },
    fraction: {
      key: "fraction",
      type: Type.Number,
      setter: "set_fraction"
    },
    inverted: {
      key: "inverted",
      type: Type.Boolean,
      setter: "set_inverted"
    },
    pulseStep: {
      key: "pulse_step",
      type: Type.Number,
      setter: "set_pulse_step"
    },
    showText: {
      key: "show_text",
      type: Type.Boolean,
      setter: "set_show_text"
    },
    text: {
      key: "text",
      type: Type.String,
      setter: "set_text"
    }
  },
  parentElementDefinition: gtkWidget
});