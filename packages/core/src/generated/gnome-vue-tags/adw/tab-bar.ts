import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const adwTabBar = defineElement({
  tagName: "adw-tab-bar",
  constructorClass: Adw.TabBar,
  props: {
    autohide: {
      key: "autohide",
      type: Type.Boolean,
      setter: "set_autohide"
    },
    endActionWidget: {
      key: "end_action_widget",
      type: Type.Object,
      setter: "set_end_action_widget"
    },
    expandTabs: {
      key: "expand_tabs",
      type: Type.Boolean,
      setter: "set_expand_tabs"
    },
    inverted: {
      key: "inverted",
      type: Type.Boolean,
      setter: "set_inverted"
    },
    startActionWidget: {
      key: "start_action_widget",
      type: Type.Object,
      setter: "set_start_action_widget"
    },
    view: {
      key: "view",
      type: Type.Object,
      setter: "set_view"
    }
  },
  parentElementDefinition: gtkWidget
});