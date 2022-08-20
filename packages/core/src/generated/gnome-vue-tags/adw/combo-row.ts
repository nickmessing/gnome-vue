import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { adwActionRow } from "../adw/action-row";
export const adwComboRow = defineElement({
  tagName: "adw-combo-row",
  constructorClass: Adw.ComboRow,
  props: {
    expression: {
      key: "expression",
      type: Type.Object,
      setter: "set_expression"
    },
    factory: {
      key: "factory",
      type: Type.Object,
      setter: "set_factory"
    },
    listFactory: {
      key: "list_factory",
      type: Type.Object,
      setter: "set_list_factory"
    },
    model: {
      key: "model",
      type: Type.Object,
      setter: "set_model"
    },
    selected: {
      key: "selected",
      type: Type.Number,
      setter: "set_selected"
    },
    useSubtitle: {
      key: "use_subtitle",
      type: Type.Boolean,
      setter: "set_use_subtitle"
    }
  },
  parentElementDefinition: adwActionRow
});