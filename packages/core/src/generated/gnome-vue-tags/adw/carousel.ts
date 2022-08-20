import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const adwCarousel = defineElement({
  tagName: "adw-carousel",
  constructorClass: Adw.Carousel,
  props: {
    allowLongSwipes: {
      key: "allow_long_swipes",
      type: Type.Boolean,
      setter: "set_allow_long_swipes"
    },
    allowMouseDrag: {
      key: "allow_mouse_drag",
      type: Type.Boolean,
      setter: "set_allow_mouse_drag"
    },
    allowScrollWheel: {
      key: "allow_scroll_wheel",
      type: Type.Boolean,
      setter: "set_allow_scroll_wheel"
    },
    interactive: {
      key: "interactive",
      type: Type.Boolean,
      setter: "set_interactive"
    },
    revealDuration: {
      key: "reveal_duration",
      type: Type.Number,
      setter: "set_reveal_duration"
    },
    scrollParams: {
      key: "scroll_params",
      type: Type.Object,
      setter: "set_scroll_params"
    },
    spacing: {
      key: "spacing",
      type: Type.Number,
      setter: "set_spacing"
    }
  },
  parentElementDefinition: gtkWidget
});