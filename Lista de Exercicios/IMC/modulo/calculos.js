//Função ter um nome em verbo, e deixar claro o que está fazendo
//Isso aqui função
//Uma função precisa retornar algo
const gerarImc = function(peso,altura){
    let peso1 = Number(peso)
    let altura1 = Number(altura) 

    //variável
    const resultadoImc = Number(peso1) / (Number(altura1) ** 2)
    return resultadoImc
}

//Criando uma função para a condição, pois não fica junta com a conta
    const condicionandoImc = function(){
        if(resultadoImc < 18.5){
            return 'Abaixo do peso'
        }else if(resultadoImc == 18.5 || resultadoImc <= 24.9){
            return 'peso normal'
        }else if(resultadoImc == 25 || resultadoImc <= 29.9){
            return 'Acima do peso(sobrepeso)'
        }else if(resultadoImc == 30 || resultadoImc <= 34.9){
            return 'Obesidade 1'
        }else if(resultadoImc == 35 || resultadoImc <= 39.9)
            return 'Obesidade 2'
    }
    

module.exports = {
    gerarImc, condicionandoImc

   }

