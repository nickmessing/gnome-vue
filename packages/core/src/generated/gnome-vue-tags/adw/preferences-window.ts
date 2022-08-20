import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { adwWindow } from "../adw/window";
export const adwPreferencesWindow = defineElement({
  tagName: "adw-preferences-window",
  constructorClass: Adw.PreferencesWindow,
  props: {
    canNavigateBack: {
      key: "can_navigate_back",
      type: Type.Boolean,
      setter: "set_can_navigate_back"
    },
    searchEnabled: {
      key: "search_enabled",
      type: Type.Boolean,
      setter: "set_search_enabled"
    },
    visiblePage: {
      key: "visible_page",
      type: Type.Object,
      setter: "set_visible_page"
    },
    visiblePageName: {
      key: "visible_page_name",
      type: Type.String,
      setter: "set_visible_page_name"
    }
  },
  parentElementDefinition: adwWindow
});