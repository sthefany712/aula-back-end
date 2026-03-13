/*****************************************************************************************
 * Objetivo: Manipular dados utilizando Array e JSON
 * Data: 05/03/2026
 * Autor: Sthefany
 * Versão: 1.0
 *****************************************************************************************/
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

//Formas de criar um ARRAY : P/ montar listas de dados
const listaDeNomes     =    ['José', 
                            'Maria', 
                            'João', 
                            'André', 
                            'Alex', 
                            'Carlos',
                            'Ana', 
                            'Bruna', 
                            'Jake', 
                            'José', 
                            'José da Silva'] // posso já colocar o conteúdo OU
const listaDeClientes  =    []               // Crio vazio e alimento ele conforme eu preciso
                                             //JS permite guardar TIPOS diferentes de dados dentro do msm ARRAY  
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
    for(cont in listaDeNomes){
        console.log(`O nome do cliente é: ${listaDeNomes[cont]}`)
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

    // ***** PUSH *******
    //Permite adicionar novos valores no array, sempre no FINAL da lista, 
    //sempre vai seguindo a ordem
    listaDeFornecedores.push('Luiz da Silva')
    listaDeFornecedores.push('Zezinho da Silva')
    listaDeFornecedores.push('Huguinho da Silva')
    listaDeFornecedores.push('Luizinho da Silva', 'André da Silva', 'Carlos da Silva')

    console.table(listaDeFornecedores)

    //COMANDOS IMPORTANTES:

    // ****** UNSHIFT *******
    //Permite ADICIONAR novos elementos no array sempre no INICIO da lista
    listaDeFornecedores.unshift('Ana Carolina')
    console.table(listaDeFornecedores)

    // ******** POP *******
    //Permite REMOVER elementos do FINAL da lista
    listaDeFornecedores.pop()
    console.table(listaDeFornecedores)

    // ****** SHIFT *******
    //Permite REMOVER elementos do INICIO da lista
    listaDeFornecedores.shift()
    console.table(listaDeFornecedores)

    // ****** SPLICE *******
    //Permite REMOVER um elemento BASEADO NO INDICE da lista
               // splice(indice, quantidade de elementos)
    listaDeFornecedores.splice(2,1)
    console.table(listaDeFornecedores)

     // ****** ESSE SPLICE PERMITE ADICIONAR UM ELEMENTO *******
     //em determinado lugar do array (indice)
                      //Indice, 0 -> significa que não será removido ninguém, Novo conteúdo.
     listaDeFornecedores.splice(2,0, 'Carlos da Silva')
     console.table(listaDeFornecedores)

}

const removerItem = function(nome){
 
    //Retorna o indice de um elemento fazendo a busca pelo valor
    //Quando encontra o elemento ele para, ex: se eu tenho 10 Marias ele apaga só
    //a primeira que encontrar, já o FOR apaga todas.
    //Se o indexof não o conteúdo ele devolve -1
    let indice = listaDeNomes.indexOf(nome)
    if(indice != -1){
        listaDeNomes.splice(indice, 1)
        return true
    }else{
        return false
    }

    //FOR IN, OF E O EACH NÃO PRECISO DECLARAR A VARIÁVEL
    //FOR automaticamente percorre todos os elementos
    // for(indice in listaDeNomes){
    //     if(listaDeNomes[indice] == nome){
    //         listaDeNomes.splice(indice,1)
    //     }
    // }
}    

const verificarItem = function(nome){
    //Verifica a existência de um conteúdo dentro de uma lista (true/false)
    return listaDeNomes.includes(nome) 
   
}

//coloco o toUpperCase p/ que a o nome possa ser escrito tanto com letra maiuscula quanto minuscula
//já que é o próprio sistema que vai colocar tudo como MAISCULA
const quantidadeDeItens = function(nome){
    let cont = 0
    listaDeNomes.forEach(function(item){
        if(String(item).toUpperCase() == String(nome).toUpperCase()) 
            cont +=1
    })

    return cont
}

                // ********* JSON **********
                //Dados do mesmo seguimento. Um objt de dados, uma estruturas de dados. (atributos)
//O atributo tem que ser SEMPRE MINUSCULO e com aspas DUPLAS
//JSON Não tem indice, tem atributo
const criandoDadosJSON = function(){
    let aluno = {"nome": "José",
                "ra": 123456,  //Não está em "" pois é um INTEIRO
                "telefone": "975846824",
                "email":"jose@gmail.com"
                }
    
    //Exibindo o objeto JSON completo
    console.log(aluno)     
    console.table(aluno) //por não ter indice não é muito bom usar

    //Exibindo apenas o ATRIBUTO do JSON
    console.log(aluno.nome)
    console.log(aluno.email)

    //Adiciona um novo atributo no JSON
    aluno.sexo = 'Masculino'
    console.log(aluno)

    //Remove um atributo no JSON
    delete aluno.telefone
    console.log(aluno)


}

//id e nome (atributo) minuscula
//o objeto começa do 1 porque o bc não identifica 0
const cadastroDeProdutos = function(){
    let cores = [
        {"id": 1, "cor":"Branco"}, //Indice 0 
        {"id": 2, "cor":"Preto"},  //Indice 1
        {"id": 3, "cor":"Azul"},   //Indice 2
        {"id": 4, "cor":"Rosa"},   //Indice 3
        {"id": 5, "cor":"Cinza"}   //Indice 4
    ]

    let marcas = [
        {"id": 1, "marca": "LG",        "telefone": "1234569", "email":"lg@.com.br"}, //começo contar do 0 por ser array
        {"id": 2, "marca": "Dell",      "telefone": "1562569", "email":"dell@.com.br"},
        {"id": 3, "marca": "Lenovo",    "telefone": "1323437", "email":"lenovo@.com.br"},
        {"id": 4, "marca": "Apple",     "telefone": "11934569","email":"apple@.com.br"},
        {"id": 5, "marca": "Rayzer",    "telefone": "3934569", "email":"rayzer@.com.br"},
        {"id": 6, "marca": "Logitech",  "telefone": "8734569", "email":"log@.com.br"},
        {"id": 7, "marca": "Multilaser", "telefone":"36634569","email":"multi@.com.br"}
    ]

    let produtos =  [
        {   "id": 1,
            "nome": "Monitor", //idex 0
            "descricao": "27 polegadas",
            "marca": [
                        marcas[1].marca
            ],
            "qtde": 20,
            "cor": [
                cores[4],
                cores[1]
            ],
            "valor": 800.50
        },
        {   "id": 2,
            "nome": "Teclado",
            "descricao": [
                            marcas[5].marca
            ],
            "qtde": 200,
            "cor": cores,
            "valor": 150.00
        },
        {   "id": 3,
            "nome": "Mouse sem fio",
            "descricao": [
                            marcas[0].marca,
                            marcas[1].marca,
                            marcas[5].marca,
                        ],
            "qtde": 500,
            "cor": [cores[0],
                    cores[1],
                    cores[4],
                    cores[5]
                ],
                
            "valor": 150.00
        }
    ]
    //console.log(produtos)
    //console.table(produtos)
    produtos[0],[1].forEach(function(nomeProduto){
         console.log('O cor do produto é: ' + nomeProduto)
        })

    //console.log(produtos)
    //console.log(produtos[0].cor)
    //console.log(produtos[0].cor[1].cor)

    //console.table(produtos) //coloquei só p/ visualizar melhor

    //Usando forEach p/ repetir (looping)
    // produtos[0].cor.forEach(function(nomeCor){
    //     console.log('A cor do produto é: ' + nomeCor.cor)
    // })





    //console.log(cores)
    //console.table(cores) //Array começa do 0 mas os atributos começa do 1

    //console.log(cores[2].nome) //printa só a cor, se eu quiser esse print: { id: 3, nome: 'Azul' }
    //só tirar o .nome
    //precisa dar o caminho EXATO do que você quer, para que o a leitura seja exata.

    //ARRAY TRATO COMO ÍNDICE
    //JSON trato como ponto (.)
    //(cores[2].nome) - [2] INDEX do ARRAY    .nome : JSON
}

//Sempre chamar a função p/ funcionar
//exibirDados()
//manipularDados()
//console.table(listaDeNomes)

// let resposta = (removerItem('Kelly'))
// if(resposta)
//     console.log('Item removido com sucesso.')
// else
//     console.log('Não foram encontrados itens para ser removido.')
// console.table(listaDeNomes)

//console.log(verificarItem('Kelly')) //toda vez que a função tem return  precisa chama-la no console

//console.log(quantidadeDeItens('josé'))

//manipularDados()
//criandoDadosJSON()
cadastroDeProdutos()



