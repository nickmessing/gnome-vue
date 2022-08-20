import Adw from '@/generated/Gjs/Adw-1'
import { ROptions } from '@/renderer/types'

export const createAdwWindowElement = (vnodeProps?: Parameters<ROptions['createElement']>[3]) => {
  const constructorProperties: Adw.Window.ConstructorProperties = { visible: true }

  if (vnodeProps != null) {
    const { title } = vnodeProps

    if (typeof title === 'string') {
      constructorProperties.title = title
    }
  }

  const window = new Adw.Window(constructorProperties)

  window.show()

  return window
}
