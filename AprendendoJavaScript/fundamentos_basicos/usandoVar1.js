{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}
console.log(sera) // a variavel VAR É visivel até fora do escopo

function teste(){
    var local = 123
    console.log(local)
}

console.log(local) // A variavel VAR = local NÃO É VISIVEL fora do escopo, pois é uma FUNÇÃO.
