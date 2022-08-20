import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const adwLeaflet = defineElement({
  tagName: "adw-leaflet",
  constructorClass: Adw.Leaflet,
  props: {
    canNavigateBack: {
      key: "can_navigate_back",
      type: Type.Boolean,
      setter: "set_can_navigate_back"
    },
    canNavigateForward: {
      key: "can_navigate_forward",
      type: Type.Boolean,
      setter: "set_can_navigate_forward"
    },
    canUnfold: {
      key: "can_unfold",
      type: Type.Boolean,
      setter: "set_can_unfold"
    },
    childTransitionParams: {
      key: "child_transition_params",
      type: Type.Object,
      setter: "set_child_transition_params"
    },
    foldThresholdPolicy: {
      key: "fold_threshold_policy",
      type: Type.Object,
      setter: "set_fold_threshold_policy"
    },
    homogeneous: {
      key: "homogeneous",
      type: Type.Boolean,
      setter: "set_homogeneous"
    },
    modeTransitionDuration: {
      key: "mode_transition_duration",
      type: Type.Number,
      setter: "set_mode_transition_duration"
    },
    transitionType: {
      key: "transition_type",
      type: Type.Object,
      setter: "set_transition_type"
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