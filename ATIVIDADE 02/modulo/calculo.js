function calculo(primeiroNumero, segundoNumero, conta) {
    let calculandoUm = Number(primeiroNumero)
    let calculandoDois = Number(segundoNumero)

    //Validação
    //Proibe a entrada de valores vazios
    if (primeiroNumero == '' || segundoNumero == '' || conta == '') {
        return 'Atenção! Preencha todos os campos corretamente.'
    }
    
    if (isNaN(primeiroNumero) || isNaN(segundoNumero)){
        return 'Digite apenas números!'
    }
    
    if (conta !== 'soma' &&  conta !== 'subtração' && conta !==  'multiplicação' && conta !== 'divisão') {
         return 'Essa operação não é aceita!'  
    }
    //Uma variável let declarada dentro de um if, for, ou function só existe ali dentro.
    //NUMBER torna a string em número

    if (conta == 'soma') {
        return calculandoUm + calculandoDois

    } else if (conta == 'subtração') {
        return calculandoUm - calculandoDois

    } else if (conta == 'multiplicação') {
        return calculandoUm * calculandoDois

    } else if (conta == 'divisão') {
        return calculandoUm / calculandoDois
}
}

//Torna a função global
module.exports = {
    calculo
}

