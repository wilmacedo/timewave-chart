import { PriceChartData } from "@/components/charts/price-chart";
import { describe, expect, it } from "vitest";
import { findAvgData } from "./find-avg-data";

describe("Find average value case", () => {
  it("should calculate average data", () => {
    const data: PriceChartData[] = [
      { timestamp: 1708551865, prices1: 1, prices2: 3 },
      { timestamp: 1708566265, prices1: 2, prices2: 1 },
      { timestamp: 1708580665, prices1: 2, prices2: 1 },
      { timestamp: 1708595065, prices1: 1, prices2: 2 },
    ];

    const result = findAvgData(data);
    expect(result).toBe(1.625);
  });

  it("should handle empty data", () => {
    const result = findAvgData([]);
    expect(result).toBe(0);
  });
});
