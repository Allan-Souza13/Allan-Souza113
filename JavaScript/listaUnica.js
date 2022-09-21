//Lista de dependentes
//Extrair de uma listagem de clientes apenas as informações de dependente e montar uma lista unica, para analize de outors departamentos do banco.

const clientes = [{

    nome:"Allan",
    cpf:"35623413475",
    dependentes:[{
        nome:"Camilla",
        parentesco:"Esposa",
        dataNasc:"19/01/2003"},
        {
        nome:"Tiago",
        parentesco:"Filho",
        dataNasc:"23/07/2032"
        }],
},
{
    nome:"Cristiane",
    cpf:"12355432123",
    dependentes:[{
    nome:"Manuela",
    parentesco:"filha",
    dataNasc:"07/08/2013"
    },
    {
    nome:"Allan Souza",
    parentesco:"filho",
    dataNasc:"28/10/1999"
    },
    {
        nome:"Eloa",
        parentesco:"Filha",
        dataNasc:"29/01/1998"
    }],
}]
const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.table(listaDependentes)


