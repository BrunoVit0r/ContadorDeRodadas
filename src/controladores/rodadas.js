const express = require('express');
const app = express();

const jogadores = require('../configuracao/bd');

let jogadorDaVez = 0;

const ContarRodada = (req, res) => { 

    const nomeJogador = jogadores[jogadorDaVez];
    jogadorDaVez++; 

if(jogadorDaVez >= jogadores.length){
    jogadorDaVez = 0;
}
res.send(`É a vez de ${nomeJogador} jogar!`)

}

module.exports = ContarRodada;
