import { render, screen } from "@testing-library/react";
import { CardCommon } from "../CardCommon";

describe("Card", () => {
  it("should render children", () => {
    render(<CardCommon>A card</CardCommon>);

    const card = screen.getByText("A card");
    expect(card).toHaveClass("af-card");
  });

  it("should have custom class", () => {
    render(<CardCommon className="custom-class">A card</CardCommon>);

    expect(screen.getByText("A card")).toHaveClass("custom-class");
  });

  it("should be a fieldset", () => {
    render(<CardCommon as="fieldset">A card</CardCommon>);

    expect(screen.getByText("A card").tagName).toBe("FIELDSET");
  });
});
