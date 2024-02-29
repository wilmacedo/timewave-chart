import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ChartTick } from "./chart-tick";

describe("Chart tick component case", () => {
  it("should render number type", () => {
    const { getByText } = render(
      <ChartTick type="number" x={10} y={20} payload={{ value: 50 }} />
    );
    const textElement = getByText("50");

    expect(textElement).toBeDefined();
  });

  it("should render date type", () => {
    const { getByText } = render(
      <ChartTick type="date" x={10} y={20} payload={{ value: 1646227200000 }} />
    );
    const textElement = getByText("11");

    expect(textElement).toBeDefined();
  });

  it("should render currency type", () => {
    const { getByText } = render(
      <ChartTick type="price" x={10} y={20} payload={{ value: 100 }} />
    );
    const textElement = getByText("$100.00");

    expect(textElement).toBeDefined();
  });
});
