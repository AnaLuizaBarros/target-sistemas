"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
function invertString(str) {
    var stringInvertida = "";
    for (var i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Digite uma string para inverter: ", function (input) {
    var resultado = invertString(input);
    console.log("String original: ".concat(input));
    console.log("String invertida: ".concat(resultado));
    rl.close();
});
