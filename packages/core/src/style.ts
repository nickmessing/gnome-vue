import Gdk from './generated/Gjs/Gdk-4.0'
import Gtk from './generated/Gjs/Gtk-4.0'

export const addStyle = (css: string) => {
  const te = new TextEncoder()

  const provider = new Gtk.CssProvider()
  provider.load_from_data(te.encode(css))
  Gtk.StyleContext.add_provider_for_display(Gdk.Display.get_default()!, provider, Gtk.STYLE_PROVIDER_PRIORITY_USER)
}
