import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkMenuButton = defineElement({
  tagName: "gtk-menu-button",
  constructorClass: Gtk.MenuButton,
  props: {
    alwaysShowArrow: {
      key: "always_show_arrow",
      type: Type.Boolean,
      setter: "set_always_show_arrow"
    },
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
    primary: {
      key: "primary",
      type: Type.Boolean,
      setter: "set_primary"
    },
    useUnderline: {
      key: "use_underline",
      type: Type.Boolean,
      setter: "set_use_underline"
    }
  },
  parentElementDefinition: gtkWidget
});