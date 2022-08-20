import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkButton = defineElement({
  tagName: "gtk-button",
  constructorClass: Gtk.Button,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    hasFrame: {
      key: "has_frame",
      type: Type.Boolean,
      setter: "set_has_frame"
    },
    iconName: {
      key: "icon_name",
      type: Type.String,
      setter: "set_icon_name"
    },
    label: {
      key: "label",
      type: Type.String,
      setter: "set_label"
    },
    useUnderline: {
      key: "use_underline",
      type: Type.Boolean,
      setter: "set_use_underline"
    }
  },
  parentElementDefinition: gtkWidget
});