/* class Matematica {
     static soma(a,b){ toda vez que declaro um método Static ele não enxerga o resto da classe
         return a + b;
    }
}*/

class List {
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data)
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor(){
        super();//Chamando o construtor da Classe Pai

        this.usuario = 'Mateus'; 
    }
    mostraUsuario(){
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('NovooooTodo!!!');
}

MinhaLista.mostraUsuario();