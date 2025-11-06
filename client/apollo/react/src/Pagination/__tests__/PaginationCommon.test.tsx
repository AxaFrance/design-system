import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { PaginationCommon, getItems } from "../PaginationCommon";
import { ItemPagination } from "../ItemPagination/ItemPaginationApollo";
import { ELLIPSIS } from "../ItemPagination/ItemPaginationCommon";

describe("getItems", () => {
  it("should return all items when numberPages <= 7", () => {
    const result = getItems({
      numberPages: 5,
      currentPage: 3,
      onChangePage: vi.fn(),
    });

    expect(result).toHaveLength(5);
    expect(result[2].isCurrentPage).toBe(true);
  });

  it("should add ellipsis at end when currentPage < 6", () => {
    const result = getItems({
      numberPages: 10,
      currentPage: 3,
      onChangePage: vi.fn(),
    });

    expect(result).toHaveLength(8);
    expect(result[6].page).toBe(ELLIPSIS);
    expect(result[7].page).toBe(10);
  });

  it("should add ellipsis at start when currentPage is near end", () => {
    const result = getItems({
      numberPages: 10,
      currentPage: 8,
      onChangePage: vi.fn(),
    });

    expect(result[0].page).toBe(1);
    expect(result[1].page).toBe(ELLIPSIS);
  });

  it("should add ellipsis at both ends for middle pages", () => {
    const result = getItems({
      numberPages: 15,
      currentPage: 8,
      onChangePage: vi.fn(),
    });

    expect(result[0].page).toBe(1);
    expect(result[1].page).toBe(ELLIPSIS);
    expect(result[5].page).toBe(ELLIPSIS);
    expect(result[6].page).toBe(15);
  });
});

describe("PaginationCommon", () => {
  const defaultProps = {
    numberPages: 5,
    currentPage: 3,
    onChangePage: vi.fn(),
    ItemPaginationComponent: ItemPagination,
  };

  it("should render pagination with correct aria-label", () => {
    render(<PaginationCommon {...defaultProps} />);
    expect(screen.getByRole("navigation")).toHaveAttribute(
      "aria-label",
      "Pagination",
    );
  });

  it("should render custom aria-label", () => {
    render(
      <PaginationCommon {...defaultProps} aria-label="Custom pagination" />,
    );
    expect(screen.getByRole("navigation")).toHaveAttribute(
      "aria-label",
      "Custom pagination",
    );
  });

  it("should display current page counter", () => {
    render(<PaginationCommon {...defaultProps} />);
    expect(screen.getByText("Page 3 sur 5")).toBeInTheDocument();
  });

  it("should disable previous button on first page", () => {
    render(<PaginationCommon {...defaultProps} currentPage={1} />);
    expect(screen.getByLabelText("Page précédente")).toBeDisabled();
  });

  it("should disable next button on last page", () => {
    render(<PaginationCommon {...defaultProps} currentPage={5} />);
    expect(screen.getByLabelText("Page suivante")).toBeDisabled();
  });

  it("should call onChangePage when clicking previous button", async () => {
    const user = userEvent.setup();
    const onChangePage = vi.fn();
    render(
      <PaginationCommon
        {...defaultProps}
        currentPage={3}
        onChangePage={onChangePage}
      />,
    );

    await user.click(screen.getByLabelText("Page précédente"));
    expect(onChangePage).toHaveBeenCalledWith(2);
  });

  it("should call onChangePage when clicking next button", async () => {
    const user = userEvent.setup();
    const onChangePage = vi.fn();
    render(
      <PaginationCommon
        {...defaultProps}
        currentPage={3}
        onChangePage={onChangePage}
      />,
    );

    await user.click(screen.getByLabelText("Page suivante"));
    expect(onChangePage).toHaveBeenCalledWith(4);
  });

  it("should apply custom className", () => {
    render(<PaginationCommon {...defaultProps} className="custom-class" />);
    expect(screen.getByRole("navigation")).toHaveClass(
      "af-pagination",
      "custom-class",
    );
  });

  it("should apply hide-prev-next modifier when hidePrevNext is true", () => {
    render(<PaginationCommon {...defaultProps} hidePrevNext />);
    expect(screen.getByRole("navigation")).toHaveClass(
      "af-pagination--hide-prev-next",
    );
  });

  it("should render all page items", () => {
    render(<PaginationCommon {...defaultProps} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(8);
  });
});
