/***************************************************************************************************************************
 * Objetivo: Arquivo resposável pela validação, tratamento e manipulação de dados para o CRUD de filmes
 * Data: 17/04/2026
 * Autor: Sthefany
 * Versão: 1.0
 ***************************************************************************************************************************/

//Import do arquivo de padronização de mensagens
const config_message = require('../modulo/configMessages.js')

//Import do arquivo DAO para fazer o CRUD do filme no banco de dados
const filmeDAO = require('../../model/DAO/filme/filme.js')

//Faço minhas const baseado nas funções do meu DAO, se tenho 5 funções no DAO, 
//no minimo são 5 controllers, porém, pode ser mais de 5 

//Função para inserir um novo Filme
const inserirNovoFilme = async function (filme,contentType) {

    //Criando um clone do objeto JSON para manipular a sua estrutura local sem
    //modificar a estrutura original
    //let message = config_message NÃO FUNCIONA COMO O CLONE DE UMA VARIÁVEL, já que é um OBJT 

    let message = JSON.parse(JSON.stringify(config_message)) //clone
    
    try {

        if (String(contentType).toLocaleUpperCase() == 'APPLICATION/JSON') {

            //Validação de dados para os atributos do Filme (ERRO:400)
            let validar = await validarDados(filme)

            //Se a função validar retornar um JSON de erro, iremos devolver ao APP o erro
            if (validar) {
                return validar
            } else {
                //Encaminha os dados do filme para o DAO
                let result = await filmeDAO.insertFilme(filme)
                if (result) { //status code 201
                    message.DEFAULT_MESSAGE.status = message.SUCCESS_CREATED_ITEM.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_CREATED_ITEM.status_code
                    message.DEFAULT_MESSAGE.message = message.SUCCESS_CREATED_ITEM.message
                } else {//status code 500
                    return message.ERROR_INTERNAL_SERVER_MODEL //Erro 500 model
                }
                return message.DEFAULT_MESSAGE
            }
        } else {
            return message.ERROR_CONTENT_TYPE
        }

    } catch (error) {
        console.log(error);
        
        return message.ERROR_INTERNAL_SERVER_CONTROLLER// ERRO 500 controller
    }
}


//Função para atualizar um filme
const atualizarNovoFilme = async function (filme, id , contentType) {

    // Clona o objeto de mensagens para evitar mutação do objeto original importado
    // Isso garante que alterações feitas aqui não afetam outras chamadas da função

        let messageJson = JSON.parse(JSON.stringify(config_message))

    try {

        //Validação do contentType para receber apeas JSON
        if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){

            //Válidação com id incorreto
            let resultBuscarID = await buscarFilme(id)
            
            //Se a função buscar encontrar o filme o atributo status JSON será verdadeiro 
            //Isso significa que o filme existe na base,caso não retorne true, então 
            //o retorno da função poderá ser um 404 ou 500

            if(resultBuscarID.status){
                let validar = await validarDados(filme)

                //Válidação de campos obrigatórios para a atualização(body) 
                if(!validar){
                    //Adiciono o atributo id do filme no JSON para ser enviado para o DAO
                    filme.id = id

                    //Chama a  função do DAO para atualizar o filme(dados e o ID)
                    let result = await filmeDAO.updateFilme(filme)

                    if(result){
                        messageJson.DEFAULT_MESSAGE.status = messageJson.SUCCES_UPDATED_ITEM.status
                        messageJson.DEFAULT_MESSAGE.status_code = messageJson.SUCCES_UPDATED_ITEM.status_code
                        messageJson.DEFAULT_MESSAGE.message = messageJson.SUCCES_UPDATED_ITEM.message

                        return messageJson.DEFAULT_MESSAGE

                    }else{
                        return messageJson.ERROR_INTERNAL_SERVER_CONTROLLER //500
                    }
                }else{
                    console.log(validar);
                    
                    return validar //400
                }
            }else{
            
                return resultBuscarID //400 ou 404 ou 500
                
            }

        }else{

            return messageJson.ERROR_CONTENT_TYPE //415
            
        }
        
    } catch (error) {
        
        return messageJson.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Função para retornar todos os filmes
const listarFilme = async function () { 

    let message = JSON.parse(JSON.stringify(config_message)) //clone

    try {
        //Chama a função do DAO para retornar a lista de todos os filmes
        //Função que vai buscar/acessar o BD
        let result = await filmeDAO.selectAllFilme()
        console.log(result);
        

        //Validação para verificar se o DAO conseguiu processar os dados
        if(result){
            //Validação para verificar se existe conteúdo no Array
            if(result.length > 0){
                message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                message.DEFAULT_MESSAGE.response.count = result.length //retorna a quantidade de filmes dentro do BD
                message.DEFAULT_MESSAGE.response.filme = result

                return message.DEFAULT_MESSAGE //status_code que 200 vai ser retornado um cabeçalho com informações da API
            }else{
                return message.ERROR_NOT_FOUND //404
            }

        }else{
            return message.ERROR_INTERNAL_SERVER_MODEL //500 (model) //controller n retorna false, retorna message
        }

        
    } catch (error) {
       
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller)
    }
}

//Função para buscar um filme pelo ID
const buscarFilme = async function (id) {
    let message = JSON.parse(JSON.stringify(config_message)) //clone fora do try

    try {
        //Validação para garantir que o ID seja válido
        if(id == '' || id == null || id == undefined || isNaN(id)){
            message.ERROR_BAD_REQUEST.field = '[ID] INVÁLIDO'
            return message.ERROR_BAD_REQUEST //400
        }else{
            let result = await filmeDAO.selectByIdFilme(id)

            if(result){
                if(result.length > 0){
                    message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.filme = result

                    return message.DEFAULT_MESSAGE //200
                }else{
                    return message.ERROR_NOT_FOUND //404
                }
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL //500 (Model)
            }
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }
}

//Função para excluir um filme
const excluirFilme = async function (id) {

    let messageJson = JSON.parse(JSON.stringify(config_message))
    
    try {
        let resultBuscarID = await buscarFilme(id)
        
        if(resultBuscarID.status) {
            let result = await filmeDAO.deleteFilme(id)

            if(result){
                messageJson.DEFAULT_MESSAGE.status = messageJson.SUCCES_DELETE.status
                messageJson.DEFAULT_MESSAGE.status_code = messageJson.SUCCES_DELETE.status_code
                messageJson.DEFAULT_MESSAGE.message = messageJson.SUCCES_DELETE.message

                return messageJson.DEFAULT_MESSAGE

            }else {
                return messageJson.ERROR_INTERNAL_SERVER_CONTROLLER //500
            }

        }else {
            return resultBuscarID //400 ou 404 ou 500
        }


    } catch (error) {
        return messageJson.ERROR_INTERNAL_SERVER_CONTROLLER
    }
    
}

//Função para validar todos os dados de filme (obrigatórios,qtd de caracteres, etc..)
const validarDados = async function (filme){

    let message = JSON.parse(JSON.stringify(config_message)) //ARRUMAR O MESSAGE

    if(filme.nome == ''|| filme.nome == null || filme.nome == undefined || filme.nome.length > 80) { //vazio é != de null
        message.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO' //400
         return message.ERROR_BAD_REQUEST //400

    } else if(filme.data_lancamento == '' || filme.data_lancamento == null || filme.data_lancamento == undefined || filme.data_lancamento.length != 10 ) {
        message.ERROR_BAD_REQUEST.field = '[DATA_LANCAMENTO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400

    } else if(filme.duracao == '' || filme.duracao == null || filme.duracao == undefined || filme.duracao.length < 5 ) {
        message.ERROR_BAD_REQUEST.field = '[DURACAO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400

    } else if(filme.sinopse == '' || filme.sinopse == null || filme.sinopse == undefined) {
        message.ERROR_BAD_REQUEST.field = '[SINOPSE] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400

    } else if(isNaN(filme.avaliacao) || filme.avaliacao.length > 3) { //não trato mais coisas pois ele não é obgt, tratei apenas o numero
        message.ERROR_BAD_REQUEST.field = '[AVALIAÇÃO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400

    } else if(filme.valor == '' || filme.valor == null == filme.valor == undefined || filme.valor.length > 5 || isNaN(filme.valor)) {
        message.ERROR_BAD_REQUEST.field = '[VALOR] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400

    } else if(filme.capa.length > 255) { 
        message.ERROR_BAD_REQUEST.field = '[CAPA] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400
    } else{
         return false
    }    
}

module.exports = {
    inserirNovoFilme,
    atualizarNovoFilme,
    listarFilme,
    buscarFilme,
    excluirFilme,
}