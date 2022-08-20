import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWindow } from "../gtk/window";
export const adwWindow = defineElement({
  tagName: "adw-window",
  constructorClass: Adw.Window,
  props: {
    content: {
      key: "content",
      type: Type.Object,
      setter: "set_content"
    }
  },
  parentElementDefinition: gtkWindow
});