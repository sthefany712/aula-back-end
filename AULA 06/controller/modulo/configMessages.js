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

//Mensagem de ERRO da API (letra maiscula)
const ERROR_BAD_REQUEST = {status: false, status_code: 400, message: 'Os dados enviados na requisição não estão corretos.'} 


//Mensagens de Sucesso da API
const SUCCESS_CREATED_ITEM = {status: true, status_code: 201, message: 'Registro inserido com sucesso!'}

module.exports = {
    DEFAULT_MESSAGE,
    ERROR_BAD_REQUEST,
    SUCCESS_CREATED_ITEM
}