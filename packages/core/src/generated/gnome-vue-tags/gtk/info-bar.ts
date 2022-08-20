import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkInfoBar = defineElement({
  tagName: "gtk-info-bar",
  constructorClass: Gtk.InfoBar,
  props: {
    messageType: {
      key: "message_type",
      type: Type.Object,
      setter: "set_message_type"
    },
    revealed: {
      key: "revealed",
      type: Type.Boolean,
      setter: "set_revealed"
    },
    showCloseButton: {
      key: "show_close_button",
      type: Type.Boolean,
      setter: "set_show_close_button"
    }
  },
  parentElementDefinition: gtkWidget
});