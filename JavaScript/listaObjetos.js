const cliente = {
    nome:"Allan",
    idade:22,
    cpf:"85765247896",
    fone:["978654821", "956478235"],
    dependentes:[{
        nome:"Camilla",
        parentesco:"Esposa",
        dataNasc:"19/01/2001"
    }]  
}
cliente.dependentes.push({
    nome:"Tiago Souza",
    parentesco:"filho",
    dataNasc:"27/07/2032"
})

console.log(cliente)

const filhoMaisNovo =  cliente.dependentes.filter(
    dependente=> dependente.dataNasc=== "27/07/2032")

    console.log(filhoMaisNovo[0].nome)
