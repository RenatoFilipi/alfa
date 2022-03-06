import { Router } from 'express'
const router = Router()

router.get('/projects', (req, res) => {
  const list = { msg: 'OK' }
  res.json(list)
})

export default router
