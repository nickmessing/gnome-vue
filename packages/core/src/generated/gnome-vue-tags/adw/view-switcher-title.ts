import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const adwViewSwitcherTitle = defineElement({
  tagName: "adw-view-switcher-title",
  constructorClass: Adw.ViewSwitcherTitle,
  props: {
    stack: {
      key: "stack",
      type: Type.Object,
      setter: "set_stack"
    },
    subtitle: {
      key: "subtitle",
      type: Type.String,
      setter: "set_subtitle"
    },
    title: {
      key: "title",
      type: Type.String,
      setter: "set_title"
    },
    viewSwitcherEnabled: {
      key: "view_switcher_enabled",
      type: Type.Boolean,
      setter: "set_view_switcher_enabled"
    }
  },
  parentElementDefinition: gtkWidget
});