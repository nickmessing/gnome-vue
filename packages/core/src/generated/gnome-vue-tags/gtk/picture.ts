import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkPicture = defineElement({
  tagName: "gtk-picture",
  constructorClass: Gtk.Picture,
  props: {
    alternativeText: {
      key: "alternative_text",
      type: Type.String,
      setter: "set_alternative_text"
    },
    canShrink: {
      key: "can_shrink",
      type: Type.Boolean,
      setter: "set_can_shrink"
    },
    file: {
      key: "file",
      type: Type.Object,
      setter: "set_file"
    },
    keepAspectRatio: {
      key: "keep_aspect_ratio",
      type: Type.Boolean,
      setter: "set_keep_aspect_ratio"
    },
    paintable: {
      key: "paintable",
      type: Type.Object,
      setter: "set_paintable"
    }
  },
  parentElementDefinition: gtkWidget
});