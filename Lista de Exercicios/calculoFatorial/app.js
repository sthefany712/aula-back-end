/**********************************************************************************
 * Objetivo: - Calcular o fatorial de um número fornecido pelo usuário.
 * Data:25/03/2026
 * Autor:Sthefany Correia
 * Versão:1.0
 * *********************************************************************************/ 


const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite um número para calcular o fatorial: ', (numero) => {
    numeroEscolhido = Number(numero)
    if(numeroEscolhido <=1 || numeroEscolhido === '' || isNaN(numeroEscolhido)){
        console.log('Não é possível calcular o fatorial, precisa ser um número MAIOR do que 1.')
        return 
        //nesse caso o uso do return é para não executar o restante do código, ou seja, o cálculo do fatorial, caso o número seja menor ou igual a 1, já que esse if está validando o numeroEscolhido, que seria a próxima execução, porém, eu quero que meu sistema pare assim que o if for verdadeiro, para que o usuário corrija seu erro e prossiga com o uso do programa da forma correta.
    }
    let resultado = Number(1)
    let cont = numeroEscolhido
    while(cont >= 1){
        resultado = resultado * cont
        cont--
    }
    console.log(`O fatorial de ${numeroEscolhido} é: ${resultado}`)
})