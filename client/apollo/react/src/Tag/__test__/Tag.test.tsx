import { render, screen } from "@testing-library/react";
import { Tag, TagVariants } from "../TagCommon";

describe("Tag", () => {
  it("should render children correctly", () => {
    const children = "Sample Tag";

    render(<Tag>{children}</Tag>);

    const tagSpan = screen.getByText(children);

    expect(tagSpan).toHaveClass("af-tag__label");
    expect(tagSpan.parentElement).toHaveClass("af-tag");
  });

  it("should have specified variant", () => {
    const children = "Sample Tag";
    const variant: TagVariants = "warning";

    render(<Tag variant={variant}>{children}</Tag>);

    expect(screen.getByText(children).parentElement).toHaveClass(
      `af-tag af-tag--${variant}`,
    );
  });
});
