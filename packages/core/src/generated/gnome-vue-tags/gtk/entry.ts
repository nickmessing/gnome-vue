import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkEntry = defineElement({
  tagName: "gtk-entry",
  constructorClass: Gtk.Entry,
  props: {
    activatesDefault: {
      key: "activates_default",
      type: Type.Boolean,
      setter: "set_activates_default"
    },
    attributes: {
      key: "attributes",
      type: Type.Object,
      setter: "set_attributes"
    },
    buffer: {
      key: "buffer",
      type: Type.Object,
      setter: "set_buffer"
    },
    completion: {
      key: "completion",
      type: Type.Object,
      setter: "set_completion"
    },
    extraMenu: {
      key: "extra_menu",
      type: Type.Object,
      setter: "set_extra_menu"
    },
    hasFrame: {
      key: "has_frame",
      type: Type.Boolean,
      setter: "set_has_frame"
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
    invisibleChar: {
      key: "invisible_char",
      type: Type.Number,
      setter: "set_invisible_char"
    },
    maxLength: {
      key: "max_length",
      type: Type.Number,
      setter: "set_max_length"
    },
    overwriteMode: {
      key: "overwrite_mode",
      type: Type.Boolean,
      setter: "set_overwrite_mode"
    },
    placeholderText: {
      key: "placeholder_text",
      type: Type.String,
      setter: "set_placeholder_text"
    },
    progressFraction: {
      key: "progress_fraction",
      type: Type.Number,
      setter: "set_progress_fraction"
    },
    progressPulseStep: {
      key: "progress_pulse_step",
      type: Type.Number,
      setter: "set_progress_pulse_step"
    },
    tabs: {
      key: "tabs",
      type: Type.Object,
      setter: "set_tabs"
    },
    visibility: {
      key: "visibility",
      type: Type.Boolean,
      setter: "set_visibility"
    }
  },
  parentElementDefinition: gtkWidget
});