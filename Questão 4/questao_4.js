"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
};
function calculatePercentage(invoicing) {
    var totalFaturamento = Object.values(invoicing).reduce(function (acc, valor) { return acc + valor; }, 0);
    for (var estado in invoicing) {
        var percentual = (invoicing[estado] / totalFaturamento) * 100;
        console.log("".concat(estado, ": ").concat(percentual.toFixed(2), "%"));
    }
}
calculatePercentage(faturamento);
