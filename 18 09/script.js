function executarEx1008(){
    let id, horas, valorHora, salario
    // let id
    // let valorHora
    // let salario
    id = Number(prompt("Digite seu id: "))
// id = number('45')    
// id = 45
horas = Number(prompt("Quantas horas você trabalhou?"))
valorHora = Number(prompt("Quanto você ganha por hor?"))

salario = horas * valorHora 

alert("ID : " + id + "\nSalário: " + salario.toFixed(2))


}
function executarEx1009(){
    let nome, salarioFixo, totalVendas, comissao
    nome = prompt("Digite o nome do vendedor")
    salarioFixo = Number(prompt("Digite o salário fixo"))
    totalVendas = Number(prompt("Valor total de vendas no mês"))
     
    comissao = salarioFixo * 0.15

salario = salarioFixo + comissao
alert("O funcionario: " + nome + "\nrecebeu: " + salario.toFixed(2))

}


 