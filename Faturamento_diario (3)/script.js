/* 
Dev: Carolina Baião 
Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

const dados = [];

function valor_faturamento() {
    let day_menor, day_maior;

    let menor = Number.MAX_SAFE_INTEGER, maior = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < dados.length; i++) {
        if (dados[i].valor < menor && dados[i].valor != 0) { //dias com valor "0" foram desconsiderados
            menor = dados[i].valor;
            day_menor = dados[i].dia;
        }
        if (dados[i].valor > maior) {
            maior = dados[i].valor;
            day_maior = dados[i].dia;
        }
    }

    console.log(`Menor valor de faturamento: R$${parseFloat(menor.toFixed(2))}, no dia ${day_menor}.
    \nMaior valor de faturamento: R$${parseFloat(maior.toFixed(2))}, no dia ${day_maior}.`);
}

function calc_media() {
    let soma = 0, media, days = 0;

    for (let i = 0; i < dados.length; i++) {
        if (dados[i].valor != 0) {
            soma = soma + dados[i].valor;
            days++;
        }
    }
    media = soma / days;

    return media;
}

function acima_media() {
    const media = calc_media();
    
    let days = 0;

    for(let i = 0; i < dados.length; i++) {
        if(dados[i].valor > media) {
            days++;
        }
    }
    console.log(`Qtd. de dias em que faturamento diário > média mensal: ${days}`);
}

fetch("dados.json")
    .then((response) => {
        return response.json();
    })
    .then((jsonDados) => {
        dados.push(...jsonDados);
        valor_faturamento();
        acima_media();
    })
    .catch((error) => {
        console.error('Erro ao obter dados:', error);
    });

