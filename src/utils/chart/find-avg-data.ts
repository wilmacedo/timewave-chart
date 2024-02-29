import { PriceChartData } from "@/components/charts/price-chart";

export function findAvgData(data: PriceChartData[]) {
  let totalPrices = 0;
  let totalCount = 0;

  data.forEach((item) => {
    totalPrices += Number(item.prices1) + Number(item.prices2);
    totalCount += 2;
  });

  return totalPrices / totalCount;
}
