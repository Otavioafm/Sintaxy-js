class PessoaC {
    nomeC;
    idadeC;
    alturaC;
    pesoC;

    constructor(nomeC, idadeC, alturaC, pesoC) {
        this.nomeC = nomeC;
        this.idadeC = idadeC;
        this.alturaC = alturaC;
        this.pesoC = pesoC;
    }

    calcularIMC() {
        return this.pesoC / (this.alturaC * this.alturaC);
    }

    classificarIMC() {
        const imc = this.calcularIMC();
        if (imc < 18.5) return "Abaixo do peso ideal";
        if (imc < 24.9) return "Peso ideal";
        if (imc < 29.9) return "Sobrepeso";
        return "Obesidade"; 
    }
}

const readlineSync = require('readline-sync');

let nome = readlineSync.question("Digite o seu nome: ");
let idade = parseInt(readlineSync.question("Digite a sua idade: "));
let altura = parseFloat(readlineSync.question("Digite a sua altura (Em metros): "));
let peso = parseFloat(readlineSync.question("Digite o seu peso (Em kg): "));

const pessoa1 = new PessoaC(nome, idade, altura, peso);
const imc = pessoa1.calcularIMC();
const classificacao = pessoa1.classificarIMC();

console.log(`${pessoa1.nomeC}, seu IMC é de: ${imc.toFixed(2)} (${classificacao})`);
