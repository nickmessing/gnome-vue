import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWindow } from "../gtk/window";
export const gtkAssistant = defineElement({
  tagName: "gtk-assistant",
  constructorClass: Gtk.Assistant,
  props: {},
  parentElementDefinition: gtkWindow
});