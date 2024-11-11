lista=[]
listaPar=[]
listaImpar=[]


const inputEscolha=require('readline-sync')
let Escolha=inputEscolha.question("Você quer ver números [Par] ou [Impar]: ").toUpperCase()

const inputNumeros=require('readline-sync')
console.log("Digite cinco número aléatorios: ")

for (let i = 1; i< 6; i++) {

    let Numeros=parseInt(inputEscolha.question(`Numero [${i}]: `))
    lista.push(Numeros)

    if (Numeros%2==0) {
        listaPar.push(Numeros)
    }
    else{
        listaImpar.push(Numeros)
    }
    
}

if (Escolha === 'PAR') {
    console.log("Números pares: ", listaPar)
}else if (Escolha === 'IMPAR') {
    console.log("Números ímpares: ", listaImpar)
}else {
    console.log(`Você digitou "${Escolha}". As opções válidas são [Par] ou [Impar].`)
}
















