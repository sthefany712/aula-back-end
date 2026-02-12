/***************************************************************************
 * Objetivo: Arquivo responsável pelas funções de Calculos para este projeto
 * Autor: Sthefany
 * Data: 11/02/26
 * Versão: 1.0
 * 
 * 
 * *************************************************************************
 */


//Criando uma funçaõ para Calcular o valor da compra parcelada
//Método tradicional de criar uma função
//PRA ESSA FUNÇÃO CONSEGUIR CALCULAR OS JUROS, VOCê PRECISA ENTRAR COM O VALOR DO PRODUTO, A TAXA QUE SERIA OS JUROS
//E O TEMPO DE PAGAMENTO:::
function calcularJurosCompostos(valorCompra, taxaJuros, tempoPagto){
    //Recebe os argumentos da função em variáveis locais
    //As váriaveis (valor, taxa e tempo númericas por conta da conversão)
    //Mas os argumentos (valorCompra, taxaJuros, tempoPagto ainds será Strings)
    let valor = Number(valorCompra)
    let taxa = Number(taxaJuros)
    let tempo = Number(tempoPagto)

    //Validação para entradas vazias ou de caracteres inválidos 
    if(valorCompra == '' || isNaN(valorCompra) || tempoPagto == '' || isNaN (tempoPagto)){
        console.log('ERRO: Valores de compra ou tempo de pagamento estão incoretos')
        return false
    }else{ 
     
        //chama a função para converter o numero em percentual
        let percentual = calcularPercentual(taxa)

        //Validação para o erro do percentual na função calcularPercentual()
        if(percentual){
            let montante = valor * ((1+percentual) ** tempo)
            return Number (montante.toFixed(2))
        }else{
            return false
    }
    
    //console.log(percentual)
    //console.log(typeof)percentual)
    //verificar se está devolvendo number, string ou booleano 
     //let montante = valor * ((1+taxa)**tempo) < - como estava antes de criar a função calcularPercentual
}
}
     
//essa 
//Calculo de percentual
function calcularPercentual(numero){

    let numeroPercentual = Number(numero)

    //Validação para verificar se é um número válido
    if (numero == '' || numero <= 0 || isNaN(numero)) {
        return false //Não pode processar
    } else {
        //Processamento do calculo do percentual
        let percentual = numeroPercentual / 100
        return Number(percentual.toFixed(2))
    }

}

//Tornando as duas funções públicas para outros projetos poderem utilizar
module.exports = {
    calcularJurosCompostos,
    calcularPercentual
}