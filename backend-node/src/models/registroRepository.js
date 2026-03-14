class RegistroRepository {
  constructor(dbConfig) {
    this.dbConfig = dbConfig
  }

  async listarTodos() {
    return [{ id: 1, titulo: 'Registro de exemplo', origem: 'node' }]
  }
}

module.exports = RegistroRepository
