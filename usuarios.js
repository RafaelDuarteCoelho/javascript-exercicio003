let quantidade = parseInt(prompt("Insira a quantidade de usuários"));
validador = isNaN(quantidade);
while (validador){
    quantidade = parseInt(prompt("não é um número, insira novamente"));
    validador = isNaN(quantidade);
}

let dadosDoUsuario=[]

class Usuario {

    constructor(nome, idade, telefone){
        this.nome = nome;
        this.idade = idade;
        this.telefone = telefone;
    }
    
}

for (let i = 0; i <= (quantidade - 1); i++){
    alert("Digite os dados do " + (i+1) + "º usuário")
    let cadastro = new Usuario(prompt('Qual o nome?'), parseInt(prompt('Qual a idade?')), parseInt(prompt('Qual o telefone?')))    
    dadosDoUsuario.push(cadastro);
}

document.write(`Nº de usuários: ${quantidade}<br><br>`)

for (Usuario of dadosDoUsuario) {
    document.write(`Nome: ${Usuario.nome} | Idade: ${Usuario.idade} | Telefone: ${Usuario.telefone} <br>`);
}