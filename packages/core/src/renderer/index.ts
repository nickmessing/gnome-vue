import { createRenderer } from '@vue/runtime-core'
import { createComment } from './createComment'
import { createElement } from './createElement'
import { createText } from './createText'
import { insert } from './insert'
import { nextSibling } from './nextSibling'
import { parentNode } from './parentNode'
import { patchProp } from './patchProp'
import { remove } from './remove'
import { setElementText } from './setElementText'
import { setText } from './setText'
import { Node } from './types'

const { render, createApp } = createRenderer<Node>({
  patchProp,
  insert,
  remove,
  createText,
  createComment,
  createElement,
  setText,
  setElementText,
  parentNode,
  nextSibling,
})

export { render, createApp }
