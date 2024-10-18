function escrverNome(){
    let InputNome=require('readline-sync');
    const Nome=InputNome.question("Digite o seu nome: ");
    return(Nome);
}

function ValidarIdade(){
    let InputIdade=require('readline-sync')
    const Idade=InputIdade.question("Qual a sua idade: ")

    if(Idade>=18){
        console.log("Aprovado! Seja bem vindo"+escrverNome())
    }
    else{
        console.log("Você é menor de idade "+escrverNome())
    }
}
ValidarIdade();










