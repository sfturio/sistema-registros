const dotenv = require('dotenv')
dotenv.config()

function getEnv(name, fallback = '') {
  return process.env[name] || fallback
}

module.exports = {
  app: {
    port: Number(getEnv('PORT', 3000))
  },
  db: {
    host: getEnv('DB_HOST', 'localhost'),
    port: Number(getEnv('DB_PORT', 5432)),
    name: getEnv('DB_NAME', 'registros_db'),
    user: getEnv('DB_USER', 'postgres'),
    password: getEnv('DB_PASSWORD', 'postgres')
  }
}
