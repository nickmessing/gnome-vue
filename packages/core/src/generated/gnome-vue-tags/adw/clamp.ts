import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const adwClamp = defineElement({
  tagName: "adw-clamp",
  constructorClass: Adw.Clamp,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    maximumSize: {
      key: "maximum_size",
      type: Type.Number,
      setter: "set_maximum_size"
    },
    tighteningThreshold: {
      key: "tightening_threshold",
      type: Type.Number,
      setter: "set_tightening_threshold"
    }
  },
  parentElementDefinition: gtkWidget
});