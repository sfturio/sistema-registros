const express = require('express')
const createContainer = require('./config/container')
const env = require('./config/env')

const app = express()
const container = createContainer()

app.get('/registros', async (_req, res) => {
  const registros = await container.registroService.listar()
  res.json(registros)
})

app.listen(env.app.port, () => {
  console.log(`Node API on port ${env.app.port}`)
})
