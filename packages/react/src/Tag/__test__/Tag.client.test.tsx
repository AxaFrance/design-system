import { render, screen } from "@testing-library/react";
import { Tag } from "../Tag.client";

describe("Tag", () => {
  it("should render children correctly", () => {
    const children = "Sample Tag";

    render(<Tag>{children}</Tag>);

    const tagSpan = screen.getByText(children);

    expect(tagSpan).toHaveClass("af-tag__label");
    expect(tagSpan.parentElement).toHaveClass("af-tag");
  });

  it("should have custom classModifier and mobile classModifier", () => {
    const children = "Sample Tag";
    const classModifier = "modifier";
    const isMobile = true;

    render(
      <Tag classModifier={classModifier} isMobile={isMobile}>
        {children}
      </Tag>,
    );

    expect(screen.getByText(children).parentElement).toHaveClass(
      `af-tag af-tag--${classModifier} af-tag--mobile`,
    );
  });
});
