import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWidget } from "../gtk/widget";
export const gtkCalendar = defineElement({
  tagName: "gtk-calendar",
  constructorClass: Gtk.Calendar,
  props: {
    showDayNames: {
      key: "show_day_names",
      type: Type.Boolean,
      setter: "set_show_day_names"
    },
    showHeading: {
      key: "show_heading",
      type: Type.Boolean,
      setter: "set_show_heading"
    },
    showWeekNumbers: {
      key: "show_week_numbers",
      type: Type.Boolean,
      setter: "set_show_week_numbers"
    }
  },
  parentElementDefinition: gtkWidget
});