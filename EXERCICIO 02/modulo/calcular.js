/***********************************************************************************************
 * Objetivo: Arquivo responsável pelas funções de calcular(somar, dividir, subtrair, multiplicar)
 * Data: 20/02/2026
 * Versão: 1.0
 * Autor: Sthefany Correia 
 ***********************************************************************************************/

//toLowerCase() -> Retorna a string em minusculo
//toUpperCase() -> Retorna a string em MAISCULO
//muito usado em condicionais

//Modelo de função anonima
//Caclcular as 4 operações matemáticas
//Seleciona a operação


const validarDados = function(valor1,valor2,operador){
    if(valor1 == '' || isNaN (valor1) || valor2 == '' || isNaN(valor2)){
        return false
    }else{
        return true
    }
}

const calcular = function (numero1, numero2, operador){
    //Entrada da função
    let valor1             = Number(numero1)
    let valor2             = Number(numero2)
    let resultado          //= false (assim eu já faço o boolean iniciar com falso)
    let operadorMatematico = String(operador).toUpperCase()       
    
    //Condicionais para validar qual o tipo de operação matemática
    //A ausencia da { } na condicional é porque qualquer condicional que tenha apenas uma linha 
    //de processsamento a { } torna-se opcional (O CÓDIGO DEVE ESTAR ALINHADO! SE NÃO CONSEGUIR
    // FAZER USA A { })
    //Processamento da Função
    // if(operadorMatematico == 'SOMAR')
    //     resultado = valor1 + valor2
    // else if(operadorMatematico == 'SUBTRAIR')
    //     resultado = valor1 - valor2
    // else if(operadorMatematico == 'MULTIPLICAR')
    //     resultado = valor1 * valor2
    // else if(operadorMatematico == 'DIVIDIR')
    //     resultado = valor1 / valor2

    
    switch (operadorMatematico) {
        case 'SOMAR': //if
            resultado = somar(valor1,valor2)
            break;

        case 'SUBTRAIR': //else if
            resultado = subtrair(valor1,valor2)
            break;

        case 'MULTIPLICAR': //else if
            resultado = multiplicar(valor1,valor2)
            break;

        case 'DIVIDIR': //else if
            resultado = dividir(valor1,valor2)
            break;
        default: return false //else (último else da estrutura tradicional)
            break;
            //é possível usar if e else junto com switch
    }
    
    //Saída
    if(resultado != undefined)
        return Number(resultado).toFixed(2)
    else
        return false

        //ou : return resultado
        //Já faço com que o resultado receba o valor "false" então quando cair no if 
        //o false se torna um número. Agora se for escrito algo diferente das  4 operações
        // o resultado será falso
}

//Exemplos de funções baseada em SETA (Arrow function)
//Funções para realizar as operações matemáticas
//=>torna uma função. A seta diz: "execute oq está na sequência"
//função baseada em seta já tem a caracteristica de retornar, por isso não precisa do return
//Criando uma váriavel separada p/ cada operação tenho a possibilidade de chamar somente
//função que eu quero usar, ao invés de usar calculo posso ir direto pra soma por exemplo.
const somar         = (numero1,numero2) => Number(numero1) + Number(numero2) 
const subtrair      = (numero1,numero2) => Number(numero1) - Number(numero2) 
const multiplicar   = (numero1,numero2) => Number(numero1) * Number(numero2) 
const dividir       = (numero1,numero2) => Number(numero1) / Number(numero2) 

//console.log(calcular (10, 60 ,'somar'))

module.exports = {
    calcular,
    validarDados,
    somar,
    subtrair, 
    multiplicar,
    dividir
}

