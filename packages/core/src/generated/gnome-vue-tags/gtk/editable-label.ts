import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkEditableLabel = defineElement({
  tagName: "gtk-editable-label",
  constructorClass: Gtk.EditableLabel,
  props: {},
  parentElementDefinition: gtkWidget
});