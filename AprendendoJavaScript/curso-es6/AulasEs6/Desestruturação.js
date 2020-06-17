const usuario = {
    nome: 'Mateus',
    idade: 23,
    endereço: {
        cidade: 'Carapicuíba',
        estado: 'São Paulo'
    },
}    
// console.log(usuario);
// console.log(usuario.nome);
// console.log(usuario.idade);
// console.log(usuario.cidade);

const { nome, idade, endereço: {cidade}} = usuario

console.log(nome);
console.log(idade);
console.log(cidade);


// function mostraNome(usuario){
//     console.log(usuario.nome);
// }

function mostraNome({nome, idade}){
    console.log(nome, idade)
}

mostraNome(usuario);

