import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkBox } from "../gtk/box";
export const gtkShortcutsGroup = defineElement({
  tagName: "gtk-shortcuts-group",
  constructorClass: Gtk.ShortcutsGroup,
  props: {},
  parentElementDefinition: gtkBox
});