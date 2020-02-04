// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média


// Criando Array

const alunos = [
    {
        nome: "Kaique",
        nota: 9.8
    },
    {
        nome: "Diego",
        nota: 10
    },
    {
        nome: "Fulano",
        nota: 2
    }

]

// criando objeto - é uma colecao de atributos
// const aluno01 = {
//     nome: "kaique",
//     nota: 9.8
// }

// const aluno02 = {
//     nome: "Diego",
//     nota: 10
// }

// const aluno03 = {
//     nome: "Fulano",
//     nota: 2
// }

const nomesDeAlunos = ["Kaique", "Diego", "Fulano"]

console.log(alunos[1])



const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;

// Se a média for maior que 5, parabenizar a turma
if (media > 5) {
    console.log(`A nota foi de ${media}. Parabéns`)
} else {
    console.log('A média é menor que 5')
}


