let InputValorDebito=require('readline-sync');
const ValorDebito=InputValorDebito.question("Qual o valor da sua divida: ");

let InputFormaPagamento=require('readline-sync')
const FormaPagamento=InputFormaPagamento.question("Qual a sua forma de Pagamento? [Debito] [Pix] [Credito] [Dinheiro]").toUpperCase();

let desconto = 0;

if(FormaPagamento==="DEBITO"){
    desconto = 0.10; 
    console.log("Você escolheu a forma de pagamento Débito, seu desconto é de 10%");

    const valorFinal=ValorDebito *(1-desconto);
    console.log('Valor original: R$'+ValorDebito);
    console.log('Valor com desconto: R$'+valorFinal.toFixed(2));
}

else if (formaPagamento === "PIX") {
    desconto = 0.15; 
    console.log("Você escolheu a forma de pagamento Pix, seu desconto é de 15%");
    
    const valorFinal = valorDebito * (1 - desconto);
    console.log(`Valor original: R$ ${valorDebito.toFixed(2)}`);
    console.log(`Valor com desconto: R$ ${valorFinal.toFixed(2)}`);
} 

else if (formaPagamento === "CREDITO") {
    desconto = 0.25; 
    console.log("Você escolheu a forma de pagamento Crédito, seu desconto é de 25%");
    
    const valorFinal = valorDebito * (1 - desconto);
    console.log(`Valor original: R$ ${valorDebito.toFixed(2)}`);
    console.log(`Valor com desconto: R$ ${valorFinal.toFixed(2)}`);
} 

else if (formaPagamento === "DINHEIRO") {
    desconto = 0.30; 
    console.log("Você escolheu a forma de pagamento Dinheiro, seu desconto é de 30%");
    
    const valorFinal = valorDebito * (1 - desconto);
    console.log(`Valor original: R$ ${valorDebito.toFixed(2)}`);
    console.log(`Valor com desconto: R$ ${valorFinal.toFixed(2)}`);
} 

else {
    console.log("Forma de pagamento inválida.");
}







