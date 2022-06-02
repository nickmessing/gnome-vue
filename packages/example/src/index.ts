import { Gtk, createApp } from '@gnome-vue/core'

import App from './App.vue'

Gtk.init()

const app = new Gtk.Application()

app.connect('activate', () => {
  createApp(App).mount(app)
})

app.run(null)
