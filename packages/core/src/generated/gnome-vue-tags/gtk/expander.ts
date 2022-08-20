import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkExpander = defineElement({
  tagName: "gtk-expander",
  constructorClass: Gtk.Expander,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    expanded: {
      key: "expanded",
      type: Type.Boolean,
      setter: "set_expanded"
    },
    label: {
      key: "label",
      type: Type.String,
      setter: "set_label"
    },
    labelWidget: {
      key: "label_widget",
      type: Type.Object,
      setter: "set_label_widget"
    },
    resizeToplevel: {
      key: "resize_toplevel",
      type: Type.Boolean,
      setter: "set_resize_toplevel"
    },
    useMarkup: {
      key: "use_markup",
      type: Type.Boolean,
      setter: "set_use_markup"
    },
    useUnderline: {
      key: "use_underline",
      type: Type.Boolean,
      setter: "set_use_underline"
    }
  },
  parentElementDefinition: gtkWidget
});