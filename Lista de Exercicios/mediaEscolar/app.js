/**********************************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade.
 * Data:04/03/2026
 * Autor:Sthefany Correia
 * Versão:1.0
 * *********************************************************************************/ 

const recebendoDados = require('./modulo/calculos.js')

let nomeAluno = Joao

let respostas = nomeAluno
console.log(respostas)

let validar = recebendoDados.entradaDeDados(nomeAluno)
console.log(validar)