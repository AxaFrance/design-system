import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ItemPaginationCommon, ELLIPSIS } from "../ItemPaginationCommon";

describe("ItemPaginationCommon", () => {
  it("renders an anchor by default", () => {
    render(<ItemPaginationCommon page={2} isCurrentPage={false} />);
    const link = screen.getByText("2");
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "/2");
    expect(link).not.toHaveAttribute("aria-current");
    expect(link).toHaveClass("af-item-pagination");
  });

  it("renders a span for ellipsis", () => {
    render(<ItemPaginationCommon page={ELLIPSIS} isCurrentPage={false} />);
    const span = screen.getByText(ELLIPSIS);
    expect(span.tagName).toBe("SPAN");
    expect(span).not.toHaveAttribute("href");
    expect(span).toHaveClass("af-item-pagination");
  });

  it("renders a link for current page", () => {
    render(<ItemPaginationCommon page={3} isCurrentPage />);
    const a = screen.getByText("3");
    expect(a.tagName).toBe("A");
    expect(a).toHaveClass("af-item-pagination af-item-pagination--current");
    expect(a).toHaveAttribute("aria-current", "page");
  });

  it("renders with custom 'as' prop", () => {
    render(<ItemPaginationCommon as="button" page={4} isCurrentPage={false} />);
    const button = screen.getByText("4");
    expect(button.tagName).toBe("BUTTON");
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveClass("af-item-pagination");
  });

  it("applies custom className", () => {
    render(
      <ItemPaginationCommon
        page={5}
        isCurrentPage={false}
        className="custom"
      />,
    );
    const link = screen.getByText("5");
    expect(link).toHaveClass("af-item-pagination");
    expect(link).toHaveClass("custom");
  });
});
