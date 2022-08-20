import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { adwPreferencesRow } from "../adw/preferences-row";
export const adwActionRow = defineElement({
  tagName: "adw-action-row",
  constructorClass: Adw.ActionRow,
  props: {
    activatableWidget: {
      key: "activatable_widget",
      type: Type.Object,
      setter: "set_activatable_widget"
    },
    iconName: {
      key: "icon_name",
      type: Type.String,
      setter: "set_icon_name"
    },
    subtitle: {
      key: "subtitle",
      type: Type.String,
      setter: "set_subtitle"
    },
    subtitleLines: {
      key: "subtitle_lines",
      type: Type.Number,
      setter: "set_subtitle_lines"
    },
    titleLines: {
      key: "title_lines",
      type: Type.Number,
      setter: "set_title_lines"
    }
  },
  parentElementDefinition: adwPreferencesRow
});