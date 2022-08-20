import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkTextView = defineElement({
  tagName: "gtk-text-view",
  constructorClass: Gtk.TextView,
  props: {
    acceptsTab: {
      key: "accepts_tab",
      type: Type.Boolean,
      setter: "set_accepts_tab"
    },
    bottomMargin: {
      key: "bottom_margin",
      type: Type.Number,
      setter: "set_bottom_margin"
    },
    buffer: {
      key: "buffer",
      type: Type.Object,
      setter: "set_buffer"
    },
    cursorVisible: {
      key: "cursor_visible",
      type: Type.Boolean,
      setter: "set_cursor_visible"
    },
    editable: {
      key: "editable",
      type: Type.Boolean,
      setter: "set_editable"
    },
    extraMenu: {
      key: "extra_menu",
      type: Type.Object,
      setter: "set_extra_menu"
    },
    indent: {
      key: "indent",
      type: Type.Number,
      setter: "set_indent"
    },
    inputHints: {
      key: "input_hints",
      type: Type.Object,
      setter: "set_input_hints"
    },
    inputPurpose: {
      key: "input_purpose",
      type: Type.Object,
      setter: "set_input_purpose"
    },
    justification: {
      key: "justification",
      type: Type.Object,
      setter: "set_justification"
    },
    leftMargin: {
      key: "left_margin",
      type: Type.Number,
      setter: "set_left_margin"
    },
    monospace: {
      key: "monospace",
      type: Type.Boolean,
      setter: "set_monospace"
    },
    overwrite: {
      key: "overwrite",
      type: Type.Boolean,
      setter: "set_overwrite"
    },
    pixelsAboveLines: {
      key: "pixels_above_lines",
      type: Type.Number,
      setter: "set_pixels_above_lines"
    },
    pixelsBelowLines: {
      key: "pixels_below_lines",
      type: Type.Number,
      setter: "set_pixels_below_lines"
    },
    pixelsInsideWrap: {
      key: "pixels_inside_wrap",
      type: Type.Number,
      setter: "set_pixels_inside_wrap"
    },
    rightMargin: {
      key: "right_margin",
      type: Type.Number,
      setter: "set_right_margin"
    },
    tabs: {
      key: "tabs",
      type: Type.Object,
      setter: "set_tabs"
    },
    topMargin: {
      key: "top_margin",
      type: Type.Number,
      setter: "set_top_margin"
    },
    wrapMode: {
      key: "wrap_mode",
      type: Type.Object,
      setter: "set_wrap_mode"
    }
  },
  parentElementDefinition: gtkWidget
});