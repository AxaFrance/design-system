import { render, screen } from "@testing-library/react";
import { Chip } from "../Chip.client";

describe("Chip", () => {
  it("should render children correctly", () => {
    const children = "Sample Chip";

    render(<Chip>{children}</Chip>);

    const chipSpan = screen.getByText(children);

    expect(chipSpan).toHaveClass("af-chip__label");
    expect(chipSpan.parentElement).toHaveClass("af-chip");
  });

  it("should have custom classModifier and mobile classModifier", () => {
    const children = "Sample Chip";
    const classModifier = "modifier";
    const isMobile = true;

    render(
      <Chip classModifier={classModifier} isMobile={isMobile}>
        {children}
      </Chip>,
    );

    expect(screen.getByText(children).parentElement).toHaveClass(
      `af-chip af-chip--${classModifier} af-chip--mobile`,
    );
  });
});
