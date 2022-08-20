import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkScrolledWindow = defineElement({
  tagName: "gtk-scrolled-window",
  constructorClass: Gtk.ScrolledWindow,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    hadjustment: {
      key: "hadjustment",
      type: Type.Object,
      setter: "set_hadjustment"
    },
    hasFrame: {
      key: "has_frame",
      type: Type.Boolean,
      setter: "set_has_frame"
    },
    kineticScrolling: {
      key: "kinetic_scrolling",
      type: Type.Boolean,
      setter: "set_kinetic_scrolling"
    },
    maxContentHeight: {
      key: "max_content_height",
      type: Type.Number,
      setter: "set_max_content_height"
    },
    maxContentWidth: {
      key: "max_content_width",
      type: Type.Number,
      setter: "set_max_content_width"
    },
    minContentHeight: {
      key: "min_content_height",
      type: Type.Number,
      setter: "set_min_content_height"
    },
    minContentWidth: {
      key: "min_content_width",
      type: Type.Number,
      setter: "set_min_content_width"
    },
    overlayScrolling: {
      key: "overlay_scrolling",
      type: Type.Boolean,
      setter: "set_overlay_scrolling"
    },
    propagateNaturalHeight: {
      key: "propagate_natural_height",
      type: Type.Boolean,
      setter: "set_propagate_natural_height"
    },
    propagateNaturalWidth: {
      key: "propagate_natural_width",
      type: Type.Boolean,
      setter: "set_propagate_natural_width"
    },
    vadjustment: {
      key: "vadjustment",
      type: Type.Object,
      setter: "set_vadjustment"
    }
  },
  parentElementDefinition: gtkWidget
});