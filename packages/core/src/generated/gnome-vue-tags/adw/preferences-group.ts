import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const adwPreferencesGroup = defineElement({
  tagName: "adw-preferences-group",
  constructorClass: Adw.PreferencesGroup,
  props: {
    description: {
      key: "description",
      type: Type.String,
      setter: "set_description"
    },
    headerSuffix: {
      key: "header_suffix",
      type: Type.Object,
      setter: "set_header_suffix"
    },
    title: {
      key: "title",
      type: Type.String,
      setter: "set_title"
    }
  },
  parentElementDefinition: gtkWidget
});