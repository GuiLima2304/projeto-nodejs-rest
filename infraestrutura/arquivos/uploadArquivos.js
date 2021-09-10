const fs = require('fs');
const path = require('path');

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {

    const tiposValidos = ['jpg', 'png', 'jpeg'];
    const tipo = path.extname(caminho);
    const tipoValido = tiposValidos.indexOf(tipo.substring(1)) //retirando o ponto

    if(tipoValido) {
        const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`
        //criar uma stream de leitura
        //o metodo on() permite trigar algum evento
        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', () => callbackImagemCriada(false, novoCaminho))
    } else {
        const erro = "Tipo de imagem inválido"
        console.log('Erro! Tipo Invalido')
        this.callbackImagemCriada(erro)

    }
}


//buffer
//funcao de callback é assincrona e não recomendavel para arquivos pesados
//callback function is not recommend to 
// fs.readFile('../assets/salsicha.jpg', (erro, buffer) => {
//     console.log('Imagem foi bufferizada');

//     fs.writeFile('../assets/salsicha2.jpg', buffer, (erro) => {
//         console.log('imagem foi escrita')
//     })
// })