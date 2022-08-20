import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const adwViewStack = defineElement({
  tagName: "adw-view-stack",
  constructorClass: Adw.ViewStack,
  props: {
    hhomogeneous: {
      key: "hhomogeneous",
      type: Type.Boolean,
      setter: "set_hhomogeneous"
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