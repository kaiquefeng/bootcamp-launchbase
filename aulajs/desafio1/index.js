const nome = "Carlos";
const peso = 80;
const altura = 1.75;
const sexo = "Masculino";

const imc = ` ${peso} / ${altura} * ${altura}`;

if (imc >= 30) {
    console.log("Carlos você está acima do peso")
} else{
    console.log("Carlos, você não está acima do peso")
}