import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const adwStatusPage = defineElement({
  tagName: "adw-status-page",
  constructorClass: Adw.StatusPage,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    description: {
      key: "description",
      type: Type.String,
      setter: "set_description"
    },
    iconName: {
      key: "icon_name",
      type: Type.String,
      setter: "set_icon_name"
    },
    paintable: {
      key: "paintable",
      type: Type.Object,
      setter: "set_paintable"
    },
    title: {
      key: "title",
      type: Type.String,
      setter: "set_title"
    }
  },
  parentElementDefinition: gtkWidget
});