/********************************************************************************************************************************************************
 * Objetivo: Arquivo responsável pela criação da API do projeto de Estados e Cidades (Sempre no app)
 * Data: 01/Abril/2026
 * Autor: Sthefany Correia
 * Versão: 1.0
 * 
 * /*  API
    HTTP(Verbos)
     - get      (Solicitar Dados) - PEGAR
     - post     (Solicitar a inserção de um novo item) - PUBLICAR
     - put      (Solicitar uma alteração) - COLOCAR
     - delete   (Solicitar um delete) - APAGAR

     Vamos ultilizar a biblioteca EXPRESS
     Buscar no npm que tem todas as dependencias para ser instaladas no node

     Instalação do EXPRESS  - npm install express --save
        Dependencia responsável pela utilização do protocolo HTTP para 
        criar uma API

     Instalação do CORS     - npm install cors --save
        Dependencia responsável pelas configurações a serem realizadas para 
        a permissão de acesso da API

        ESTRUTURA BASE DA API!!!!!
*******************************************************************************************************************************************************/ 

//1 Passo: Import das dependencias para criar a API
const express   = require('express') //require == exigir
const cors      = require('cors')

//2 Passo: Criando um objeto para manipular o express
const app = express()

//3 Passo: Conjunto de permissões a serem aplicadas no CORS da API
const corsOptions = {
    origin: ['*'], //A origem da requisição, podendo ser um IP ou '*'- TODOS
    methods: 'GET', //São os verbos que serão liberados na API (GET, POST, PUT e DELETE)
    allowedHeaders: ['Content-type', 'Autorization'] //São permissões de cabeçalho do CORS 
}

//4 Passo: Configura as permissões da API atraves do CORS 
app.use(cors(corsOptions))

//Exportando arquivo das funções
const estadosCidades = require('./modulo/arquivoFuncao.js')

//Response -> Retornos da API (Se a API precisar RESPONDER) (req)
//Request -> São chegadas de dados da API (Sempre que API precisar RECEBER) (res)
//sempre que o back fizer um response ele vai montar json e status_code. 
//Precisa mandar 2 response, um com json e outro com status_code (é um código que representa oq está acontecendo c/ a minha API,

//Criando EndPoint para a API
app.get('/v1/senai/estados', function(request, response){

    //Chama a função que retorna a lista de estados
    let estados = estadosCidades.getListaDeEstados()

    response.json(estados)
    response.status(200)
})

app.get('/v1/senai/dados/estado/:uf', function(request, response){ 
    // /:uf é a minha variável que estou criando na minha url, os : são OBRIGATÓRIOS
    // http://localhost:8080///v1/senai/dados/estado/sp - como coloco na pesquisa
    // console.log(request.params.uf)

    let sigla = request.params.uf
    let estado = estadosCidades.getDadosEstado(sigla)

    response.json(estado)
    response.status(200)
    
    //.status(): É o "humor" da resposta (sucesso, erro, alerta).
    //.json(): É o "conteúdo" da resposta (o presente dentro da caixa).
})

app.get('/cidades', function(request, response){   

    //coloco cidades na barra de pesquisa e não a variável
    // let sigla = estadosCidades.getDadosEstado('mg')

    response.json({"message": "Testando minha API de Cidades"})
    response.status(200)
})

//Serve para inicializar a API para receber requisições (geralmente colocamos no final do código)
app.listen(8080, function(){
    console.log('API funcionando e aguardando novas requisições ...')
}) 
//Não ficar abrindo terminais, se mexer em algo, dar ctr C e rodar novamente !!!!!
//Cada endPoint (url) retorna um Json
