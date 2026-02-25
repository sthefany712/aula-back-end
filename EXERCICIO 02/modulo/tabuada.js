/*******************************************************************************
 * Objetivo: Arquivo responsável por gerar a tabuada de um número
 * Data: 25/02/2026
 * Autor: Marcel
 * Versão:1.0
 *******************************************************************************/
const calculosMatematicos = require('./calcular.js')


//Função para imprimir a tabuada usando While
const gerarTabuada = function(tabuada){
    let tab = Number(tabuada)

    let cont = 0
    let resultado

    //Repetição para gerar a tabuada até 10
    while(cont <= 10){
        //chama a função de multiplicar para realizar a operação
        resultado = calculosMatematicos.multiplicar(tab, cont)
        //console.log(tab + 'x' + cont + '=' + resultado) 
        console.log(`${tab} x ${cont} = ${resultado}`)

        //Exemplos de como incrementar o contador
        //cont = cont + 1
        //cont++
        cont +=1
    }
}

//Função para imprimir a tabuada usando For
const gerarTabuadaFor = function(tabuada){
    let tab = Number(tabuada)
    //let cont = 0 (tiro esse let pois tudo fica dentro do for)
    let resultado

    //Repetição para gerar a tabuada até 10
    for(let cont = 0; cont <= 10; cont++){
         //chama a função de multiplicar para realizar a operação
         resultado = calculosMatematicos.multiplicar(tab, cont)
         //console.log(tab + 'x' + cont + '=' + resultado) 
         console.log(`${tab} x ${cont} = ${resultado}`)
    }  
}

gerarTabuadaFor(9) //está chamando a função e número colocado no () é o valor escolhido