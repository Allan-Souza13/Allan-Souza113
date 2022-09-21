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
}
}
 
let relatorio = "";

for(let info in cliente){
    if(typeof cliente [info] === "object" || typeof cliente [info] === "function")//Typeof serve para indicar qual é o tipo de dado
    {
        continue
    }else{
        relatorio += `${info} ==> - ${cliente[info]}`
    }

    
}

console.log(relatorio)