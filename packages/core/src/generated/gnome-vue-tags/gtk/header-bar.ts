import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkHeaderBar = defineElement({
  tagName: "gtk-header-bar",
  constructorClass: Gtk.HeaderBar,
  props: {
    decorationLayout: {
      key: "decoration_layout",
      type: Type.String,
      setter: "set_decoration_layout"
    },
    showTitleButtons: {
      key: "show_title_buttons",
      type: Type.Boolean,
      setter: "set_show_title_buttons"
    },
    titleWidget: {
      key: "title_widget",
      type: Type.Object,
      setter: "set_title_widget"
    }
  },
  parentElementDefinition: gtkWidget
});