/*****************************************************************************************
 * Objetivo: Manipular dados utilizando Array e JSON
 * Data: 05/03/2026
 * Autor: Sthefany
 * Versão: 1.0
 
 ****************************************************************************************/ 

/*
    [ ] -> representa um objeto do tipo ARRAY
    { } -> representa um objeto do tipo JSON

    Array -> É um objeto na memória que permite trabalhar com vários valores em um único objeto

    let nome   = 'José'
    let nome2  = 'Maria'
    let nome3  = 'João'
            
            indice   0       1        2
    let nome   = ['José', 'Maria', 'João']
    //INDICE SEMPRE COMEÇA NO 0 
    //MAS A QUANTIDADE DE ELEMENTOS NÃO SE BASEIA NO 0, OU SEJA, SÃO 3 ELEMENTOS

    JSON -> É um objeto na memória que permite trabalhar com CHAVE e VALOR

        let nome        = 'José'
        let telefone    = '123456789'
        let email       = 'jose@gmail.com'

        let nome = { "nome": "José",
                     "telefone": "123456789",
                     "email: "jose@gmail.com"
                    }
*/

//Formas de criar um ARRAY 
const listaDeNomes     =    ['José', 'Maria', 'João', 'André', 'Alex'] // posso já colocar o conteúdo OU
const listaDeClientes  =    []                                         // Crio vazio e alimento ele conforme eu preciso
                                                                       //JS permite guardar TIPOS diferecentes de dados dentro do msm ARRAY  
const listaDeFornecedores = []   
                                                
const exibirDados = function(){
    //Exibe o objeto array e seu conteúdo
    console.log(listaDeNomes)

    //Exibe o objeto ARRAY em formato de tabela com seus indices
    console.table(listaDeNomes)

    //Exibe apenas o valor do respectivo indice do array
    console.log(listaDeNomes[1])

    //Retorna o tipo de dados de um indice do array
    console.log(typeof(listaDeNomes[4]))

    console.log(`O nome do cliente é: ${listaDeNomes[0]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[1]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[2]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[3]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[4]}`)

    //Estrutura de Repetição

    //While
    console.log('********* WHILE *********')

    //     <=
    // let cont = 0
    // while(cont <= 4){
    //     console.log(`O nome do cliente é: ${listaDeNomes[cont]}`)
    //     cont+=1

    //     listaDeNomes.length -->> Não uso igual
        let cont = 0
        while(cont < listaDeNomes.length){
            console.log(`O nome do cliente é: ${listaDeNomes[cont]}`)
            cont+=1
    }

    //FOR
    console.log('********* FOR *********')
    // for(let contador = 0; contador <=4; contador++){
    //     console.log(`O nome do cliente é: ${listaDeNomes[contador]}`)
    // }
  
    for(let contador = 0; contador < listaDeNomes.length; contador++){
        console.log(`O nome do cliente é: ${listaDeNomes[contador]}`)
    }

    //FOR EACH - Retorna o conteúdo de cada elemento através de um CALL BACK
    //no js é uma função de call back
    console.log('********* FOR EACH *********') //não trabalha c/ contador
    listaDeNomes.forEach(function(cliente){
        console.log(`O nome do cliente é: ${cliente}`)
    })

    //FOR IN
    //Retorna o índice do elemento, e será preciso colocar dentro do objeto do array
    //Ex: listaDeNomes[item]
    //Praticamente igual ao FOR e WHILE

    console.log('********* FOR IN *********')
    for(item in listaDeNomes){
        console.log(`O nome do cliente é: ${listaDeNomes[item]}`)
    }     

    //FOR OF
    //Percorre o array e retorna somente o conteúdo de cada índice, sendo muito parecido 
    //com ForEch
    console.log('********* FOR OF *********')
    for(cliente of listaDeNomes){
        console.log(`O nome do cliente é: ${cliente}`)
    }

    //Saber quantos elementos/itens eu tenho no array
    console.log(listaDeNomes.length)

    //SUGESTÃO:
    //MAIS INDICADOS: FOR EACH OU FOR OF
}

const manipularDados = function(){
    //Adicionando valores novos no array através de índices
    listaDeClientes[0] = 'José da Silva'
    listaDeClientes[1] = 'Maria da Silva'
    listaDeClientes[2] = 'João da Silva'
    listaDeClientes[4]  = 'Alex da Silva'

    console.log(listaDeClientes)

    //Permite adicionar novos valores no array, sempre no final da lista, 
    //sempre vai seguindo a ordem
    listaDeFornecedores.push('Luiz da Silva')
    listaDeFornecedores.push('Zezinho da Silva')
    listaDeFornecedores.push('Joao da Silva')
    listaDeFornecedores.push('Luizinho da Silva', 'André da Silva', 'Carlos da Silva')

    console.log(listaDeFornecedores)
}

//Sempre chamar a função p/ funcionar
//exibirDados()
manipularDados()
