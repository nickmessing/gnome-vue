import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkAspectFrame = defineElement({
  tagName: "gtk-aspect-frame",
  constructorClass: Gtk.AspectFrame,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    obeyChild: {
      key: "obey_child",
      type: Type.Boolean,
      setter: "set_obey_child"
    },
    ratio: {
      key: "ratio",
      type: Type.Number,
      setter: "set_ratio"
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