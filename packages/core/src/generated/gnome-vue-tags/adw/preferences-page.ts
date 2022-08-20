import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const adwPreferencesPage = defineElement({
  tagName: "adw-preferences-page",
  constructorClass: Adw.PreferencesPage,
  props: {
    iconName: {
      key: "icon_name",
      type: Type.String,
      setter: "set_icon_name"
    },
    name: {
      key: "name",
      type: Type.String,
      setter: "set_name"
    },
    title: {
      key: "title",
      type: Type.String,
      setter: "set_title"
    },
    useUnderline: {
      key: "use_underline",
      type: Type.Boolean,
      setter: "set_use_underline"
    }
  },
  parentElementDefinition: gtkWidget
});