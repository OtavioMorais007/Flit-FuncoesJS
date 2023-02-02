let nome
let senha

function SolicitarDados(){
    nome = prompt("Digite seu nome: ")
    senha = prompt("Digite sua senha: ")
}


let nome2
let senha2
function VerificarDados(nome, senha){
    nome2 = prompt("Digite seu nome novamente: ")
    senha2 = prompt("Digite sua senha novamente")

    if(nome === nome2 && senha === senha2){
        return true
    } else {
        return false
    }
}

SolicitarDados()
console.log(VerificarDados(nome, senha))