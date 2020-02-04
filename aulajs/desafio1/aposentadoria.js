const nome = 'Lucio'
const sexo = 'M'
const idade = 48
const contribuicao = 49

const tempoMinimoContribuicaoHomem = 35;
const tempoMinimoContribuicaoMulher = 30;

const calculoAposentadoria = idade + contribuicao;

const verificacaoAposentadoriaHomem = calculoAposentadoria >= 95 && contribuicao >= tempoMinimoContribuicaoHomem;
const verificacaoAposentadoriaMulher = calculoAposentadoria >= 85 && contribuicao >= tempoMinimoContribuicaoMulher;

if (sexo == 'M') {

    if(verificacaoAposentadoriaHomem) {
        console.log(`${nome}, você pode se aposentar`)
    } else {
        console.log(`${nome}, voce nao pode se aposentar`)
    }
} else {

    if(verificacaoAposentadoriaMulher) {
        console.log(`${nome}, você pode se aposentar`)
    } else {
        console.log(`${nome}, voce nao pode se aposentar`)
    }

}




// versao criada por mim 

// if (sexo == 'M' && contribuicao >= 35 && idade + contribuicao >= 95) {
//     if (sexo == 'F' && contribuicao >=30 && idade + contribuicao >= 90) {
//         console.log("Parabéns, você pode se aposentar!")
//     } else {
//         console.log("cara, você ainda não pode se aposentar!")
//     }
// } else {
//     console.log("Cara, você ainda não pode se aposentar!");
// }