let batatas = [];
function add(){
    let produto = document.getElementById("txt").value;
    let posicao = batatas.indexOf(produto);
    if(posicao == -1){
        batatas.push(produto);
        document.getElementById("lista").innerHTML = batatas;
    }
    else{
        alert("O produto "+produto+" já está na lista");
    }
}
function remove(){
    let produto = document.getElementById("txt").value;
    let posicao = batatas.indexOf(produto);
    if(posicao == -1){
        alert(produto+" Não está na lista!");
    }
    else{
        batatas.splice(posicao, 1);
        document.getElementById("lista").innerHTML = batatas;
    }
}