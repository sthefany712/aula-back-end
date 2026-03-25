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

entradaDeDados.question('Número inicial: ', (numeroInicial) => {
    inicio = Number(numeroInicial)

    if(inicio < 0 || inicio > 500 || inicio == '' ){
        return
    }
    
    entradaDeDados.question('Número final: ', (numeroFinal) => {
        final = Number(numeroFinal)

        if(final < 100 || final > 1000 || final == '' || inicio == final){
            return
        }

        if(inicio > final) {
            console.log('ERRO')
            return
        }
        
        console.log('Lista de números Pares')

        let quantidade = 0
        let cont = inicio
        while(cont <= final){
            
            if (cont % 2 == 0) {
                quantidade = quantidade + 1
                console.log(cont) 
            }
            cont++
        }
        
        console.log(`Quantidades de números encontrados: ${quantidade}`)

        console.log('')
    
        console.log('Lista de números Impares')

        let quantiDois = 0
        let contador = inicio
        while(contador <= final){
            
            if(contador % 2 != 0) {
                quantiDois = quantiDois + 1
                console.log(contador)
            }
            contador++
        }
        console.log(`Quantidade de números encontrados: ${quantiDois}`)
    })
})