class RegistroService {
  constructor(registroRepository) {
    this.registroRepository = registroRepository
  }

  async listar() {
    return this.registroRepository.listarTodos()
  }
}

module.exports = RegistroService
