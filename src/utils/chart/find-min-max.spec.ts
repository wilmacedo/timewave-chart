import { PriceChartData } from "@/components/charts/price-chart";
import { describe, expect, it } from "vitest";
import { findMinMaxData } from "./find-min-max-data";

describe("Find min max case", () => {
  it("should find min and max value of data", () => {
    const data: PriceChartData[] = [
      { timestamp: 1708551865, prices1: 1, prices2: 3 },
      { timestamp: 1708566265, prices1: 2, prices2: 1 },
      { timestamp: 1708580665, prices1: 2, prices2: 1 },
      { timestamp: 1708595065, prices1: 1, prices2: 2 },
    ];

    const result = findMinMaxData(data);
    expect(result).toEqual({ min: 1, max: 3 });
  });

  it("should handle empty data", () => {
    const result = findMinMaxData([]);
    expect(result).toEqual({ min: 0, max: 0 });
  });
});
