/**********************************************************************************
 * Objetivo: Fazer o cálculo do IMC de uma pessoa
 * Data:27/02/2026
 * Autor:Sthefany Correia
 * Versão:1.0
 * *********************************************************************************/ 

const calculandoImc = require('./modulo/calculos.js')
let peso1= 54
let altura1= 1.60

let imc = calculandoImc.gerarImc(peso1,altura1)
console.log(imc)