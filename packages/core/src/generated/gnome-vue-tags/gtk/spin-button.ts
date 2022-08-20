import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkSpinButton = defineElement({
  tagName: "gtk-spin-button",
  constructorClass: Gtk.SpinButton,
  props: {
    adjustment: {
      key: "adjustment",
      type: Type.Object,
      setter: "set_adjustment"
    },
    climbRate: {
      key: "climb_rate",
      type: Type.Number,
      setter: "set_climb_rate"
    },
    digits: {
      key: "digits",
      type: Type.Number,
      setter: "set_digits"
    },
    numeric: {
      key: "numeric",
      type: Type.Boolean,
      setter: "set_numeric"
    },
    snapToTicks: {
      key: "snap_to_ticks",
      type: Type.Boolean,
      setter: "set_snap_to_ticks"
    },
    updatePolicy: {
      key: "update_policy",
      type: Type.Object,
      setter: "set_update_policy"
    },
    value: {
      key: "value",
      type: Type.Number,
      setter: "set_value"
    },
    wrap: {
      key: "wrap",
      type: Type.Boolean,
      setter: "set_wrap"
    }
  },
  parentElementDefinition: gtkWidget
});