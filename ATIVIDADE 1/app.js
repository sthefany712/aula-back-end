/***********************************************************************************
 * Objetivo: Calcular juros compostos
 * Data: 11/02/2026
 * Versão: 1.0
 * Autor: Sthefany Correia 
 **********************************************************************************
 */

 /* FÓRMULA DE JUROS COMPOSTOS
 A fórmula para calcular o montante final 𝑀 com juros compostos é:
M = C*(1+i)
n
Onde:
C é o capital inicial.
i é a taxa de juros.
n é o tempo para pagamento que sempre deverá ser em meses.
 */

const readline = require('readline');

const entradaDeDados = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

entradaDeDados.question('Digite seu nome: ', function(nome){
    let nomeCliente = nome

    entradaDeDados.question('Digite o nome do produto: ', function(produto){
        let nomeProduto = produto

        entradaDeDados.question('Digite o valor da compra: ',function(compra){
            let valorCompra = compra

            entradaDeDados.question('Digite a taxa de juros: ',function(juros){
                let valorJuros = juros

                entradaDeDados.question('Digite o tempo de pagamento: ',function(tempo){
                    let tempoPagt = tempo

                    entradaDeDados.question('Digite 1 para o tempo em meses ou digite 2 para o tempo em anos?',function(conversao){
                        let tempoConversao = conversao

                        if(tempoConversao == 1){
                            entradaDeDados.question('Digite o tempo em meses: ' ,function(tempoMeses){
                                let valorMeses = tempoMeses
                                //formula do calculo de conversão  
                                //dois asteristicos ** servem para multiplicação
                                valorCompra ** ( 1 + valorJuros)/100
                                console.log(conversao) 
                            })
                        }
                    })
                })
            })
        })
    }) 
})