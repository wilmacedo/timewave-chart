import { PriceChartData } from "@/components/charts/price-chart";

export function findMinMaxData(data: PriceChartData[]) {
  let overallMin = Number.MAX_VALUE;
  let overallMax = Number.MIN_VALUE;

  data.forEach((item) => {
    const prices1 = Number(item.prices1);
    const prices2 = Number(item.prices2);

    if (prices1 < overallMin) overallMin = prices1;
    if (prices1 > overallMax) overallMax = prices1;

    if (prices2 < overallMin) overallMin = prices2;
    if (prices2 > overallMax) overallMax = prices2;
  });

  return { min: overallMin, max: overallMax };
}
