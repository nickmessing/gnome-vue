import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const adwSqueezer = defineElement({
  tagName: "adw-squeezer",
  constructorClass: Adw.Squeezer,
  props: {
    allowNone: {
      key: "allow_none",
      type: Type.Boolean,
      setter: "set_allow_none"
    },
    homogeneous: {
      key: "homogeneous",
      type: Type.Boolean,
      setter: "set_homogeneous"
    },
    interpolateSize: {
      key: "interpolate_size",
      type: Type.Boolean,
      setter: "set_interpolate_size"
    },
    switchThresholdPolicy: {
      key: "switch_threshold_policy",
      type: Type.Object,
      setter: "set_switch_threshold_policy"
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
    xalign: {
      key: "xalign",
      type: Type.Number,
      setter: "set_xalign"
    },
    yalign: {
      key: "yalign",
      type: Type.Number,
      setter: "set_yalign"
    }
  },
  parentElementDefinition: gtkWidget
});