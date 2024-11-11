const inputNumero= require('readline-sync')
let Numero=inputNumero.question("Digite o numero que deseja ver a tabuada: ")
console.log(`Você selecionou a Tabuada do ${Numero}`)

for (let i = 0; i < 11; i++) {
    let tabuada=Numero*i;
    console.log(`${Numero}x${i}=${tabuada}`)
    
}























