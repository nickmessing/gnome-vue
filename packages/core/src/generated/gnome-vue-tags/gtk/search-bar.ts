import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkSearchBar = defineElement({
  tagName: "gtk-search-bar",
  constructorClass: Gtk.SearchBar,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    keyCaptureWidget: {
      key: "key_capture_widget",
      type: Type.Object,
      setter: "set_key_capture_widget"
    },
    showCloseButton: {
      key: "show_close_button",
      type: Type.Boolean,
      setter: "set_show_close_button"
    }
  },
  parentElementDefinition: gtkWidget
});