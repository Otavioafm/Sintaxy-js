const Preco_litro_combustivel=6.70
const KmPorLitro=2

const Km=require('readline-sync');
let Km_percorrico=Km.question("Quantos Km você percorreu? ");

const Calculo_gasto=Km_percorrico/KmPorLitro;
console.log("Seu gasto nessa viagem será de: "+Calculo_gasto*Preco_litro_combustivel)














