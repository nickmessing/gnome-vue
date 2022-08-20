import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const adwAvatar = defineElement({
  tagName: "adw-avatar",
  constructorClass: Adw.Avatar,
  props: {
    customImage: {
      key: "custom_image",
      type: Type.Object,
      setter: "set_custom_image"
    },
    iconName: {
      key: "icon_name",
      type: Type.String,
      setter: "set_icon_name"
    },
    showInitials: {
      key: "show_initials",
      type: Type.Boolean,
      setter: "set_show_initials"
    },
    size: {
      key: "size",
      type: Type.Number,
      setter: "set_size"
    },
    text: {
      key: "text",
      type: Type.String,
      setter: "set_text"
    }
  },
  parentElementDefinition: gtkWidget
});