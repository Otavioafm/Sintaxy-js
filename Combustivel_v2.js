const gasolina=6.29;
const etanol=4.04;
const gastoKmGasolina=2;
const gastoKmEtanol=1;

const inputCombustivel=require('readline-sync');
const combustivelUsado=inputCombustivel.question("Qual combustivel você está usando? [Etanol] [Gásolina]: ").toUpperCase()

if (combustivelUsado==="ETANOL"){
    const inputKmEtanol=require('readline-sync');

    const kmEtanolPercorrido=inputCombustivel.question("Quantos Km você percorreu? ");
    const calculoGastoEtanol=kmEtanolPercorrido/gastoKmEtanol;
    console.log('Seu gasto nessa viagem será de: '+calculoGastoEtanol*etanol);
}else{
    const inputKmGasolina=require('readline-sync');
    const kmGasolinaPercorrido=inputKmGasolina.question("Quantos Km você percorreu?: ");
    const calculoGastoGasolina=kmGasolinaPercorrido/gastoKmGasolina;
    console.log("Seu gasto nessa viagem será de: "+calculoGastoGasolina*gasolina);
}














