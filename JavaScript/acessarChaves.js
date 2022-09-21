const cliente = {

    nome: "Allan",
    idade: 22,
    telefone:"(11)97123-3413",
    dataDeNacimento:"15/04/9999"

}

const chave = ["nome","idade", "telefone","dataDeNacimento"]

console.log(cliente[chave[0]]);

                            //OU//

chave.forEach(info=> console.log(cliente[info]))

delete cliente.nome

console.log(cliente)