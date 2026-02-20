/***********************************************************************************
 * Objetivo: Realizar Cálculos Matemáticos (Soma, subtração, divisão e multiplicação)
 * Data: 13/02/2026
 * Versão: 1.0
 * Autor: Sthefany Correia 
 **********************************************************************************
 */

//Estamos usando "por enquanto p/ que eu possa ver oq está acontecendo no meu código"
//chamando biblioteca
const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//SOMENTE ENTRADA DE DADOS
//Primeiro valor
entradaDeDados.question('Digite o PRIMEIRO número: ', function (valorUM) {
    let numeroPrimeiro = valorUM
 
    //Segundo valor
    entradaDeDados.question('Digite o SEGUNDO número: ', function (valorDois) {
        let numeroSegundo = valorDois
        
        //Operação matemática
        entradaDeDados.question('Informe qual operação deseja realizar: ', function (operacao) {
            let operacaoEscolhida = operacao
          
            //let é uma variável

            //pasta
            let calculos = require('./modulo/calculo')
            let resultado = calculos.calculo(numeroPrimeiro, numeroSegundo, operacaoEscolhida)
            //p/ mim entrar nessa pasta eu preciso desses 3 parametros que já estão prontos
            console.log('Resultado final: '+ resultado)
        })
    })
})



