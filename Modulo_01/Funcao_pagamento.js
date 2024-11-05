const readline = require('readline-sync'); // Importação do readline-sync no início do arquivo

function pagamentoDebito(ticket) {
    const desconto = 0.10;
    console.log("\nVocê escolheu a forma de pagamento Débito, seu desconto é de 10%");
    const valorFinal = ticket * (1 - desconto);
    console.log('Valor original: R$ ' + ticket + ' | Valor com desconto: R$ ' + valorFinal.toFixed(2) + "\n");
}

function pagamentoPix(ticket) {
    const desconto = 0.30;
    console.log("\nForma de pagamento escolhida [Pix], seu desconto é de 30%");
    const valorFinal = ticket * (1 - desconto);
    console.log('Valor original: R$ ' + ticket + ' | Valor com desconto: R$ ' + valorFinal.toFixed(2) + "\n");
}

function pagamentoCredito(ticket) {
    const opcoesValidas = ['2', '3', '4'];
    let parcelas;

    while (true) {
        parcelas = readline.question("Quantas parcelas você deseja: [2] [3] [4]: ");
        if (opcoesValidas.includes(parcelas)) {
            break; // Sai do loop se a opção for válida
        } else {
            console.log("Entrada inválida. Por favor, escolha 2, 3 ou 4.");
        }
    }

    const valorParcela = ticket / parcelas; // Cálculo do valor da parcela
    console.log("O valor das suas parcelas são de: R$ " + valorParcela.toFixed(2));
}

let ticketInput = readline.question("\nQual o valor a ser pago: ");
const ticket = parseFloat(ticketInput); // Converte a entrada para número

let formaPagamento = readline.question("Qual a forma de pagamento? [Debito] [Pix] [Credito] [Dinheiro]: ").toUpperCase();

if (formaPagamento === "DEBITO") {
    pagamentoDebito(ticket);
} else if (formaPagamento === "PIX") {
    pagamentoPix(ticket);
} else if (formaPagamento === "CREDITO") {
    pagamentoCredito(ticket);
} else {
    console.log("Forma de pagamento inválida.");
}
