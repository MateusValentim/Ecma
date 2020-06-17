/* 
function soma(a, b){
    return a + b;
}
console.log(soma(1));  Vai retornar um NaN
console.log(soma());  Vai retornar um NaN 
*/
const soma =  (a = 3, b = 6) => (a + b)

console.log(soma(1));  
console.log(soma());
