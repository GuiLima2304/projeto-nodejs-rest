const conexao = require('../infraestrutura/database/conexao');
const uploadArquivo = require('../infraestrutura/arquivos/uploadArquivos');

class Pet {
    adiciona(pet, res) {
        const sql = 'INSERT INTO Pets SET ?'

        uploadArquivo(pet.imagem, pet.nome, (erro, novoCaminho) => {

            if(erro) {
                res.status(400).json({ erro })
            } else {
                const novoPet = { nome: pet.nome, imagem: novoCaminho }
    
                conexao.query(sql, novoPet, erro => {
                    if(erro) {
                        res.status(400).json(erro)
                    } else {
                        res.status(200).json(novoPet);
                    }
                });
            }
        });
        
    }
}

module.exports = new Pet();