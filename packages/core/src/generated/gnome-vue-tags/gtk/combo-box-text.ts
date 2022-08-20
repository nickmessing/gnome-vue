import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkComboBox } from "../gtk/combo-box";
export const gtkComboBoxText = defineElement({
  tagName: "gtk-combo-box-text",
  constructorClass: Gtk.ComboBoxText,
  props: {},
  parentElementDefinition: gtkComboBox
});