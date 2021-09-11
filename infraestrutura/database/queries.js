const conexao = require('./conexao');

//valor default do parametro eh vazio
const executaQuery = (query, parametros = '') => {

    //promise recebe como parametro uma funcao de callback 
    return new Promise((resolve, reject) => {
        conexao.query(query, parametros, (erros, resultados, campos) => {
            if(erros) {
                reject(erros);
            } else {
                resolve(resultados);
            }
        });
    });
}

module.exports = executaQuery;