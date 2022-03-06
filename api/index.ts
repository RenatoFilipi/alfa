import express, { json } from 'express'
import projects from './routes/projects'

const app = express()
app.use(json())
app.use(projects)

export default app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
