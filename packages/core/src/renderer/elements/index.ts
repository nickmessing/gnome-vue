import * as elements from '../../generated/gnome-vue-tags'
import { ElementDefinition } from './utils'

export const keyedByTagName = Object.values(elements).reduce<Record<string, ElementDefinition>>((acc, element) => {
  acc[element.tagName] = element
  return acc
}, {})
export const keyedByClass = new Map(Object.values(elements).map(element => [element.constructorClass, element]))
