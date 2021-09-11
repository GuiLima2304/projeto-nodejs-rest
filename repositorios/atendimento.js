const query = require('../infraestrutura/database/queries');

class Atendimento {
    adiciona(atendimento) {
        
        // ? significa que o que colocarmos aqui vai ser inserido nesta tabela
        const sql = 'INSERT INTO Atendimentos SET ?'
        return query(sql, atendimento)
    }
}

module.exports = new Atendimento();