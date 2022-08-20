import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkDialog } from "../gtk/dialog";
export const gtkPrintUnixDialog = defineElement({
  tagName: "gtk-print-unix-dialog",
  constructorClass: Gtk.PrintUnixDialog,
  props: {
    currentPage: {
      key: "current_page",
      type: Type.Number,
      setter: "set_current_page"
    },
    embedPageSetup: {
      key: "embed_page_setup",
      type: Type.Boolean,
      setter: "set_embed_page_setup"
    },
    hasSelection: {
      key: "has_selection",
      type: Type.Boolean,
      setter: "set_has_selection"
    },
    manualCapabilities: {
      key: "manual_capabilities",
      type: Type.Object,
      setter: "set_manual_capabilities"
    },
    pageSetup: {
      key: "page_setup",
      type: Type.Object,
      setter: "set_page_setup"
    },
    supportSelection: {
      key: "support_selection",
      type: Type.Boolean,
      setter: "set_support_selection"
    }
  },
  parentElementDefinition: gtkDialog
});