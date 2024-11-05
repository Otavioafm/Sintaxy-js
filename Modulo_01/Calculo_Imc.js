let InputNome=require('readline-sync')
const Nome=InputNome.question("Digite o seu Nome: ")

let InputAltura=require('readline-sync')
const Altura=InputAltura.question('Qual a sua altura '+Nome+': ')

let InputPeso=require('readline-sync')
const Peso=InputPeso.question("Qual o seu peso "+Nome+ ":")

const IMC=Peso/(Altura*Altura)
console.log("Seu IMC é: "+IMC.toFixed())


if(IMC>=30 && IMC<=40 ){
    console.log("Obesidade")
}
else if(IMC<18.5){
    console.log("Abaixo do peso Ideal")
}
else if(IMC>=18.5 && IMC<=25){
    console.log("Peso normal")
}
else if(IMC>=25 && IMC<=30){
    console.log("Acima do peso")
}
else{
    console.log("Obesidade Grave")
}













