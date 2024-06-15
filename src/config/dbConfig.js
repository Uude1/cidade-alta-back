const mysql = require('mysql2');

// Configurações para a conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cda_teste'
});

// Conectar ao banco de dados
connection.connect(function(err) {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.stack);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados!');
});

// Fechar a conexão quando terminar de usar
module.exports = connection;

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cda_teste',
  });
  
  // Obtenha uma conexão do pool sempre que precisar
  module.exports = pool.promise();
