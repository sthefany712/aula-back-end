/**********************************************************************************
 * Objetivo: Fazer o cálculo do IMC de uma pessoa
 * Data:27/02/2026
 * Autor:Sthefany Correia
 * Versão:1.0
 * *********************************************************************************/ 

const calculoImc = require('./modulo/calculos.js')
//Dados
let peso1= 70
let altura1= 1.60

let resultadoImc = (peso1,altura1)
console.log(resultadoImc)

let validar = calculoImc.condicionandoImc(peso1, altura1)
console.log(validar)


//calculandoImc.condicionandoImc
// O ponto (.) serve para:
// Acessar algo dentro de um objeto
// Usar uma função que foi exportada
// Pegar uma propriedade específica
