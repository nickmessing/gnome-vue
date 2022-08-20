import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
export const gtkWidget = defineElement({
  tagName: "gtk-widget",
  constructorClass: Gtk.Widget,
  props: {
    canFocus: {
      key: "can_focus",
      type: Type.Boolean,
      setter: "set_can_focus"
    },
    canTarget: {
      key: "can_target",
      type: Type.Boolean,
      setter: "set_can_target"
    },
    cssClasses: {
      key: "css_classes",
      type: Type.StringArray,
      setter: "set_css_classes"
    },
    cursor: {
      key: "cursor",
      type: Type.Object,
      setter: "set_cursor"
    },
    focusOnClick: {
      key: "focus_on_click",
      type: Type.Boolean,
      setter: "set_focus_on_click"
    },
    focusable: {
      key: "focusable",
      type: Type.Boolean,
      setter: "set_focusable"
    },
    halign: {
      key: "halign",
      type: Type.Object,
      setter: "set_halign"
    },
    hasTooltip: {
      key: "has_tooltip",
      type: Type.Boolean,
      setter: "set_has_tooltip"
    },
    hexpand: {
      key: "hexpand",
      type: Type.Boolean,
      setter: "set_hexpand"
    },
    hexpandSet: {
      key: "hexpand_set",
      type: Type.Boolean,
      setter: "set_hexpand_set"
    },
    layoutManager: {
      key: "layout_manager",
      type: Type.Object,
      setter: "set_layout_manager"
    },
    marginBottom: {
      key: "margin_bottom",
      type: Type.Number,
      setter: "set_margin_bottom"
    },
    marginEnd: {
      key: "margin_end",
      type: Type.Number,
      setter: "set_margin_end"
    },
    marginStart: {
      key: "margin_start",
      type: Type.Number,
      setter: "set_margin_start"
    },
    marginTop: {
      key: "margin_top",
      type: Type.Number,
      setter: "set_margin_top"
    },
    name: {
      key: "name",
      type: Type.String,
      setter: "set_name"
    },
    opacity: {
      key: "opacity",
      type: Type.Number,
      setter: "set_opacity"
    },
    overflow: {
      key: "overflow",
      type: Type.Object,
      setter: "set_overflow"
    },
    receivesDefault: {
      key: "receives_default",
      type: Type.Boolean,
      setter: "set_receives_default"
    },
    sensitive: {
      key: "sensitive",
      type: Type.Boolean,
      setter: "set_sensitive"
    },
    tooltipMarkup: {
      key: "tooltip_markup",
      type: Type.String,
      setter: "set_tooltip_markup"
    },
    tooltipText: {
      key: "tooltip_text",
      type: Type.String,
      setter: "set_tooltip_text"
    },
    valign: {
      key: "valign",
      type: Type.Object,
      setter: "set_valign"
    },
    vexpand: {
      key: "vexpand",
      type: Type.Boolean,
      setter: "set_vexpand"
    },
    vexpandSet: {
      key: "vexpand_set",
      type: Type.Boolean,
      setter: "set_vexpand_set"
    },
    visible: {
      key: "visible",
      type: Type.Boolean,
      setter: "set_visible"
    }
  }
});