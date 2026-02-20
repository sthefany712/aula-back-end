function calculo(primeiroNumero, segundoNumero, operador) {
    let calculandoUm = Number(primeiroNumero)
    let calculandoDois = Number(segundoNumero)
    let conta = String(operador).toLowerCase() //Para deixar letra minuscula

    //Validação
    //Proibe a entrada de valores vazios
    if (primeiroNumero == '' || segundoNumero == '' || conta == '') {
        return 'Atenção! Preencha todos os campos corretamente.'
    }

    if (isNaN(primeiroNumero) || isNaN(segundoNumero)){
        return 'Digite apenas números!'
    }
    
    if (conta !== 'somar' &&  conta !== 'subtrair' && conta !==  'multiplicar' && conta !== 'dividir') {
         return 'Essa operação não é aceita!'  
    }
    //Uma variável let declarada dentro de um if, for, ou function só existe ali dentro.
    //NUMBER torna a string em número

    if (conta == 'somar') {
        let resultado = calculandoUm + calculandoDois
        return resultado.toFixed(2)
        
    } else if (conta == 'subtrair') {
        let resultado = calculandoUm - calculandoDois
        return resultado.toFixed(2)

    } else if (conta == 'multiplicar') {
        let resultado = calculandoUm * calculandoDois
        return resultado.toFixed(2)

    } else if (conta == 'dividir') {
        let resultado = calculandoUm / calculandoDois
        return resultado.toFixed(2)
}
}
//Torna a função global
module.exports = {
    calculo
}

