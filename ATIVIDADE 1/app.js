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

entradaDeDados.question('Digite seu nome: ', function (nome) {
    let nomeCliente = nome

    entradaDeDados.question('Digite o nome do produto: ', function (produto) {
        let nomeProduto = produto

        entradaDeDados.question('Digite o valor da compra: ', function (compra) {
            let valorCompra = Number(compra) //sempre definir a variavel com number para não retornar como string

            entradaDeDados.question('Digite a taxa de juros: ', function (juros) {
                let valorJuros = Number(juros)

                //entradaDeDados.question('Digite o tempo de pagamento: ',function(tempo){
                //let tempoPagt = tempo

                entradaDeDados.question('Digite 1 para o tempo em meses ou digite 2 para o tempo em anos? ', function (conversao) {
                    let tempoConversao = Number(conversao)
                    
                    //validações
                    if(nomeCliente == "" || nomeProduto == "" || valorCompra == "" || valorJuros == "" || tempoConversao == "") {
                        console.log("ERRO: Preencha todos os campos vazios!")

                    }if (isNaN(valorCompra) || isNaN(valorJuros) || isNaN(tempoConversao)) {
                        console.log("ERRO: Não é possível calcular com a entrada de caracters ou letras!")
                        //isNaN = é um número?
                        
                    }if (tempoConversao == 1) {
                        entradaDeDados.question('Digite o tempo em meses: ', function (tempoMeses) {
                           
                            tempoMeses = Number(tempoMeses); // converte para número

                            let valorMeses = tempoMeses
                            //formula do calculo de conversão  
                            //dois asteristicos ** servem para multiplicação
                            let juros = valorJuros / 100 //variavel valorjuros recebe o juros divido por 100
                            let jurosDecimal = (1 + juros)
                            //jurosDecimal recebe o resultado do valorJuros / 100
                            let montante = valorCompra * (1 + juros) ** tempoConversao
                            // um * = a multiplicação dois ** = a multiplicação elevado
                            let acrescimo = montante - valorCompra
                            //valor inicial - o resultado da formula gera o acrescimo
                            
                            console.log(`
                            ******************* {Viva moda} *******************
                            Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.
                            A compra do produto ${nomeProduto}, tem um valor de: ${valorCompra} reais.
                            A sua compra será parcelada em ${tempoMeses} vezes e o Sr(a) pagará: ${valorJuros}%.
                            O acréscimo realizado ao valor de: ${acrescimo.toFixed(2)} será de ${montante.toFixed(2)}.
                            
                            Muito obrigado por escolher a {Viva moda}.
                            *******************************************************
                            `);//mensagem de saida
                        })

                    }else if(tempoConversao == 2) {
                        entradaDeDados.question('Digite o tempo em anos: ', function (tempoAnos) {

                            tempoAnos = Number(tempoAnos); // converte para número

                            let tempoMeses = tempoAnos * 12;
                            let taxa = valorJuros / 100; // transforma % em decimal
                            let montante = valorCompra * (1 + taxa) ** tempoMeses;
                            let acrescimo = montante - valorCompra;

                            console.log(`
                            ******************* {Viva moda} *******************
                            Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.
                            A compra do produto ${nomeProduto}, tem um valor de: ${valorCompra} reais.
                            A sua compra será parcelada em ${tempoAnos} vezes e o Sr(a) pagará: ${valorJuros}%.
                            O acréscimo realizado ao valor de: ${acrescimo.toFixed(2)} será de ${montante.toFixed(2)}.
                            
                            Muito obrigado por escolher a {Viva moda}.
                            *******************************************************
                            `);//mensagem de saida
                        })    
                    }
                })
            })
        })
    })
})