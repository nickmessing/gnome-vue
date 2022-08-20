import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkScaleButton } from "../gtk/scale-button";
export const gtkVolumeButton = defineElement({
  tagName: "gtk-volume-button",
  constructorClass: Gtk.VolumeButton,
  props: {},
  parentElementDefinition: gtkScaleButton
});