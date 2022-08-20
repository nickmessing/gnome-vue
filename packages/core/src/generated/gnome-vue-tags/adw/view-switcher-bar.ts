import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const adwViewSwitcherBar = defineElement({
  tagName: "adw-view-switcher-bar",
  constructorClass: Adw.ViewSwitcherBar,
  props: {
    reveal: {
      key: "reveal",
      type: Type.Boolean,
      setter: "set_reveal"
    },
    stack: {
      key: "stack",
      type: Type.Object,
      setter: "set_stack"
    }
  },
  parentElementDefinition: gtkWidget
});