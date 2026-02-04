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
const { log } = require('console')
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
                        console.log('ERRO: É obrigatório o preenchimento de todos os dados !!!')

                    //Validação de números entre 0 e 100
                    }else if(nota1 < 0 ||  nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 <0 || nota4 > 100){ 
                        console.log('ERRO: Somente é permitido a entrada de valores entre 0 e 100.')
                    
                    //Validação para a entrada de letras nas notas
                    //isNaN() -> permite validar se o conteúdo da
                        //variável tem algum caracter ao invés de número
                    }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
                        console.log('ERRO: Não é possível calcular a média com a entrada de letras nas notas do aluno!!!')
                    //Calcular a média
                    }else{
                        let statusAluno
                        //Calculo da Média
                        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4
                        /*
                            Conversões de tipos de dados:
                                parseInt() -> Permite converter uma String para número INTEIRO
                                parseFloat() -> Permite converter uma String para número DECIMAL
                                Number() -> Permite converte uma String para NÚMERO (INTEIRO E DECIMAL) (inicia com maíscula por ser classe)
                                String() -> Permite converter um conteúdo para STRING
                                Boolean() -> Permite converter um conteúdo para BOOLEANO
                                typeof() -> Permite verificar o tipo de dados de uma variável (STRING e ou NUMBER)
                                TUDO CHEGA COMO STRING QUANDO ALGUÉM MANDA, MAS QUANDO EU ESTABELEÇO UM NÚMERO POR EXEMPLO, ELE RETORNA UM NUMBER
                                let n1 = 50
                                console.log(typeof(n1))

                                A linguagem de JS identifica o tipo de dados
                                [] - no JS é um array, trata como um objeto
                                {} - JSON, trata como um objeto
                                 AMBOS SÃO TIPOS DE DADOS NA PROGRAMAÇÃO. P/ o JS OS 2 SÃO == OBJETO "QUEM TEM QUE SABER OQ ESTÁ DENTRO DO OBJT É VC"
                         */

                        //Validação do Status de aprovação do aluno

                        if(media >= 70){
                            statusAluno = 'APROVADO!!!'

                        }else if (media >= 50 && media < 70){
                            statusAluno = 'RECUPERAÇÃO'
                        }else if (media < 50){
                            statusAluno = 'REPROVADO'
                        }

                        //Saída do boletim do aluno
                        console.log(' O aluno ' + nomeAluno + ' ficou com a média ' + media.toFixed(2) + ' e está ' + statusAluno)
                        //('aluno: $(nomeAluno) \n média final: $(toFixed(2)) \n Status do aluno: ${statusAluno}')
                    }

                })//Fecha a nota 4
            })//Fecha a nota 3
        })//Fecha a nota 2
    })//Fecha a nota 1
})//Fecha o nome