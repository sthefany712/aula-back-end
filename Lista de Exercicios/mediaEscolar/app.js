/**********************************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade.
 * Data:04/03/2026
 * Autor:Sthefany Correia
 * Versão:1.0
 * *********************************************************************************/ 

const { log } = require('console')
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
            let sProf = ''
            
            if(sexoPro == 'feminino'){
                sProf = 'Professora'
            }else{
                sProf = 'Professor'
            }
            
            entradaDeDados.question('Sexo do aluno: ', (sexoAluno) => {
                sexoDoaluno = sexoAluno

                if (sexoAluno == ''){
                    console.log('ERRO!! Preencha todos os dados !!!')
                    return
                }

                let sAluno = ''
                let letraAluno = ''
                let d = ''
                if(sexoAluno == 'feminino'){
                    sAluno = '  A aluna'
                    letraAluno = 'A'
                    d = 'da'
                }else{
                    sAluno = 'O aluno'
                    letraAluno = 'O'
                    d = 'do'
                }
                
                entradaDeDados.question('Nome do curso: ', (curso) => {
                    let nomeCurso = curso

                    if(nomeCurso == ''){
                        console.log('ERRO!! Preencha todos os dados !!!')
                        return
                    }

                    entradaDeDados.question('Nome da disciplina: ', (disci) => {
                       let  nomeDisci = disci 

                        if(nomeDisci == ''){
                            console.log('ERRO!! Preencha todos os dados !!!')
                            return
                        }
                        
                        //Entrada das notas, mais validações delas.
                        entradaDeDados.question('Digite a PRIMEIRA nota: ', (notaUm) => {
                            let nota1 = (notaUm) 
                            
                            if(nota1 == ''){
                                console.log('ERRO!! Preencha todos os dados !!!')
                                return
                            }

                            if(nota1 < 0 || nota1 > 100 ){
                                console.log('ERRO! Os valores devem estar entre 0 e 100')
                                return
                            }

                            entradaDeDados.question('Digite a SEGUNDA nota: ', (notaDois) => {
                                let nota2 = (notaDois)

                                if (nota2 == ''){ 
                                    console.log('ERRO! Os valores devem estar entre 0 e 100')
                                    return
                                }

                                if(nota2 < 0 || nota2 > 100){
                                    console.log('ERRO! Os valores devem estar entre 0 e 100')
                                    return
                                }

                                entradaDeDados.question('Digite a TERCEIRA nota: ', (notaTres) => {
                                    let nota3 = (notaTres)

                                    if(nota3 == ''){
                                        console.log('ERRO! Os valores devem estar entre 0 e 100')
                                        return
                                    }

                                    if(nota3 < 0 || nota3 > 100){
                                        console.log('ERRO! Os valores devem estar entre 0 e 100')
                                        return
                                    }

                                    entradaDeDados.question('Digite a QUARTA nota: ', (notaQua) => {
                                        let nota4 =(notaQua)

                                        if(nota4 == ''){
                                             console.log('ERRO! Os valores devem estar entre 0 e 100')
                                             return
                                        }
                                           
                                        if(nota4 < 0 || nota4 > 100){
                                            console.log('ERRO! Os valores devem estar entre 0 e 100')    
                                        }
                                        console.log('')

                                        //Calculando a média 
                                        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4
                                        
                                        //Validando média e exame, para aprovação ou reprovação do aluno
                                        
                                        let aprovaçãoNotas = ''

                                        if(media > 70){
                                            aprovaçãoNotas = 'APROVADO'
                                        }
                
                                        if(media < 50){
                                            aprovaçãoNotas = 'REPROVADO'    
                                        }

                                        let valorExame = Number()

                                        if(media > 50 && media < 69 ){
                                            entradaDeDados.question('Digite a nota que você obteve no EXAME: ', (exame) => {
                                                valorExame = Number(exame)

                                                if (valorExame > 60 && media > 60){
                                                     console.log('Aprovado no exame!')
                                                }else{
                                                    console.log('Reprovado no exame!')
                                                } 
                                            })        
                                        } 
     
                                        console.log('Relatório do aluno: ')
                                        console.log('');
                                        console.log(`${d} ${nomeAluno} foi ${aprovaçãoNotas} na disciplina ${nomeDisci}.`);
                                        console.log(`Curso: ${nomeCurso}`);
                                        console.log(`${sProf}: ${nomeProf}`);
                                        console.log(`Notas ${letraAluno} ${sAluno}: ${nota1}, ${nota2}, ${nota3}, ${nota4}, ${valorExame}`);
                                        console.log(`Média Final: ${media}`);
                                        console.log(` Média Final do Exame: ${valorExame}`);
                                    
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
   