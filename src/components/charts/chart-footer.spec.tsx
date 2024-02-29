import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ChartFooter } from "./chart-footer";

describe("Chart footer component case", () => {
  it("should render with input", () => {
    const { container } = render(<ChartFooter range="7D" />);
    const inputElement = container.querySelector("input");

    expect(inputElement).toBeDefined();
  });

  it("should render with correct range value", () => {
    const { getAllByText } = render(<ChartFooter range="7D" />);
    const rangeElement = getAllByText("d");

    expect(rangeElement).toBeDefined();
  });
});
