/*********************************************************************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD no Banco de Dados MySQL na tabela
 *      Filme
 * Data: 15/04/2026
 * Autor: Marcel
 * Varsão: 1.0
 * 
 *                                              Instalações:
 * 
 * npm install express --save
 * npm install cors --save
 * 
 * npm install knex --save : biblioteca p/ se conectar com o banco de dados, existem várias dependencias e ele é uma delas.
 * outras bibliotecas que se conectam com o BD: 
 * 
 * Sequelize (mais básico e antigo, prof recomendou evitar o uso)
 * Prisma (É bom, porém anda instável)
 * Knex
 * Tudo depende do BD que vc está utilizando.
 * *******************************************************************************************************************************/

//                                              Basicamente ctrl c ctrl v

 //Import da biblioteca para gereciar o banco de dados Mysql no node.JS
const knex = require('knex')

//Import do arquivo de configuração para conexão com o BD Mysql
const knexConfig = require('../../database_config_knex/knexFile.js') // ../para sair da pasta

//Criar a conexão com o BD Mysl
const knexConex = knex(knexConfig.development)


 //Funções do CRUD para a tabela filme (a base p/ criar qualquer tabela)

//Função para inserir dados na tabela de filme
const insertFilme = async function(filme) { 

    //nesse caso o parametro será um json (filme)
    //copiei o código do MySQL
    //Do jeito que vc escreveu os atributos no BD, devo escrever no json (filme), 
    //se não a minha controller não vai aceitar e devolverá um 404, já que quem 'manda' no BD é o back. 
    //Organize tudo MUITO bem!

    let sql = `insert into tbl_filme (
					nome, 
					data_lacamento, 
                    duracao, 
                    sinopse, 
                    avaliacao, 
                    valor, 
                    capa
                        )
                values (
			        '${filme.nome}', 
                    '${filme.data_lancamento}', 
                    '${filme.duracao}',
                    '${filme.sinopse}',
                    '${filme.avaliacao}',
                    '${filme.valor}',
                    '${filme.capa}'
        );`

    //Pego meu parametro (filme) . e coloco os atributos da tabela, EXATAMENTE como foram criados e dessa forma tudo fica mais claro e organizado.

    //Executar o ScriptSQL no banco de dados
    let result = await knexConex.raw(sql) //precisa colocar o await para que o BD faça a analise e consiga fazer devolutiva, se não ele passa direto pelo js

    if(result){
        return true
    }else
        return false

        //A controller é quem trata esse true ou false, retornando alguma numeração que sign alguma resposta
        
}

//Função para atualizar um filme existente na tabela
const updateFilme = async function(filme) {

}

//Função para retornar todos os dados da tabela de filme
const selectAllFilme = async function (filme) { //selectAll (trás tudo)
    
}

//Função para retornar os dados do filme filtrando pelo ID
const selectByIdFilme = async function (id) {
    
}

//Função para excluir um filme pelo ID
const deleteFilme = async function (id) {
    
}

module.exports = {
    insertFilme,
    updateFilme,
    selectAllFilme,
    selectByIdFilme,
    deleteFilme
}