const RegistroService = require('../services/registroService')
const RegistroRepository = require('../models/registroRepository')
const env = require('./env')

function createContainer() {
  const registroRepository = new RegistroRepository(env.db)
  const registroService = new RegistroService(registroRepository)

  return {
    registroService
  }
}

module.exports = createContainer
