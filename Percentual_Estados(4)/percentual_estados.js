/*
Dev: Carolina Baião
Desafio:
Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53
Escreva um programa onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
*/

const faturamento_estados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// calculando valor total mensal
let faturamento_total = 0;
for (let estado in faturamento_estados) {
    faturamento_total += faturamento_estados[estado];
}

// função que calcula percentual de um estado, recebendo como parametro
function calcula_percentual(valor_estado) {
    let percentual = (valor_estado / faturamento_total) * 100;
    return percentual;
}

for(let estado in faturamento_estados) {
    let percentual = calcula_percentual(faturamento_estados[estado]);
    console.log(`Percentual de ${estado}: ${parseFloat(percentual.toFixed(2))}%`);
}