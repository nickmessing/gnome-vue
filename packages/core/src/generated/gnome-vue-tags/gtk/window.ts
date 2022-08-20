import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkWindow = defineElement({
  tagName: "gtk-window",
  constructorClass: Gtk.Window,
  props: {
    application: {
      key: "application",
      type: Type.Object,
      setter: "set_application"
    },
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    decorated: {
      key: "decorated",
      type: Type.Boolean,
      setter: "set_decorated"
    },
    defaultWidget: {
      key: "default_widget",
      type: Type.Object,
      setter: "set_default_widget"
    },
    deletable: {
      key: "deletable",
      type: Type.Boolean,
      setter: "set_deletable"
    },
    destroyWithParent: {
      key: "destroy_with_parent",
      type: Type.Boolean,
      setter: "set_destroy_with_parent"
    },
    focusVisible: {
      key: "focus_visible",
      type: Type.Boolean,
      setter: "set_focus_visible"
    },
    handleMenubarAccel: {
      key: "handle_menubar_accel",
      type: Type.Boolean,
      setter: "set_handle_menubar_accel"
    },
    hideOnClose: {
      key: "hide_on_close",
      type: Type.Boolean,
      setter: "set_hide_on_close"
    },
    iconName: {
      key: "icon_name",
      type: Type.String,
      setter: "set_icon_name"
    },
    mnemonicsVisible: {
      key: "mnemonics_visible",
      type: Type.Boolean,
      setter: "set_mnemonics_visible"
    },
    modal: {
      key: "modal",
      type: Type.Boolean,
      setter: "set_modal"
    },
    resizable: {
      key: "resizable",
      type: Type.Boolean,
      setter: "set_resizable"
    },
    title: {
      key: "title",
      type: Type.String,
      setter: "set_title"
    },
    titlebar: {
      key: "titlebar",
      type: Type.Object,
      setter: "set_titlebar"
    },
    transientFor: {
      key: "transient_for",
      type: Type.Object,
      setter: "set_transient_for"
    }
  },
  parentElementDefinition: gtkWidget
});