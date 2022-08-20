import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkPaned = defineElement({
  tagName: "gtk-paned",
  constructorClass: Gtk.Paned,
  props: {
    endChild: {
      key: "end_child",
      type: Type.Object,
      setter: "set_end_child"
    },
    position: {
      key: "position",
      type: Type.Number,
      setter: "set_position"
    },
    resizeEndChild: {
      key: "resize_end_child",
      type: Type.Boolean,
      setter: "set_resize_end_child"
    },
    resizeStartChild: {
      key: "resize_start_child",
      type: Type.Boolean,
      setter: "set_resize_start_child"
    },
    shrinkEndChild: {
      key: "shrink_end_child",
      type: Type.Boolean,
      setter: "set_shrink_end_child"
    },
    shrinkStartChild: {
      key: "shrink_start_child",
      type: Type.Boolean,
      setter: "set_shrink_start_child"
    },
    startChild: {
      key: "start_child",
      type: Type.Object,
      setter: "set_start_child"
    },
    wideHandle: {
      key: "wide_handle",
      type: Type.Boolean,
      setter: "set_wide_handle"
    }
  },
  parentElementDefinition: gtkWidget
});