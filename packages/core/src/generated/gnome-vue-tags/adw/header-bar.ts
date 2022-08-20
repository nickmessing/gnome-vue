import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const adwHeaderBar = defineElement({
  tagName: "adw-header-bar",
  constructorClass: Adw.HeaderBar,
  props: {
    centeringPolicy: {
      key: "centering_policy",
      type: Type.Object,
      setter: "set_centering_policy"
    },
    decorationLayout: {
      key: "decoration_layout",
      type: Type.String,
      setter: "set_decoration_layout"
    },
    showEndTitleButtons: {
      key: "show_end_title_buttons",
      type: Type.Boolean,
      setter: "set_show_end_title_buttons"
    },
    showStartTitleButtons: {
      key: "show_start_title_buttons",
      type: Type.Boolean,
      setter: "set_show_start_title_buttons"
    },
    titleWidget: {
      key: "title_widget",
      type: Type.Object,
      setter: "set_title_widget"
    }
  },
  parentElementDefinition: gtkWidget
});