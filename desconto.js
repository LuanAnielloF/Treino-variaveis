const preçoTenis = 150
const meuDinheiro = 100

const desconto = preçoTenis-meuDinheiro

const cupom1 = 100 * desconto/preçoTenis
const cupom2 = cupom1.toFixed(1)
console.log(`o valor do cupom deve ser ${cupom2}%`)
