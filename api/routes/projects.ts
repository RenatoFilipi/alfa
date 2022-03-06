import { Router } from 'express'
import list from '../utils/index'

const router = Router()

router.get('/projects', (request, response) => {
  response.json({ data: list })
})

export default router
