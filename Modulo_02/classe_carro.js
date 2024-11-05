class Carro {
    marca;
    modelo;
    cor;
    gastoMedioUrbano;
    gastoMedioRodovia;

    constructor(marca, modelo, cor, gastoMedioUrbano, gastoMedioRodovia) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.gastoMedioUrbano = gastoMedioUrbano;
        this.gastoMedioRodovia = gastoMedioRodovia; 
    }

    calculoGastoPercurso(distancia, precoCombustivel, tipo = 'urbano') {
        const gastoMedio = tipo === 'urbano' ? this.gastoMedioUrbano : this.gastoMedioRodovia;
        return (distancia / gastoMedio) * precoCombustivel;
    }
}

const mustang = new Carro("Ford", 2020, "Preto", 7, 10); 

console.log(mustang);
console.log(mustang.calculoGastoPercurso(50, 5)); 
console.log(mustang.calculoGastoPercurso(50, 5, 'rodovia')); 
