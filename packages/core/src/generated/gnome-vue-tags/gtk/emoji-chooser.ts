import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkPopover } from "../gtk/popover";
export const gtkEmojiChooser = defineElement({
  tagName: "gtk-emoji-chooser",
  constructorClass: Gtk.EmojiChooser,
  props: {},
  parentElementDefinition: gtkPopover
});