import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const adwCarouselIndicatorLines = defineElement({
  tagName: "adw-carousel-indicator-lines",
  constructorClass: Adw.CarouselIndicatorLines,
  props: {
    carousel: {
      key: "carousel",
      type: Type.Object,
      setter: "set_carousel"
    }
  },
  parentElementDefinition: gtkWidget
});