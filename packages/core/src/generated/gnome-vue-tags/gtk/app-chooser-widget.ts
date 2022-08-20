import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkAppChooserWidget = defineElement({
  tagName: "gtk-app-chooser-widget",
  constructorClass: Gtk.AppChooserWidget,
  props: {
    defaultText: {
      key: "default_text",
      type: Type.String,
      setter: "set_default_text"
    },
    showAll: {
      key: "show_all",
      type: Type.Boolean,
      setter: "set_show_all"
    },
    showDefault: {
      key: "show_default",
      type: Type.Boolean,
      setter: "set_show_default"
    },
    showFallback: {
      key: "show_fallback",
      type: Type.Boolean,
      setter: "set_show_fallback"
    },
    showOther: {
      key: "show_other",
      type: Type.Boolean,
      setter: "set_show_other"
    },
    showRecommended: {
      key: "show_recommended",
      type: Type.Boolean,
      setter: "set_show_recommended"
    }
  },
  parentElementDefinition: gtkWidget
});