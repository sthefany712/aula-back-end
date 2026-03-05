/**********************************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade.
 * Data:04/03/2026
 * Autor:Sthefany Correia
 * Versão:1.0
 * *********************************************************************************/ 

const recebendoValor = require('./modulo/calculos.js')

let nota1 = 5
let nota2 = 8
let nota3 = 9
let nota4 = 6

let resultado = (nota1,nota2,nota3,nota4)
console.log(resultado)

let validar = recebendoValor.limitarValores(nota1,nota2,nota3,nota4)
console.log(validar)























// let nomeAluno = 'Sthefany'
// let nomeProf = 'Marcel'
// let sexoProf = 'Masculino'
// let sexoAluno = 'Feminino'
// let nomeCurso = 'Desenvolvimento de Sistemas'
// let nomeDisci = 'Backend'

// let nota1 = 4
// let nota2 = 7
// let nota3 = 8
// let nota4 = 9

// let tipoProf = ''

// let validar = recebendoDados.registrarDados(nomeAluno,
//     nomeProf, 
//     sexoProf, 
//     sexoAluno,
//     nomeCurso, 
//     nomeDisci,
//     nota1,
//     nota2,
//     nota3, 
//     nota4
// )

// // if(sexoProf == 'feminino'){
// //     tipoProf = 'professora'
// // }else{
// //     tipoProf = 'professor'
// // }

// // return tipoProf
    
    
// console.log(validar)