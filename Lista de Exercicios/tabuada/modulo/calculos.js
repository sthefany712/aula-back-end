/*******************************************************************************
 * Objetivo: Criar um sistema para gerenciar o cálculo de uma tabuada
 * Data: 10/02/2026
 * Autor: Sthefany
 * Versão:1.0
 *******************************************************************************/

const obterTabuadas = function (tabuadaInicial, tabuadaFinal, numeroInicial,numeroFinal) {
    //Estrutura de reptição

    //Tabuada inicial
    let contadorTabuadas = tabuadaInicial
    while (contadorTabuadas <= tabuadaFinal) {
        console.log(`Tabuada do [${contadorTabuadas}]`)

        //Criei um while dentro do outro

        //Contador da tabuada
        let tabuada = numeroInicial
        while (tabuada <= numeroFinal) {
            let resultado = contadorTabuadas * tabuada
            console.log(` ${contadorTabuadas} x ${tabuada} = ${resultado}`)
            tabuada++
        }
        contadorTabuadas++
    }
}

module.exports = {
    obterTabuadas
}