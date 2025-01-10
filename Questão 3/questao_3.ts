import * as fs from "fs";

export interface IInvoicing {
  dia: number;
  valor: number;
}

function calculateStatistics(invoicing: IInvoicing[]) {
  let menorValor = Infinity;
  let maiorValor = -Infinity;
  let soma = 0;
  let diasComFaturamento = 0;
  let diasAcimaDaMedia = 0;

  for (const entry of invoicing) {
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

  const mediaMensal = soma / diasComFaturamento;

  for (const entry of invoicing) {
    if (entry.valor > mediaMensal) {
      diasAcimaDaMedia++;
    }
  }

  return {
    menorValor,
    maiorValor,
    mediaMensal: mediaMensal.toFixed(2),
    diasAcimaDaMedia,
  };
}

fs.readFile("data/dados.json", "utf8", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo JSON:", err);
    return;
  }

  try {
    const faturamentoDiario = JSON.parse(data);
    const estatisticas = calculateStatistics(faturamentoDiario);

    console.log("Menor valor de faturamento:", estatisticas.menorValor);
    console.log("Maior valor de faturamento:", estatisticas.maiorValor);
    console.log(
      "Dias com faturamento acima da média:",
      estatisticas.diasAcimaDaMedia
    );
  } catch (parseErr) {
    console.error("Erro ao interpretar o JSON:", parseErr);
  }
});
