export interface IInvoice {
  [key: string]: number;
}

const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function calculatePercentage(invoicing: IInvoice): void {
  const totalFaturamento = Object.values(invoicing).reduce(
    (acc, valor) => acc + valor,
    0
  );

  for (const estado in invoicing) {
    const percentual = (invoicing[estado] / totalFaturamento) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
  }
}

calculatePercentage(faturamento);
