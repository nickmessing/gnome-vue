import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const adwCarouselIndicatorDots = defineElement({
  tagName: "adw-carousel-indicator-dots",
  constructorClass: Adw.CarouselIndicatorDots,
  props: {
    carousel: {
      key: "carousel",
      type: Type.Object,
      setter: "set_carousel"
    }
  },
  parentElementDefinition: gtkWidget
});