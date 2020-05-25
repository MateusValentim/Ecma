var endereco = {
    rua: "Rua dos Pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
}
function dadoscli(endereco){
return ('O usuário mora em ' + endereco.cidade + ' / ' + endereco.uf + ' no bairro ' + endereco.bairro + ' na rua ' + endereco.rua + ' com o numero ' + endereco.numero)
}
console.log(dadoscli(endereco))
