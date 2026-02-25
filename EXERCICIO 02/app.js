/**************************************************************
 * Objetivo: Responsável por entrada e saída de dados
 * Autor: Sthefany Correia
 * Data: 11/02/26
 * Versão: 1.0
 * 
 *************************************************************/

//import da biblioteca para calculos
const calculosMatematicos = require('./modulo/calcular.js')
let valor1 = 10
let valor2= 30

let validar = calculosMatematicos.validarDados(valor1,valor2,'somar')

if(validar){
    let resultado = calculosMatematicos.calcular(valor1,valor2,'somar')
    console.log(resultado)
}else{
    console.log('ERRO ao calcular')
}

