/******************************
 * Objetivo: Criar um sistema que permite o calculo de
 * utilizando boas práticas com funções
 * Autor: Sthefany Correia
 * Data: 11/02/26
 * Versão: 1.0
 * 
 * 
 * 
 */

const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada do nome do cliente
entradaDeDados.question('Digite o nome do Cliente:', function (nome) { // abre nome
    let nomeCliente = nome

    //Entrada do nome do produto
    entradaDeDados.question('Digite o nome do Produto:', function (produto) {//abre produto
        let nomeProduto = produto

        //Entrada do valor da compra
        entradaDeDados.question('Digite o valor da Compra:', function (capital) { //abre capital

            let capitalProduto = capital

            //Entrada do valor da taxa
            entradaDeDados.question('Digite a taxa de juros a ser aplicada a compra: ', function (taxa) {//abre taxa
                let taxaCompra = taxa

                //Entrada do tempo de pagamento
                entradaDeDados.question('Digite o tempo para realizar o pagamento: ', function (tempo) { //abre tempo
                    
                    let tempoPagamento = tempo

                    //Import da biblioteca que realiza calculos financeiros
                    let calculos = require('./modulo/calculos.js')

                    //divide o valor de juros por 100 para torna-lo decimal 
                   // let percentual = Number(taxaCompra) / 100
                   // let montante = Number(capitalProduto) * ((1 + Number(percentual)) ** Number(tempoPagamento))
                   let montate = calculos.calcularJurosCompostos(capitalProduto, taxaCompra, tempoPagamento)
              
                    if(montate){
                        console.log('O montante final é:'+ montate.toFixed(2)) 
                    }else{
                        console.log('ERRO: Devido a problemas no calculo de juros, ')
                        entradaDeDados.close()
                    }
                    
                })//fecha tempo

            })//fecha taxa

        })//fecha capital

    })//Fecha produto

}) //Fecha nome



