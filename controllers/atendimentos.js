const Atendimento = require('../models/atendimentos');

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
      Atendimento.lista()
        //por default ja eh status 200
        .then(resultados => { res.json(resultados) })
        .catch(error => { res.status(400).json(error) })
    });

    app.get('/atendimentos/:id', (req, res) => {
      const id = parseInt(req.params.id);

      Atendimento.buscaPorId(id, res);
    });

    app.post('/atendimentos', (req, res) => {
      const atendimento = req.body;

      Atendimento.adiciona(atendimento)
      .then(atendimentoCadastrado => res.status(201).json(atendimentoCadastrado)
      )
      .catch(erros => res.status(400).json(erros));
    });

    app.patch('/atendimentos/:id', (req, res) => {
      const id = parseInt(req.params.id);
      const valores = req.body;

      Atendimento.altera(id, valores, res);
    });

    app.delete('/atendimentos/:id', (req, res) => {
      const id = parseInt(req.params.id);

      Atendimento.deleta(id, res);
    });

}