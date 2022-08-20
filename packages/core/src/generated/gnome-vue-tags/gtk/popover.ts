import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkPopover = defineElement({
  tagName: "gtk-popover",
  constructorClass: Gtk.Popover,
  props: {
    autohide: {
      key: "autohide",
      type: Type.Boolean,
      setter: "set_autohide"
    },
    cascadePopdown: {
      key: "cascade_popdown",
      type: Type.Boolean,
      setter: "set_cascade_popdown"
    },
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    hasArrow: {
      key: "has_arrow",
      type: Type.Boolean,
      setter: "set_has_arrow"
    },
    mnemonicsVisible: {
      key: "mnemonics_visible",
      type: Type.Boolean,
      setter: "set_mnemonics_visible"
    },
    pointingTo: {
      key: "pointing_to",
      type: Type.Object,
      setter: "set_pointing_to"
    },
    position: {
      key: "position",
      type: Type.Object,
      setter: "set_position"
    }
  },
  parentElementDefinition: gtkWidget
});