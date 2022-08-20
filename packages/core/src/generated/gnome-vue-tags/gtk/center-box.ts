import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkCenterBox = defineElement({
  tagName: "gtk-center-box",
  constructorClass: Gtk.CenterBox,
  props: {
    baselinePosition: {
      key: "baseline_position",
      type: Type.Object,
      setter: "set_baseline_position"
    }
  },
  parentElementDefinition: gtkWidget
});