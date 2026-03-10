/*******************************************************************************
 * Objetivo: Criar um sistema para gerenciar o cálculo de uma tabuada
 * Data: 10/02/2026
 * Autor: Sthefany
 * Versão:1.0
 *******************************************************************************/

const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite a tabuada inicial: ', function (tabuadaUm) {
    let tabuadaInicial = tabuadaUm

    if(tabuadaInicial < 2 || tabuadaInicial > 100){
       console.log('A entrada da tabuada deverá ser entre 2 e 100') 
       return 
    }
    
    entradaDeDados.question('Digite a tabuada final: ', function (tabuadaDois) {
        let tabuadaFinal = tabuadaDois

        if(tabuadaFinal < 2 || tabuadaFinal > 100){
            console.log('A entrada da tabuada deverá ser entre 2 e 100') 
            return 
        }

        entradaDeDados.question('Digite o contador inicial: ', function (contadorUm) {
            let numeroInicial = contadorUm

            if(numeroInicial < 1 || numeroInicial > 50){
                console.log('O valor até onde será calculada a tabuada deverá ser entre 1 e 50;') 
                return 
            }

            entradaDeDados.question('Digite o contador final: ', function (contadorDois) {
                let numeroFinal = contadorDois

                if(numeroFinal < 1 || numeroFinal > 50){
                    console.log('O valor até onde será calculada a tabuada deverá ser entre 1 e 50;') 
                    return 
                }

                const calculos= require('./modulo/calculos.js')
                calculos.obterTabuadas(tabuadaInicial, tabuadaFinal, numeroInicial,numeroFinal)
            })
        })
    })
})



