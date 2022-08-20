export * from '@vue/runtime-core'

import Gtk from '@/generated/Gjs/Gtk-4.0'
import Gio from './generated/Gjs/Gio-2.0'

import { createApp, render } from './renderer'
import { addStyle } from './style'

export { addStyle, Gio, Gtk, render, createApp }
