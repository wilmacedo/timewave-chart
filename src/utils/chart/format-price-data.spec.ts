import { PriceChartData } from "@/components/charts/price-chart";
import { ChartData } from "@/services/get-chart-data";
import { describe, expect, it } from "vitest";
import { formatPriceData } from "./format-price-data";

describe("Format price case", () => {
  it("should format original data to chart data schema", () => {
    const data: ChartData = {
      token1: {
        series: [
          { time: 1, value: 10 },
          { time: 2, value: 20 },
        ],
        priceChangePercentage: 0,
        minValue: 0,
        maxValue: 0,
      },
      token2: {
        series: [
          { time: 1, value: 15 },
          { time: 2, value: 25 },
        ],
        priceChangePercentage: 0,
        minValue: 0,
        maxValue: 0,
      },
    };
    const result = formatPriceData(data);
    const expected: PriceChartData[] = [
      {
        timestamp: 1,
        prices1: 10,
        token1: "token1",
        prices2: 15,
        token2: "token2",
      },
      {
        timestamp: 2,
        prices1: 20,
        token1: "token1",
        prices2: 25,
        token2: "token2",
      },
    ];
    expect(result).toEqual(expected);
  });
});
