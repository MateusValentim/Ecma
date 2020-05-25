let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)//fazendo a negação duas vezes !!

console.log('os verdadeiros...') //numeros inteiros sempre resolvem para verdadeiros
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)// Not a Number
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('só para finalizar...')
console.log(!!(''|| null|| 0 || ' '))

let nome = ''
console.log(nome || 'Desconhecido')