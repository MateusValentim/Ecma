var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
; 

function renderTodos(){
    listElement.innerHTML = ''; //tudo o que estiver dentro da ul vai deixar como vazio, removendo todo o conteudo que esta dentro do listElement
   
    for(todo of todos){
        
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo); //Utilizando a variavel todo pois ela contem o texto de cada todo

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var pos = todos.indexOf(todo); //Procurando no array de todos o indice de todo que está dentro do ciclo for e retorna a posicao dele
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos +')'); // passando a posicao q esta no indice

        var linkText = document.createTextNode('Excluir');
        
        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);//inserindo o todoText dentro da li que todoElement cria
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement); //inserindo tudo oque esta em todoElement dentro da ul
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value; //armazendo o que é escrito no input
    
    todos.push(todoText);// armazenando o que é escrito no input dentro do array todos
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1); //Splice = remove uma quantidade de itens do array baseado na posição que vc passar ex: apartir da posicao que recebermos no parametro, remova o proximo item, que é exatamente aquele iten naquela posicao function deleteTodo(pos)>>>todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));//convertendo o vetor em JSON //setItem -> seta um valor no storage (dou o nome do valor que eu quiser) ('list_todos', todos) não grava vetores e nem objetos    
}
