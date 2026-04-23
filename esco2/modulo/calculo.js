/**********************************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade.
 * Data:02/04/2026
 * Autor:Sthefany Correia
 * Versão:1.0
 * 
 * Com funções
 * *********************************************************************************/

const { log } = require("console")

const readline = require('readline')
const { json } = require("stream/consumers")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const validarDados = function(vazio) {
    
    if(vazio ==  '') {
        console.log('ERRO!! Preencha todos os dados !!!')
        return 
    }
}

const validarNotas = function(limite) {

    if(limite < 0 || limite > 100){
        console.log('ERRO! Os valores devem estar entre 0 e 100')
        return

    }
}

const calcularMedia = function(nota1,nota2,nota3,nota4) {

    let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4

    let aprovacaoNotas = ''

    if(media > 70){
        aprovacaoNotas = 'APROVADO'
    }
            
    if(media < 50){
        aprovacaoNotas = 'REPROVADO'
    }

    let mediaAprovacao = {
        "media": media,
        "aprovacaoNotas": aprovacaoNotas
    }

    return mediaAprovacao

}

const fazerExame = function(exame) {
    let valorExame = Number()

    if(calcularMedia > 50 && calcularMedia < 69){
        entradaDeDados.question('Digite a nota que você obteve no EXAME: ', (exame) => {
            valorExame = Number(exame)

            if (valorExame > 60 && media > 60){
                    console.log('Aprovado no exame!')
            }else{
                console.log('Reprovado no exame!')
            }
        })
    }
    return fazerExame(exame)
}

 





module.exports = {
    validarDados,
    validarNotas,
    calcularMedia,
    fazerExame
}