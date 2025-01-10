"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
function isFibonacci(n) {
    var a = 0;
    var b = 1;
    if (n === 0 || n === 1)
        return true;
    while (b < n) {
        var temp = b;
        b = a + b;
        a = temp;
    }
    return b === n;
}
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Digite um número para verificar se pertence à sequência de Fibonacci: ", function (input) {
    var numero = parseInt(input, 10);
    if (isNaN(numero)) {
        console.log("Por favor, digite um número válido.");
    }
    else {
        if (isFibonacci(numero)) {
            console.log("".concat(numero, " pertence \u00E0 sequ\u00EAncia de Fibonacci."));
        }
        else {
            console.log("".concat(numero, " n\u00E3o pertence \u00E0 sequ\u00EAncia de Fibonacci."));
        }
    }
    rl.close();
});
