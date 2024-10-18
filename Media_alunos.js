const inputNome=require('readline-sync');
const NomeAluno=inputNome.question("Digite o seu nome: ");

let notas=[];
const inputNota=require('readline-sync');

for(let i=0; i<3; i++){
    let nota=inputNota.questionFloat("Digite sua nota: ");
    notas.push(nota);
}
console.log("Suas notas são: "+notas);

let soma=0;
for(let i=0; i<notas.length; i++){
    soma+=notas[i];
}

let media=soma/notas.length
console.log(NomeAluno+" Sua nota média é de "+media.toFixed())

if(media>7){
    console.log("Aprovado")
}
else if(media>=5 && media<=7 ){
    console.log("Recuperação")
}
else{
    console.log("Reprovado")
}
