function cliente(nome,cpf,email,saldo){
 this.nome=nome
    this.cpf=cpf 
    this.email=email 
    this.saldo=saldo  
    this.depositar = function(valor){
        this.saldo +=valor
    }

}

//POUPANÇA  
function ClientePoupanca(nome, cpf, email,saldo,saldoPoup){
    cliente.call(this,nome,cpf,email,saldo)

    this.saldoPoup = saldoPoup
}
const allan = new ClientePoupanca("Allan", "12433253532","allan@email.com",10000,2000)
console.table(allan)
ClientePoupanca.prototype.depositaPoup = function(valor){

    this.saldoPoup +=valor
}
allan.depositaPoup(5000)
console.table(allan)