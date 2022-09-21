const cliente = {
    nome:"Allan",
    idade:22,
    cpf:"85765247896",
    fone:["978654821", "956478235"],
    dependentes:[
        {
        nome:"Camilla",
        parentesco:"Esposa",
        dataNasc:"19/01/2001"
    },

       {
            nome:"Tiago Souza",
            parentesco:"filho",
            dataNasc:"27/07/2032"
        }
    ],

saldo:100,
depositar:function(valor){
    this.saldo += valor
},

sacar:function(saque){
    this.saldo -=saque
}
}


//Imprimindo
console.log(cliente.saldo)
cliente.depositar(1000)
cliente.sacar(400)
console.log(cliente.saldo)