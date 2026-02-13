function calculo(primeiroNumero, segundoNumero, operacao) {
    let calculandoUm = Number(primeiroNumero)
    let calculandoDois = Number(segundoNumero)

    //Uma variável let declarada dentro de um if, for, ou function só existe ali dentro.
    //NUMBER torna a string em número

    if (operacao == 'soma') {
        return calculandoUm + calculandoDois

    } else if (operacao == 'subtração') {
        return calculandoUm - calculandoDois

    } else if (operacao == 'multiplicação') {
        return calculandoUm * calculandoDois

    }else if (operacao == 'divisão') {
        return calculandoUm / calculandoDois
    }     
}

//Torna a função global
module.exports = {
    calculo
}

//Validação
let primeiro = Number (numeroPrimeiro)
let segundo = Number (numeroSegundo)
let qualOperacao = (operaEscolhida)

    //Proibe a entrada de valores vazios
if ( primeiro == '' || segundo == '' || qualOperacao == ''){
    
}