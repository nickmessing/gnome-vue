import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const adwFlap = defineElement({
  tagName: "adw-flap",
  constructorClass: Adw.Flap,
  props: {
    content: {
      key: "content",
      type: Type.Object,
      setter: "set_content"
    },
    flap: {
      key: "flap",
      type: Type.Object,
      setter: "set_flap"
    },
    flapPosition: {
      key: "flap_position",
      type: Type.Object,
      setter: "set_flap_position"
    },
    foldDuration: {
      key: "fold_duration",
      type: Type.Number,
      setter: "set_fold_duration"
    },
    foldPolicy: {
      key: "fold_policy",
      type: Type.Object,
      setter: "set_fold_policy"
    },
    foldThresholdPolicy: {
      key: "fold_threshold_policy",
      type: Type.Object,
      setter: "set_fold_threshold_policy"
    },
    locked: {
      key: "locked",
      type: Type.Boolean,
      setter: "set_locked"
    },
    modal: {
      key: "modal",
      type: Type.Boolean,
      setter: "set_modal"
    },
    revealFlap: {
      key: "reveal_flap",
      type: Type.Boolean,
      setter: "set_reveal_flap"
    },
    revealParams: {
      key: "reveal_params",
      type: Type.Object,
      setter: "set_reveal_params"
    },
    separator: {
      key: "separator",
      type: Type.Object,
      setter: "set_separator"
    },
    swipeToClose: {
      key: "swipe_to_close",
      type: Type.Boolean,
      setter: "set_swipe_to_close"
    },
    swipeToOpen: {
      key: "swipe_to_open",
      type: Type.Boolean,
      setter: "set_swipe_to_open"
    },
    transitionType: {
      key: "transition_type",
      type: Type.Object,
      setter: "set_transition_type"
    }
  },
  parentElementDefinition: gtkWidget
});