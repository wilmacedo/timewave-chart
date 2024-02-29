import { describe, expect, it } from "vitest";
import { numberToCurrency } from "./number-to-currency";

describe("Number to currency case", () => {
  it("should converts number to currency format", () => {
    const result = numberToCurrency(12345.67);
    expect(result).toBe("$12,345.67");
  });

  it("should converts valid amount string to currency format", () => {
    const result = numberToCurrency("12345.67");
    expect(result).toBe("$12,345.67");
  });

  it("should handle invalid input", () => {
    const result = numberToCurrency("invalidNumber");
    expect(result).toBe("N/A");
  });
});
