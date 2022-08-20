import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkStack = defineElement({
  tagName: "gtk-stack",
  constructorClass: Gtk.Stack,
  props: {
    hhomogeneous: {
      key: "hhomogeneous",
      type: Type.Boolean,
      setter: "set_hhomogeneous"
    },
    interpolateSize: {
      key: "interpolate_size",
      type: Type.Boolean,
      setter: "set_interpolate_size"
    },
    transitionDuration: {
      key: "transition_duration",
      type: Type.Number,
      setter: "set_transition_duration"
    },
    transitionType: {
      key: "transition_type",
      type: Type.Object,
      setter: "set_transition_type"
    },
    vhomogeneous: {
      key: "vhomogeneous",
      type: Type.Boolean,
      setter: "set_vhomogeneous"
    },
    visibleChild: {
      key: "visible_child",
      type: Type.Object,
      setter: "set_visible_child"
    },
    visibleChildName: {
      key: "visible_child_name",
      type: Type.String,
      setter: "set_visible_child_name"
    }
  },
  parentElementDefinition: gtkWidget
});