// Primeira forma de criar um Objeto
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['DescontoLegal'] = 0.40

console.log(prod1)

// Segunda forma de criar um Objeto

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: { /*criando um Objeto dentro de outro */
        exDeObjetoDentroDeObjeto: 2,
        obj: {
            blablabla: 3
        }

    }

}
