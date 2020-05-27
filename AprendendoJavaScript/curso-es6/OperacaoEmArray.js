
//FUNCAO MAP -- PERCORRE TODO O NOSSO VETOR, CADA ITEM DELES E EXECUTA A AÇÃO QUE PRECISAMOS EXECUTAR
const arr = [1, ,3, 4, 5, 8, 9];
const newArr = arr.map(function(item){
    return item * 2
});
console.log(newArr);
// Outro Exemplo de MAP
// const arr = [1, ,3, 4, 5, 8, 9];
// const newArr = arr.map(function(item, index){
//     return item + index;
// });

//REDUCE -- Consome todo nosso vetor e transforma tudo em uma unica informação em uma unica variavel, um unico número
const sum = arr.reduce(function(total, next){
    return total + next; /* JOGA O VALOR DESSA OPERAÇÃO P/ O TOTAL DA SEGUNDA ITERAÇÃO...*/ 
});
console.log(sum);
// 0
//1

//1
//3

//4
//4

// FILTER -- filtra os valores do meu array
const filter = arr.filter(function(item){
    return item % 2 === 0; //vai retornar apenas os numeros pares -- RETORNA SEMPRE BOOLEAN
});
console.log(filter);

//FIND -- Verifica se existe uma informação dentro do Array ou se eu consigo encontrar essa informação dentro do Array
const find = arr.find(function(item){
    return item === 3 // se não encontrar vai retornar no console o UNDEFINED
});
console.log(find);