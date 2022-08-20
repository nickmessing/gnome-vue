import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkApplicationWindow } from "../gtk/application-window";
export const adwApplicationWindow = defineElement({
  tagName: "adw-application-window",
  constructorClass: Adw.ApplicationWindow,
  props: {
    content: {
      key: "content",
      type: Type.Object,
      setter: "set_content"
    }
  },
  parentElementDefinition: gtkApplicationWindow
});