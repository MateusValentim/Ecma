//SEM ARROW FUNCTION

/* const arr = [1, 3, 4, 5, 6]

const newArr = arr.map(function(item){
    return item * 2;
 })
console.log(newArr);*/

// COM ARROW FUNCTION

const arr = [1, 3, 4, 5, 6]

const newArr = arr.map(item => item * 2) // aplicavel quando não tem um corpo de função

// const newArr = arr.map(item => {  quando recebe apenas um parametro posso remover os () do item olha o ex abaixo com os ()
//     return item * 2;
// })

// const newArr = arr.map((item) => {
//     item * 2;
// })
console.log(newArr)

//CRIANDO UMA FUNCAO COM ARROW FUNCTION, POSSO USAR O CONST
/* const teste = () => 'teste' {
     
 }*/
// console.log(teste);

const testeArrowCreateObject = () => ({nome: 'Mateus'}) //FUNÇÃO QUE RETORNA DIRETO UM OBJETO, TENHO QUE INSERIR OS ()

console.log(testeArrowCreateObject);