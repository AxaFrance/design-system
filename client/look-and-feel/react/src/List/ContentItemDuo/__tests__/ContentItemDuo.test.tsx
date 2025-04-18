import { render, screen } from "@testing-library/react";
import { ContentItemDuo } from "../ContentItemDuo";

describe("ContentItemDuo", () => {
  const label = "Sample Label";
  const value = "Sample Value";

  it("should render label and value correctly", () => {
    render(<ContentItemDuo label={label} value={value} />);

    expect(screen.getByText(label).tagName).toBe("P");
    expect(screen.getByText(value).tagName).toBe("P");
  });

  it("should render vertical layout when isVertical prop is true", () => {
    render(<ContentItemDuo label={label} value={value} isVertical />);

    expect(screen.getByText(label).parentElement).toHaveClass(
      "af-content-item-duo--vertical",
    );
  });

  it("should render ReactNode value correctly", () => {
    const reactNodeValue = <>Sample Value</>;

    render(<ContentItemDuo label={label} value={reactNodeValue} />);

    expect(screen.getByText("Sample Value").tagName).toBe("DIV");
  });
});
