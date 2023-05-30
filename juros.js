const capital = 1000
const taxa = 12.5/100
const tempo = 5

const montante = capital * (1+taxa) ** tempo
const juros = montante.toFixed(3)

console.log(juros)