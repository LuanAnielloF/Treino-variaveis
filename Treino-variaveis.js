const peso = 87
const altura = 1.75

const imc = peso / Math.pow(altura,2)
let arredondamento = imc.toFixed(2)
console.log(`Seu imc é ${arredondamento}`)


