/**********************************************************************************
 * Objetivo: Fazer o cálculo do IMC de uma pessoa
 * Data:27/02/2026
 * Autor:Sthefany Correia
 * Versão:1.0
 * *********************************************************************************/ 

const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const calculoImc = require('./modulo/calculos.js')

entradaDeDados.question('Digite o seu peso: ', function (peso) {

    entradaDeDados.question('Digite a sua altura: ', function (altura) {

        let peso1= peso
        let altura1= altura

        let resultadoImc = (peso1,altura1)
        console.log(resultadoImc)

        let validar = calculoImc.condicionandoImc(peso1, altura1)
        console.log(validar)
    })
})

//calculandoImc.condicionandoImc
// O ponto (.) serve para:
// Acessar algo dentro de um objeto
// Usar uma função que foi exportada
// Pegar uma propriedade específica
