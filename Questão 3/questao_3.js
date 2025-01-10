"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function calculateStatistics(invoicing) {
    var menorValor = Infinity;
    var maiorValor = -Infinity;
    var soma = 0;
    var diasComFaturamento = 0;
    var diasAcimaDaMedia = 0;
    for (var _i = 0, invoicing_1 = invoicing; _i < invoicing_1.length; _i++) {
        var entry = invoicing_1[_i];
        if (entry.valor > 0) {
            diasComFaturamento++;
            soma += entry.valor;
            menorValor = Math.min(menorValor, entry.valor);
            maiorValor = Math.max(maiorValor, entry.valor);
        }
    }
    if (diasComFaturamento === 0) {
        return {
            menorValor: 0,
            maiorValor: 0,
            mediaMensal: "0.00",
            diasAcimaDaMedia: 0,
        };
    }
    var mediaMensal = soma / diasComFaturamento;
    for (var _a = 0, invoicing_2 = invoicing; _a < invoicing_2.length; _a++) {
        var entry = invoicing_2[_a];
        if (entry.valor > mediaMensal) {
            diasAcimaDaMedia++;
        }
    }
    return {
        menorValor: menorValor,
        maiorValor: maiorValor,
        mediaMensal: mediaMensal.toFixed(2),
        diasAcimaDaMedia: diasAcimaDaMedia,
    };
}
fs.readFile("data/dados.json", "utf8", function (err, data) {
    if (err) {
        console.error("Erro ao ler o arquivo JSON:", err);
        return;
    }
    try {
        var faturamentoDiario = JSON.parse(data);
        var estatisticas = calculateStatistics(faturamentoDiario);
        console.log("Menor valor de faturamento:", estatisticas.menorValor);
        console.log("Maior valor de faturamento:", estatisticas.maiorValor);
        console.log("Dias com faturamento acima da média:", estatisticas.diasAcimaDaMedia);
    }
    catch (parseErr) {
        console.error("Erro ao interpretar o JSON:", parseErr);
    }
});
