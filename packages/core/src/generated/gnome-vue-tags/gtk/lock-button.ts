import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkButton } from "../gtk/button";
export const gtkLockButton = defineElement({
  tagName: "gtk-lock-button",
  constructorClass: Gtk.LockButton,
  props: {
    permission: {
      key: "permission",
      type: Type.Object,
      setter: "set_permission"
    }
  },
  parentElementDefinition: gtkButton
});