import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkButton } from "../gtk/button";
export const gtkLinkButton = defineElement({
  tagName: "gtk-link-button",
  constructorClass: Gtk.LinkButton,
  props: {
    uri: {
      key: "uri",
      type: Type.String,
      setter: "set_uri"
    },
    visited: {
      key: "visited",
      type: Type.Boolean,
      setter: "set_visited"
    }
  },
  parentElementDefinition: gtkButton
});