import { Comment } from './custom-widgets/comment'
import { ROptions } from './types'

export const createComment: ROptions['createComment'] = text => new Comment(text)
