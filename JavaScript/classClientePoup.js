//Metodos e propiedades
// Aproveitar o Cliente que ja existe e criar a partir dele um novo tipo de clientepara contas poupança
//-----------------------------------------------------------------------------------------------------//

class Cliente{
    constructor(nome,cpf,email,saldo){
        this.nome= nome
        this.cpf= cpf
        this.email= email
        this.saldo= saldo
    }
    deposito(valor){
        this.saldo += valor

    }
    exibirSaldo(){
        console.table(this.saldo)
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome,cpf,email,saldo,saldoPoupanca){
        super(nome,cpf,email,saldo)
        this.saldoPoupanca = saldoPoupanca
    }
    
    depositoPoupanca(valor){
        this.saldoPoupanca +=valor
    }
}

const allan = new ClientePoupanca("Allan", "23455321245", "allan@email.com", 10000, 50000)
console.table(allan)

allan.deposito(50000)
allan.depositoPoupanca(25000)
console.table(allan)