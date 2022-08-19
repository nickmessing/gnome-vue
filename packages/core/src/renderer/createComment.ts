import { Comment } from './customWidgets'
import { ROptions } from './types'

export const createComment: ROptions['createComment'] = text => new Comment(text)
