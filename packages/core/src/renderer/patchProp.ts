import Adw from '@/generated/Gjs/Adw-1'
import Gtk from '@/generated/Gjs/Gtk-4.0'
import { keyedByClass } from './elements'
import { ROptions } from './types'

const createEventHandler = (value: (...args: any[]) => any) => {
  const listeners = new Set<(...args: any[]) => any>()
  const addListener = (listener: (...args: any[]) => any) => {
    listeners.add(listener)
  }
  const removeListener = (listener: (...args: any[]) => any) => {
    listeners.delete(listener)
  }

  const fn = (...args: any[]) => {
    value(...args)
  }
  fn.addListener = addListener
  fn.removeListener = removeListener
  return fn
}
export const patchProp: ROptions['patchProp'] = (el, key, prevValue, nextValue) => {
  const definition = keyedByClass.get(el.constructor as any)
  if (!definition) {
    log(`Cant patch prop "${key}" for element "${el.constructor.name}" yet`)
  } else {
    definition?.patchProperty(el, key, prevValue, nextValue)
  }
}
