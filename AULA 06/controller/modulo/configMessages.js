/**************************************************************************************************************
 * Objetivo: Arquivo responsável pela configuração e padronização das mensagens da API
 * Data: 17/04/2026
 * Autor: Sthefany
 * Versão: 1.0 
 **************************************************************************************************************/

//Padronização de cabeçalho para retorno dos endpoits da API
const DEFAULT_MESSAGE = {
    api_description: 'API para gerenciar o controle de Filmes',
    development: 'Sthefany da Silva Carmo Correia',
    version: '1.0.4.26', //versão e data
    status: Boolean, 
    status_code: Number,
    response: {}
}

//Mensagens de erro da API (//Mensagens de sucesso da API)
const ERROR_BAD_REQUEST                  = {status : false, status_code: 400, message: 'Os dados enviados na requisição não estão corretos'}

const ERROR_INTERNAL_SERVER_MODEL        = {status : false, status_code: 500, message: 'Não foi possível procesar a requisição por conta de erro na API [ERRO NA MODELAGEM DE DADOS]'}

const ERROR_INTERNAL_SERVER_CONTROLLER   = {status : false, status_code: 500, message: 'Não foi possível procesar a requisição por conta de erro na API [ERRO NA CONTROLLER['}

const ERROR_CONTENT_TYPE                 = {status : false, status_code: 415, message: 'Não foi possível processar a requisição pois o formato de dados aceitp pela APLI é somente JSON'}

const ERROR_NOT_FOUND                    = {status : false, status_code: 404, message: 'Não foi encontrado nenhum dado para retorno'}

//Mensagens de sucesso da API
const SUCCESS_CREATED_ITEM = { status: true, status_code: 201, message: 'Registro inserido com sucesso' }
const SUCCESS_RESPONSE =     {status: true, status_code: 200 }
const SUCCES_DELETE = {status: true, status_code: 200, message: 'Deletado com sucesso'}

module.exports = {
    DEFAULT_MESSAGE,
    ERROR_BAD_REQUEST,
    SUCCESS_CREATED_ITEM,
    ERROR_INTERNAL_SERVER_MODEL,
    ERROR_CONTENT_TYPE,
    ERROR_INTERNAL_SERVER_CONTROLLER,
    ERROR_NOT_FOUND,
    SUCCESS_RESPONSE,
    SUCCES_DELETE
}