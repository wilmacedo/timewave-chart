import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Box } from "./box";

describe("Box component case", () => {
  it("should render children", () => {
    const { getByText } = render(<Box>Child Component</Box>);

    const element = getByText("Child Component");
    expect(element).toBeDefined();
  });
});
