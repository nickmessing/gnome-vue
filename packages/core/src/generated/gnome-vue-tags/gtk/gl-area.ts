import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkGlArea = defineElement({
  tagName: "gtk-gl-area",
  constructorClass: Gtk.GLArea,
  props: {
    autoRender: {
      key: "auto_render",
      type: Type.Boolean,
      setter: "set_auto_render"
    },
    hasDepthBuffer: {
      key: "has_depth_buffer",
      type: Type.Boolean,
      setter: "set_has_depth_buffer"
    },
    hasStencilBuffer: {
      key: "has_stencil_buffer",
      type: Type.Boolean,
      setter: "set_has_stencil_buffer"
    },
    useEs: {
      key: "use_es",
      type: Type.Boolean,
      setter: "set_use_es"
    }
  },
  parentElementDefinition: gtkWidget
});