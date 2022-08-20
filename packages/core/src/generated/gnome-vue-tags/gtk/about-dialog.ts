import { Gtk } from "../../Gjs/Gtk-4.0";
import { Adw } from "../../Gjs/Adw-1";
import { defineElement, Type } from "../../../renderer/elements/utils";
import { gtkWindow } from "../gtk/window";
export const gtkAboutDialog = defineElement({
  tagName: "gtk-about-dialog",
  constructorClass: Gtk.AboutDialog,
  props: {
    artists: {
      key: "artists",
      type: Type.StringArray,
      setter: "set_artists"
    },
    authors: {
      key: "authors",
      type: Type.StringArray,
      setter: "set_authors"
    },
    comments: {
      key: "comments",
      type: Type.String,
      setter: "set_comments"
    },
    copyright: {
      key: "copyright",
      type: Type.String,
      setter: "set_copyright"
    },
    documenters: {
      key: "documenters",
      type: Type.StringArray,
      setter: "set_documenters"
    },
    license: {
      key: "license",
      type: Type.String,
      setter: "set_license"
    },
    licenseType: {
      key: "license_type",
      type: Type.Object,
      setter: "set_license_type"
    },
    logo: {
      key: "logo",
      type: Type.Object,
      setter: "set_logo"
    },
    logoIconName: {
      key: "logo_icon_name",
      type: Type.String,
      setter: "set_logo_icon_name"
    },
    programName: {
      key: "program_name",
      type: Type.String,
      setter: "set_program_name"
    },
    systemInformation: {
      key: "system_information",
      type: Type.String,
      setter: "set_system_information"
    },
    translatorCredits: {
      key: "translator_credits",
      type: Type.String,
      setter: "set_translator_credits"
    },
    version: {
      key: "version",
      type: Type.String,
      setter: "set_version"
    },
    website: {
      key: "website",
      type: Type.String,
      setter: "set_website"
    },
    websiteLabel: {
      key: "website_label",
      type: Type.String,
      setter: "set_website_label"
    },
    wrapLicense: {
      key: "wrap_license",
      type: Type.Boolean,
      setter: "set_wrap_license"
    }
  },
  parentElementDefinition: gtkWindow
});