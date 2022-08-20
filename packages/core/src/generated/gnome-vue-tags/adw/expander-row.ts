import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { adwPreferencesRow } from "../adw/preferences-row";
export const adwExpanderRow = defineElement({
  tagName: "adw-expander-row",
  constructorClass: Adw.ExpanderRow,
  props: {
    enableExpansion: {
      key: "enable_expansion",
      type: Type.Boolean,
      setter: "set_enable_expansion"
    },
    expanded: {
      key: "expanded",
      type: Type.Boolean,
      setter: "set_expanded"
    },
    iconName: {
      key: "icon_name",
      type: Type.String,
      setter: "set_icon_name"
    },
    showEnableSwitch: {
      key: "show_enable_switch",
      type: Type.Boolean,
      setter: "set_show_enable_switch"
    },
    subtitle: {
      key: "subtitle",
      type: Type.String,
      setter: "set_subtitle"
    }
  },
  parentElementDefinition: adwPreferencesRow
});