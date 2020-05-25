var xhr = new XMLHttpRequest(); //dá acesso a funcionalidade do AJAX p/ poder recuperar alguma informação de um servidor

xhr.open('GET', 'https://api.github.com/users/MateusValentim');
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
}