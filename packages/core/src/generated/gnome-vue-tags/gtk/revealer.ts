import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkRevealer = defineElement({
  tagName: "gtk-revealer",
  constructorClass: Gtk.Revealer,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    revealChild: {
      key: "reveal_child",
      type: Type.Boolean,
      setter: "set_reveal_child"
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
    }
  },
  parentElementDefinition: gtkWidget
});