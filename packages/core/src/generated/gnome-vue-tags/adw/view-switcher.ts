import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const adwViewSwitcher = defineElement({
  tagName: "adw-view-switcher",
  constructorClass: Adw.ViewSwitcher,
  props: {
    policy: {
      key: "policy",
      type: Type.Object,
      setter: "set_policy"
    },
    stack: {
      key: "stack",
      type: Type.Object,
      setter: "set_stack"
    }
  },
  parentElementDefinition: gtkWidget
});