const cliente = {
    nome:"Allan",
    idade:22,
    cpf:"85765247896",
    fone:["978654821", "956478235"]
}

cliente.dependentes = {
    nome:"Camilla",
    parentesco:"Esposa",
    dataNasc:"19/01/2001"
}

console.log(cliente)
cliente.dependentes.nome="Camilla Souza"
console.log(cliente)