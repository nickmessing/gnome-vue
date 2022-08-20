import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const adwSplitButton = defineElement({
  tagName: "adw-split-button",
  constructorClass: Adw.SplitButton,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    direction: {
      key: "direction",
      type: Type.Object,
      setter: "set_direction"
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
    menuModel: {
      key: "menu_model",
      type: Type.Object,
      setter: "set_menu_model"
    },
    popover: {
      key: "popover",
      type: Type.Object,
      setter: "set_popover"
    },
    useUnderline: {
      key: "use_underline",
      type: Type.Boolean,
      setter: "set_use_underline"
    }
  },
  parentElementDefinition: gtkWidget
});