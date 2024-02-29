import { PriceChartData } from "@/components/charts/price-chart";
import { ChartData } from "@/services/get-chart-data";

export function formatPriceData(data: ChartData) {
  const tokens = Object.keys(data);
  const series = data[tokens[0]].series;
  const result = [];

  for (let i = 0; i < series.length; i++) {
    const entry: PriceChartData = { timestamp: series[i].time };

    tokens.forEach((key, index) => {
      entry[`prices${index + 1}`] = data[key].series[i].value;
      entry[`token${index + 1}`] = key;
    });

    result.push(entry);
  }

  return result;
}
