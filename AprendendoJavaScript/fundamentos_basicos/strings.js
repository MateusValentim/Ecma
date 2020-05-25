
console.log(typeof nome)
console.log(typeof nome2)
const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola'.concat(escola).concat("!"))
console.log(escola.replace,3,'e')
console.log(escola.replace (/\d/, 'e')) // posso usar Regex também - subsitua todos os digitos dentro do texto pela letra E
console.log(escola.replace (/\w/g, 'e')) // posso usar Regex também - subsitua todos os digitos e letras dentro do texto pela letra E

console.log('Ana ,Maria, Pedro'.split(','))