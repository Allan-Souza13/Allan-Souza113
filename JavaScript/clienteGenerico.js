function cliente (nome,cpf,email,saldo){
    this.nome=nome
    this.cpf=cpf
    this.email=email
    this.saldo=saldo
    this.deposito = function(valor){
        this.saldo +=valor
    }
}

const allan = new cliente("Allan", "12344536754","allan@email.com", 1000000)
const cris = new cliente("Cristiane", "112412341243", "cris@email.com",2000000)


console.table(allan)
console.table(cris)