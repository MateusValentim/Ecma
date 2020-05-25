for (var i = 0; i < 10; i++){
    console.log(i)
}
console.log('i = ', i) // i vai estar disponivel fora do bloco ??? e qual o seu valor ? 
// Resp: Sim pois ele foi declarado como um VAR dentro do For, não tem escopo de bloco
// Valor de i é o valor que fez com que ele pulasse fora do LAÇO, i só vale a ser falso quando i passa a valer 10.