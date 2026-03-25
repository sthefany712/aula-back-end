/**********************************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade.
 * Data:04/03/2026
 * Autor:Sthefany Correia
 * Versão:1.0
 * *********************************************************************************/ 

const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// const recebendoValor = require('./modulo/calculos.js')
// const { log } = require('console')

entradaDeDados.question('Nome do aluno: ', (aluno) => {
    nomeAluno = aluno

    if(nomeAluno == ''){
        console.log('ERRO!! Preencha todos os dados !!!')
        return
    }

    entradaDeDados.question('Nome do professor: ', (prof) => {
        nomeProf = prof

        if (nomeProf == ''){
            console.log('ERRO!! Preencha todos os dados !!!')
            return
        }

        entradaDeDados.question('Sexo do professor: ', (sexoPro) => {
            sexoDoprof = sexoPro

            if (sexoDoprof == ''){
                console.log('ERRO!! Preencha todos os dados !!!')
                return
            }

            //Validando o sexo do prof
            if(sexoPro == 'feminino'){
                console.log('Professora')
            }else{
                console.log('Professor');
            }

            entradaDeDados.question('Sexo do aluno: ', (sexoAluno) => {
                sexoDoaluno = sexoAluno

                if (sexoAluno == ''){
                    console.log('ERRO!! Preencha todos os dados !!!')
                    return
                }

                if(sexoAluno == 'feminino'){
                    console.log('aluna');
                }else{
                    console.log('aluno');
                    
                }
                
                entradaDeDados.question('Nome do curso: ', (curso) => {
                    nomeCurso = curso

                    if(nomeCurso == ''){
                        console.log('ERRO!! Preencha todos os dados !!!')
                        return
                    }

                    entradaDeDados.question('Nome da disciplina: ', (disci) => {
                        nomeDisci = disci 

                        if(nomeDisci == ''){
                            console.log('ERRO!! Preencha todos os dados !!!')
                            return
                        }
                        
                        //Entrada das notas, mais validações delas.
                        entradaDeDados.question('Digite a PRIMEIRA nota: ', (notaUm) => {
                            nota1 = Number(notaUm) 
                            
                            if(nota1 == 0){
                                console.log('ERRO!! Preencha todos os dados !!!')
                                return
                            }

                            if(nota1 < 0 || nota1 > 100 ){
                                console.log('ERRO! Os valores devem estar entre 0 e 100')
                                return
                            }

                            entradaDeDados.question('Digite a SEGUNDA nota: ', (notaDois) => {
                                nota2 = Number(notaDois)

                                if (nota2 == 0){ //coloquei 0 aos invés de '' pois eu transformei a string em number
                                    console.log('ERRO! Os valores devem estar entre 0 e 100')
                                    return
                                }

                                if(nota2 < 0 || nota2 > 100){
                                    console.log('ERRO! Os valores devem estar entre 0 e 100')
                                    return
                                }

                                entradaDeDados.question('Digite a TERCEIRA nota: ', (notaTres) => {
                                    nota3 = Number(notaTres)

                                    if(nota3 == 0){
                                        console.log('ERRO! Os valores devem estar entre 0 e 100')
                                        return
                                    }

                                    if(nota3 < 0 || nota3 > 100){
                                        console.log('ERRO! Os valores devem estar entre 0 e 100')
                                        return
                                    }

                                    entradaDeDados.question('Digite a QUARTA nota: ', (notaQua) => {
                                        nota4 = Number(notaQua)

                                        if(nota4 == 0){
                                             console.log('ERRO! Os valores devem estar entre 0 e 100')
                                             return
                                        }
                                           
                                        if(nota4 < 0 || nota4 > 100){
                                            console.log('ERRO! Os valores devem estar entre 0 e 100')    
                                        }

                                        
                                        //Calculando a média 
                                        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4

                                        console.log('A média é: ', media);

                                        //Validando média e exame, para aprovação ou reprovação do aluno
                                        if(media > 70){
                                            console.log('APROVADO')
                                           return
                                        }
                                        if(media < 50){
                                            console.log('REPROVADO')
                                            return
                                        }
                                        if(media > 50 || media < 69 ){
                                            entradaDeDados.question('Digite a nota que você obteve no EXAME: ', (exame) => {
                                                let valorExame = Number(exame)

                                                if (valorExame > 60 && media > 60){
                                                     console.log('Aprovado no exame!')
                                                }else{
                                                    console.log('Reprovado no exame!')
                                                }
                                            })        
                                        } 
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
      