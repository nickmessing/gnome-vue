import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkListBoxRow } from "../gtk/list-box-row";
export const adwPreferencesRow = defineElement({
  tagName: "adw-preferences-row",
  constructorClass: Adw.PreferencesRow,
  props: {
    title: {
      key: "title",
      type: Type.String,
      setter: "set_title"
    },
    titleSelectable: {
      key: "title_selectable",
      type: Type.Boolean,
      setter: "set_title_selectable"
    },
    useUnderline: {
      key: "use_underline",
      type: Type.Boolean,
      setter: "set_use_underline"
    }
  },
  parentElementDefinition: gtkListBoxRow
});