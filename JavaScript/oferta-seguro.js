//Percorrer um objeto, verificar se existe a chave dependente e, caso exista, enviar uma mensagem de oferta de seguro.//

const cliente = {
    nome:"Allan",
    idade:22,
    cpf:"85765247896",
    fone:["978654821", "956478235"],
    dependentes:[
        {
        nome:"Camilla",
        parentesco:"Esposa",
        dataNasc:"19/01/2003"
    },

       {
            nome:"Tiago Souza",
            parentesco:"filho",
            dataNasc:"27/07/2032"
        }
    ],

saldo:10000000,
depositar:function(valor){
    this.saldo += valor
}
}

function ofertaSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
        
    }
}

console.log(Object.values(cliente))
ofertaSeguro(cliente);
