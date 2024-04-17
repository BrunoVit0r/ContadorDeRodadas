const express = require('express');
const ContarRodada = require('./controladores/rodadas');

const rotas = express();

rotas.get('/', ContarRodada); 

module.exports = rotas;