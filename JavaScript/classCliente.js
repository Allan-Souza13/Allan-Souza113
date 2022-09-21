class Cliente {
    constructor(nome,email,cpf,saldo){
        this.nome =nome
        this.email=email
        this.cpf= cpf
        this.saldo=saldo
    }
    depositar(valor){
        this.saldo +=valor
    }
    exibiSaldo(){

        console.log(this.saldo)
    }
    }
    const allan = new Cliente("Allan", "allan@email.com", "12343245654", 4000000)
    allan.exibiSaldo()
    console.log(allan)
