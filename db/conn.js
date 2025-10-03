const { Sequelize } = require('sequelize');

// Configuração da conexão com PostgreSQL do Aiven
// Use variáveis de ambiente quando disponíveis, senão use configuração direta
const DB_CONFIG = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

const sequelize = new Sequelize(
  DB_CONFIG.database,
  DB_CONFIG.username,
  DB_CONFIG.password,
  {
    host: DB_CONFIG.host,
    port: DB_CONFIG.port,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    logging: console.log, // Mostra as queries SQL no console
    define: {
      timestamps: true, // Adiciona createdAt e updatedAt automaticamente
      underscored: false, // Usa camelCase ao invés de snake_case
    },
    pool: {
      max: 10, // Máximo de conexões simultâneas
      min: 0,  // Mínimo de conexões
      acquire: 30000, // Tempo máximo para obter conexão (30s)
      idle: 10000, // Tempo máximo que uma conexão pode ficar inativa (10s)
    },
  }
);

// Função para testar a conexão
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com PostgreSQL (Aiven) estabelecida com sucesso!');
    console.log(`📊 Conectado ao banco: ${sequelize.config.database}`);
  } catch (error) {
    console.error('❌ Erro ao conectar com o banco de dados:', error.message);
    console.log('💡 Verifique as credenciais do Aiven no arquivo .env');
  }
}

testConnection();

module.exports = sequelize;
