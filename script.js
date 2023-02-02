let nome
let senha

function SolicitarDados() {
    nome = prompt("Digite seu nome: ")
    senha = prompt("Digite sua senha: ")
}


let nome2
let senha2
function VerificarDados(nome, senha) {
    nome2 = prompt("Digite seu nome novamente: ")
    senha2 = prompt("Digite sua senha novamente")

    if (nome === nome2 && senha === senha2) {
        return true
    } else {
        return false
    }
}

// SolicitarDados()
// console.log(VerificarDados(nome, senha))

function confirmarDados1(nome) {
    var nomeCompleto = nome + ' da Silva'
    var idade = 20
    function getAnoNascimento(idade) {
        var ano = 2023 - idade
        return ano
    }

    console.log('Nome completo: ', nomeCompleto)
    console.log('Ano de nascimento: ', getAnoNascimento(idade))
    console.log('Idade: ', idade)
}

function confirmarDados2(nome) {
    const nomeCompleto = nome + ' da Silva'
    let geracao = 'millenium'
    function getAnoNascimento() {
        const idade = 40
        const ano = 2023 - idade
        return ano
    }
    const anoDeNascimento = getAnoNascimento()
    if (anoDeNascimento <= 1995) {
        geracao = 'geracao X'
    }

    console.log('Nome completo: ', nomeCompleto)
    console.log('Ano de nascimento: ', getAnoNascimento())
    console.log('Geração: ', geracao)
}

function confirmarDados3(nome) {
    var nomeCompleto = nome + ' da Silva'
    try {
        function getAnoNascimento() {
            if (!idade) {
                throw ("Um erro foi encontrado e não foi possível concluir a operação")
            }
            var idade = 20
            var ano = 2023 - idade
            return ano
        }

    } catch (error) {
        console.log(error)
    }
    console.log('Nome completo: ', nomeCompleto)
    console.log('Ano de nascimento: ', getAnoNascimento())
    console.log('Idade: ', idade)

}

function confirmarDados4(nome, idade) {
    var nomeCompleto = nome + ' da Silva'
    function geracaoPertence(idade){
        if (anoDeNascimento <= 1995) {
            return 'geracao X'
        } else {
            return 'millenium'
        }
    }
    function getAnoNascimento() {
        var ano = 2023 - idade
        return ano
    }
    var anoDeNascimento = getAnoNascimento()
    var geracao = geracaoPertence(idade)
    console.log('Nome completo: ', nomeCompleto)
    console.log('Ano de nascimento: ', getAnoNascimento())
    console.log('Geração: ', geracao)
}

confirmarDados4('Marcos', 40)