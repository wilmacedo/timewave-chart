import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ChartTooltip } from "./chart-tooltip";

describe("Chart tooltip component case", () => {
  it("should render prices and date", () => {
    const payload: any = [
      {
        value: 100,
        payload: {
          token1:
            "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
          timestamp: 1708551865,
        },
      },
      {
        value: 200,
        payload: { token2: "untrn", timestamp: 1708551865 },
      },
    ];
    const { getByText } = render(<ChartTooltip active payload={payload} />);

    const dateElement = getByText("Feb 21, 2024");
    const token1NameElement = getByText("ATOM:");
    const token1ValueElement = getByText("$100.00");
    const token2NameElement = getByText("NTRN:");
    const token2ValueElement = getByText("$200.00");

    expect(dateElement).toBeDefined();
    expect(token1NameElement).toBeDefined();
    expect(token1ValueElement).toBeDefined();
    expect(token2NameElement).toBeDefined();
    expect(token2ValueElement).toBeDefined();
  });
});
