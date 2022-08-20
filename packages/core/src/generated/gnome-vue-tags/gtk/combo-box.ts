import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkComboBox = defineElement({
  tagName: "gtk-combo-box",
  constructorClass: Gtk.ComboBox,
  props: {
    active: {
      key: "active",
      type: Type.Number,
      setter: "set_active"
    },
    activeId: {
      key: "active_id",
      type: Type.String,
      setter: "set_active_id"
    },
    buttonSensitivity: {
      key: "button_sensitivity",
      type: Type.Object,
      setter: "set_button_sensitivity"
    },
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    entryTextColumn: {
      key: "entry_text_column",
      type: Type.Number,
      setter: "set_entry_text_column"
    },
    idColumn: {
      key: "id_column",
      type: Type.Number,
      setter: "set_id_column"
    },
    model: {
      key: "model",
      type: Type.Object,
      setter: "set_model"
    },
    popupFixedWidth: {
      key: "popup_fixed_width",
      type: Type.Boolean,
      setter: "set_popup_fixed_width"
    }
  },
  parentElementDefinition: gtkWidget
});