let bancoDeDados = [];
function add(){
    let usuario = document.getElementById("username").value;    
    let pos = bancoDeDados.indexOf(usuario.toUpperCase());
    if(pos == -1){
        bancoDeDados.push(usuario.toUpperCase());
        alert("Usuário cadastro com sucesso")
    }else{
        alert("Esse usuário já foi cadastrado")
    }
    document.getElementById("username").value = null;
}
function login(){
    let usuario = document.getElementById("user").value
    let pos = bancoDeDados.indexOf(usuario.toUpperCase());
    if(pos == -1){
        alert("Usuário não encontrado")
    }else{
        alert("Bem vindo ao sistema")
    }
}
    function remove(){
        let usuario = document.getElementById("userDelete").value;
        let pos = bancoDeDados.indexOf(usuario.toUpperCase());
        if(pos == -1){
            alert(usuario+" Não está na lista!");
        }else{
            bancoDeDados.splice(pos, 1)
            alert("Usuário excluído com sucesso")
        }
        document.getElementById("userDelete").value = null;    
}    
function edit(){
    let edit = document.getElementById("userEdit").value;
    let pos = bancoDeDados.indexOf(edit.toUpperCase())
    if(edit == -1){
        alert("Não há nada para ser editado")
    }else{
        let sub = prompt("Digite a correção do item").toUpperCase();
        bancoDeDados[pos] = sub
    }
    document.getElementById("userDelete").value = null;
}
    