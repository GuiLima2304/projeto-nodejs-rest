const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'agenda-petshop'
});

//exportar p/ poder usar em outros lugares
module.exports = conexao;