import * as readline from "readline";

function isFibonacci(n: number): boolean {
  let a = 0;
  let b = 1;

  if (n === 0 || n === 1) return true;

  while (b < n) {
    const temp = b;
    b = a + b;
    a = temp;
  }

  return b === n;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Digite um número para verificar se pertence à sequência de Fibonacci: ",
  (input: string) => {
    const numero = parseInt(input, 10);
    if (isNaN(numero)) {
      console.log("Por favor, digite um número válido.");
    } else {
      if (isFibonacci(numero)) {
        console.log(`${numero} pertence à sequência de Fibonacci.`);
      } else {
        console.log(`${numero} não pertence à sequência de Fibonacci.`);
      }
    }
    rl.close();
  }
);
