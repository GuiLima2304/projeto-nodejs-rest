const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {
    
//express
    const app = express();

    //add bibliotecas para o express usar
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    //consign
    consign()
        .include('controllers')
        .into(app)
    
    

    return app
}