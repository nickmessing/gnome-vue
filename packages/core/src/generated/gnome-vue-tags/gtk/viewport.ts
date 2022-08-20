import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkViewport = defineElement({
  tagName: "gtk-viewport",
  constructorClass: Gtk.Viewport,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    scrollToFocus: {
      key: "scroll_to_focus",
      type: Type.Boolean,
      setter: "set_scroll_to_focus"
    }
  },
  parentElementDefinition: gtkWidget
});