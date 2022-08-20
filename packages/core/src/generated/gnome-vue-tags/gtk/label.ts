import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkLabel = defineElement({
  tagName: "gtk-label",
  constructorClass: Gtk.Label,
  props: {
    attributes: {
      key: "attributes",
      type: Type.Object,
      setter: "set_attributes"
    },
    ellipsize: {
      key: "ellipsize",
      type: Type.Object,
      setter: "set_ellipsize"
    },
    extraMenu: {
      key: "extra_menu",
      type: Type.Object,
      setter: "set_extra_menu"
    },
    justify: {
      key: "justify",
      type: Type.Object,
      setter: "set_justify"
    },
    label: {
      key: "label",
      type: Type.String,
      setter: "set_label"
    },
    lines: {
      key: "lines",
      type: Type.Number,
      setter: "set_lines"
    },
    maxWidthChars: {
      key: "max_width_chars",
      type: Type.Number,
      setter: "set_max_width_chars"
    },
    mnemonicWidget: {
      key: "mnemonic_widget",
      type: Type.Object,
      setter: "set_mnemonic_widget"
    },
    naturalWrapMode: {
      key: "natural_wrap_mode",
      type: Type.Object,
      setter: "set_natural_wrap_mode"
    },
    selectable: {
      key: "selectable",
      type: Type.Boolean,
      setter: "set_selectable"
    },
    singleLineMode: {
      key: "single_line_mode",
      type: Type.Boolean,
      setter: "set_single_line_mode"
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
    },
    widthChars: {
      key: "width_chars",
      type: Type.Number,
      setter: "set_width_chars"
    },
    wrap: {
      key: "wrap",
      type: Type.Boolean,
      setter: "set_wrap"
    },
    wrapMode: {
      key: "wrap_mode",
      type: Type.Object,
      setter: "set_wrap_mode"
    },
    xalign: {
      key: "xalign",
      type: Type.Number,
      setter: "set_xalign"
    },
    yalign: {
      key: "yalign",
      type: Type.Number,
      setter: "set_yalign"
    }
  },
  parentElementDefinition: gtkWidget
});