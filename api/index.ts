import { ServerMiddleware } from '@nuxt/types'

const myServerMiddleware: ServerMiddleware = function (req, res, next) {
  res.end(
    JSON.stringify({
      data: 'OK',
    })
  )
  next()
}

export default myServerMiddleware
