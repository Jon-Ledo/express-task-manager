const express = require('express')
const app = express()
const port = 3000
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

// middleware
app.use(express.json())
app.use('/api/v1/tasks', tasks)

// routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App')
})

// app.get('/api/v1/tasks)          - get all tasks
// app.post('/api/v1/tasks)         - create a new task
// app.get('/api/v1/tasks/:id)      - get single task
// app.patch('/api/v1/tasks/:id)    - update task
// app.delete('/api/v1/tasks/:id)   - delete task

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`listening on port ${3000}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
