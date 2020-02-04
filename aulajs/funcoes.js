// Criar um programa que calcula a média
// das turmas entre os alunos e envia
// mensagem do cálculo da média


// Criando Array

const alunosDaTurmaA = [
    {
        nome: "Cleiton",
        nota: 10
    },
    {
        nome: "Robson",
        nota: 9
    },
    {
        nome: "Fulano",
        nota: 2
    }

]

const alunosDaTurmaB = [
    {
        nome: "Kaique",
        nota: 1.8
    },
    {
        nome: "Diego",
        nota: 10
    },
    {
        nome: "Fulano",
        nota: 0
    }

]

function calculaMedia(alunos) {
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)


function enviaMensagem(media, turma) {

    // Se a média for maior que 5, parabenizar a turma
    if (media > 5) {
        console.log(`A média da turma ${turma} foi de ${media}. Parabéns`)
    } else {
        console.log(`A média da turma ${turma} é menor que 5`)
    }
}


enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')

console.log



