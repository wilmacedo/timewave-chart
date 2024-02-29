import { describe, expect, it, vi } from "vitest";
import { buildApiInput, getChartData } from "./get-chart-data";

describe("buildApiInput", () => {
  it("should build API input correctly", () => {
    const props = {
      range: "1D",
      tokenPair: ["token1", "token2"],
      chainId: "123",
    };
    const result = buildApiInput(props);
    const expected =
      "input=%7B%22json%22%3A%7B%22tokens%22%3A%5B%22token1%22%2C%22token2%22%5D%2C%22chainId%22%3A%22123%22%2C%22dateRange%22%3A%221D%22%7D%7D";
    expect(result).toBe(expected);
  });
});

describe("Get chart data case", () => {
  it("should fetch data", async () => {
    const props = {
      range: "1D",
      tokenPair: ["token1", "token2"],
      chainId: "123",
    };
    const mockResponse = {
      result: {
        data: {
          json: {
            token1: {
              series: [{ time: 1, value: 10 }],
              priceChangePercentage: 0,
              minValue: 0,
              maxValue: 0,
            },
            token2: {
              series: [{ time: 1, value: 20 }],
              priceChangePercentage: 0,
              minValue: 0,
              maxValue: 0,
            },
          },
        },
      },
    };

    vi.spyOn(global, "fetch").mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce(mockResponse),
    } as any);

    const result = await getChartData(props);
    expect(result).toEqual(mockResponse);
  });
});
