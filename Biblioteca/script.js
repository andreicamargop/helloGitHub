let biblioteca = [];
let inputTitulo = document.getElementById("cadTitulo");
let inputAutor = document.getElementById("cadAutor");
let inputGenero = document.getElementById("cadGen");
let inputEditora = document.getElementById("cadEditora");
let inputIsbn = document.getElementById("cadIsbn")
let acerto = document.getElementById("acervo");

function add(){
let livro = {
    titulo:inputTitulo.value,
    autor:inputAutor.value,
    genero:inputGenero.value,
    editora:inputEditora.value,
    isbn:inputIsbn.value

}
biblioteca.push(livro);
inputTitulo.value = null;
inputGenero.value = null;
inputGenero.valeu = null;
inputEditora.valeu = null;
inputIsbn.value = null;
listagem();
}
function listagem(){
 let livros = "";
 for(let livro of biblioteca){ // para cada livro da biblioteca == 0f - da 
    livros += "Titulo: "+livro.titulo+"<br>"          //+= o valor que ela tinha + Titulo 
    livros += "Autor: "+livro.autor+"<br>" 
    livros += "Genero: "+livro.genero+"<br>"
    livros += "Editora: "+livro.editora+"<br>"
    livros += "ISBN: "+livro.isbn+"<br>"
    livros +="----------------<br>";

}
acervo.innerHTML = livros;
}

