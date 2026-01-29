/**************************************************************************************************
 * Objetivo: Calcular médias escolares
 * Data: 29/01/2026
 * Autor: Sthefany
 * Versão: 1.0
************************************************************************************************** */

/*
    Existem 3 formas de criação de variáveis

    var -> Permite a criação de um espaço na memória 
        do tipo variável. Foi utilizado muito em 
        projetos antigos. (hoje não é tão utilizado)
        Recomendação: caso você queira utilizar,
        recomenda-se na criação de variáveis globais
        (inicio do código). (Apenas uma recomendação)

    let -> Permite a criação de um espaço na memória
        do tipo variável. A utilização deste padrão é
        para a criação dentro de blocos de programação local { }.
        Essa  variável nasce e morre dentro deste bloco.
        NÃO É RECOMENDADO A SUA UTILIZAÇÃO EM ESCOPO GLOBAL.

    const -> Permite a criação de um espaço na memória 
        onde não sofrerá alteração durante o código. A const
        pode se utilizada dentro e fora de bloco { }.
        Dica: Caso você queira diferenciar uma const, var ou um let.
        A const você pode criar com letras MAIUSCULAS.

*/
//Import da biblioteca
const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
})

entradaDeDados.question('Digite o nome do aluno:', function(nome){
   //Recebe o nome do aluno que foi digitado
    let nomeAluno = nome

    //Entrada da nota 1
    entradaDeDados.question('Digite a nota 1:', function(valor1){
        let nota1 = valor1

        //Entrada da nota 2
        entradaDeDados.question('Digite a nota 2:', function(valor2){
            let nota2 = valor2

            //Entrada da nota 3
            entradaDeDados.question('Digite a nota 3:', function(valor3){
                let nota3 = valor3

                //Entrada da nota 4
                entradaDeDados.question('Digite a nota 4:', function(valor4){
                    let nota4 = valor4
                    
                    /*
                        Operadores de Comparação:
                        == -> Permite compara a igualdade de dois conteúdos 
                        < -> Permite comparar valores menores
                        > -> Permite comparar valores maiores
                        >= Permite comparar valores maiores  ou iguais
                        <= Permite comparar valores menores ou iguais
                        != Permite comparar a diferença entre conteúdos
                        === -> Permite comparar a igualdade de conteúdos
                            e a igualdade da tipagem de dados
                        !== ->Permite comparar a diferença de conteúdos e a
                            igualdade de tipos de dados
                        ==! -> Permite comparar a igualdade e conteúdos e a
                        difença de tipos de dados
                        !=! -> Permite comparar a diferença de conteúdos e a
                        diferença de tipos de dados

                        //os dois primeiros sempre vão validar o conteúdo
                        //e o segundo a tipagem de dados

                    Operadores Lógicos
                        E -> AND -> &&
                        OU -> OR -> ||
                        NÃO -> NOT -> !
                    */
                   //Validação de entrada vazia
                    if(nomeAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                        console.log('ERRO: é obrigatório o preenchimento de todos os dados !!!')

                        //Validação de números entre 0 e 100
                    }else if(nota1 < 0 ||  nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 <0 || nota4 > 100){ 
                        console.log('Notas invalidas !!!')

                    }else{
                        //Calcular a média
                    }
                    
                })//Fecha a nota 4
            })//Fecha a nota 3
        })//Fecha a nota 2
    })//Fecha a nota 1
})//Fecha o nome