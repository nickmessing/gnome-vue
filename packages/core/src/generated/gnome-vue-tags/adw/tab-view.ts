import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const adwTabView = defineElement({
  tagName: "adw-tab-view",
  constructorClass: Adw.TabView,
  props: {
    defaultIcon: {
      key: "default_icon",
      type: Type.Object,
      setter: "set_default_icon"
    },
    menuModel: {
      key: "menu_model",
      type: Type.Object,
      setter: "set_menu_model"
    },
    selectedPage: {
      key: "selected_page",
      type: Type.Object,
      setter: "set_selected_page"
    }
  },
  parentElementDefinition: gtkWidget
});