// yarn add @babel/plugin-proposal-object-rest-spread (no terminal e adicionar '@babel/plugin-proposal-object-rest-spread' no arquivo BabelRC)

//Rest Operator em objetos
    const usuario = {
        nome: 'Mateus Valentim',
        idade: 23,
        empresa: 'RSI Informática',
        cargo: 'Analista de Automação Trainee'
    }
    //idade, empresa e cargo será passado pra variavel RESTO
    const {nome, ...resto} = usuario;
    
    console.log(nome);
    console.log(resto);


//Rest operator em vetores

const arr = [1,2,3,4];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);


function soma (a, b,...params){
    return params;
}

console.log(soma(2, 4, 6, 8, 10, 12))//Enviando todos esses parametros para os 'params'

// SPREAD 'Repasa as informações de um obj ou um array para outra estrutura de dados'

const arr1 = [1,2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3)

///

const usuario1 = {
    nome: "Mateus",
    idade: 23,
    empresa: "RSI Informática"
};

const usuario2 = { ...usuario1, nome: "Mateus Valentim"};


console.log(usuario2);





