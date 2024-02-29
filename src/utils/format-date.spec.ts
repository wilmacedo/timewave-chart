import { describe, expect, it } from "vitest";
import { formatDate } from "./format-date";

describe("Format date case", () => {
  it("should formats timestamp to date in `Month day, year` format", () => {
    const result = formatDate(1709156665);
    expect(result).toBe("Feb 28, 2024");
  });
});
