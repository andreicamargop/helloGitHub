let numeros =

function executar83(){
let numero
for(let i=0; i<=25; i++){
numero = Math.round(Math.random()*6)
numeros.push(numero)
console.log(numeros);
}
console.log(numeros);
document.getElementById("resultado").innerHTML = "Array gerado com absurdo sucesso"
}
function executar83b(){
let index1, index2
do{
index1 = Number(prompt("Digite um número entre 0 e 24"))
}while(index1 < 0 || index1 > 24)

do{
index2 = Number(prompt("Digite outro número"))
}while(index1 < 0 || index1 > 24)

soma = numeros + numeros
console.log("Soma: ", soma);
}

function mostrarArray(){
document.getElementById("resultado").innerHTML = numeros
}
function pesquisar(){
let valor = Number(prompt("Digite um número desejado para pesquisar"))

}
