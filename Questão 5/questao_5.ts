import * as readline from "readline";

function invertString(str: string): string {
  let stringInvertida = "";

  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i];
  }

  return stringInvertida;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite uma string para inverter: ", (input: string) => {
  const resultado = invertString(input);
  console.log(`String original: ${input}`);
  console.log(`String invertida: ${resultado}`);
  rl.close();
});
