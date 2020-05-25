/**
 * O trecho de código abaixo representa a Atribuição por referência 
 * e apontam o mesmo endereço na memória.
 */

 const a = {name: 'Teste'}
console.log(a)

const b = a
console.log(b)

/**
 * O trecho de código abaixo representa a Atribuição por valor
 */

let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = undefined // não é boa pratica atribuir o UNDEFINED a uma variavel
console.log(!!produto.preco)
// OU
// delete.produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log (!!produto.preco)
console.log(produto)