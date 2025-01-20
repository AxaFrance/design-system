import { render, screen } from "@testing-library/react";
import { IconBg } from "..";

describe("IconBg", () => {
  it("should render children", () => {
    render(<IconBg>An IconBg</IconBg>);

    const iconBg = screen.getByText("An IconBg");
    expect(iconBg).toHaveClass("af-icon-bg");
  });

  it("should have custom class", () => {
    render(<IconBg className="custom-class">An IconBg</IconBg>);

    expect(screen.getByText("An IconBg")).toHaveClass("custom-class");
  });

  it("should have custom class with modifier", () => {
    render(
      <IconBg className="custom-class" classModifier="modifier">
        An IconBg
      </IconBg>,
    );

    expect(screen.getByText("An IconBg")).toHaveClass(
      "af-icon-bg custom-class af-icon-bg--modifier",
    );
  });

  it("should be disabled", () => {
    render(
      <IconBg className="custom-class" isDisabled>
        An IconBg
      </IconBg>,
    );

    expect(screen.getByText("An IconBg")).toHaveClass(
      "af-icon-bg custom-class af-icon-bg--disabled",
    );
  });
});
