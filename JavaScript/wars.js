const fichaGuerreiro = {
nome:"Argon",
classe:"Guerreiro"
}

const equipoGuerreiro = {
    espada:"BladeRow",
    capa: "ColdClover +2"
}



const mago = {
    nome:"Gandalf",
    classe:"Mago"
}

const guerreiro = {
    nome: "Argon",
}

const ranger = {
    nome: "Ashe",
    classe:"Ranger"
}

const personagens = {...mago,...guerreiro,...ranger}
console.table(personagens)