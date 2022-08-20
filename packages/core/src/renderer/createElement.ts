import { keyedByTagName } from './elements'
import { ROptions } from './types'

export const createElement: ROptions['createElement'] = (type, isSVG, isCustomizedBuiltIn, vnodeProps) => {
  const definition = keyedByTagName[type]
  if (!definition) {
    throw `Cant create element "${type}"`
  }

  return definition.createElement(vnodeProps)
}
