const registrarDados = function(nomeDoAluno, nomeDoProfessor, 
    sexoDoProf, sexoDoAluno, nomeDoCurso, nomeDaDisciplina,
    nota1,nota2,nota3,nota4){

    let nomeAluno = String(nomeDoAluno).toUpperCase() 
    let nomeProf = String(nomeDoProfessor).toUpperCase()  
    let sexoProf = String(sexoDoProf).toUpperCase()  
    let sexoAluno = String(sexoDoAluno).toUpperCase()  
    let nomeCurso = String(nomeDoCurso).toUpperCase()  
    let nomeDiscip = String(nomeDaDisciplina).toUpperCase()  
    let notaUm = Number(nota1)
    let notaDois = Number(nota2)
    let notaTres = Number(nota3)
    let notaQuatro = Number(nota4)

    return {
        nomeAluno, nomeProf,
        sexoProf, sexoAluno,
        nomeCurso, nomeDiscip,
        notaUm, notaDois, notaTres, notaQuatro
    }

}
    

module.exports = {
    registrarDados
}
