/**********************************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade.
 * Data:02/04/2026
 * Autor:Sthefany Correia
 * Versão:1.0
 * 
 * Com funções
 * *********************************************************************************/ 

const calculo = require('./modulo/calculo.js')

const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Nome do aluno: ', (aluno) => {
    calculo.validarDados(aluno)
    
    entradaDeDados.question('Nome do professor: ', (prof) => {
         calculo.validarDados(prof)
        
        entradaDeDados.question('Sexo do professor: ', (sexoPro) => {
            calculo.validarDados(sexoPro)
            
             entradaDeDados.question('Sexo do aluno: ', (sexoAluno) => {
                calculo.validarDados(sexoAluno)
                
                entradaDeDados.question('Nome do curso: ', (curso) => {
                    calculo.validarDados(curso)
                    
                     entradaDeDados.question('Nome da disciplina: ', (disci) => {
                        calculo.validarDados(disci)
                
                      //Entrada das 4 notas:
                      entradaDeDados.question('Digite a PRIMEIRA nota: ', (notaUm) => {

                         calculo.validarDados(notaUm)
                         calculo.validarNotas(notaUm)
                         
                         
                         entradaDeDados.question('Digite a SEGUNDA nota: ', (notaDois) => {

                            calculo.validarDados(notaDois)
                            calculo.validarNotas(notaDois)
                            
                            entradaDeDados.question('Digite a TERCEIRA nota: ', (notaTres) => {

                                 calculo.validarDados(notaTres)
                                 calculo.validarNotas(notaTres)
                                 
                                 entradaDeDados.question('Digite a QUARTA nota: ', (notaQua) => {

                                    calculo.validarDados(notaQua)
                                    calculo.validarNotas(notaQua)

                                    let resultado = calculo.calcularMedia(notaUm,notaDois,notaTres,notaQua)
                                     console.log(resultado.media)
                                     console.log(resultado.aprovacaoNotas)
                                  
                                    
                                    
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})