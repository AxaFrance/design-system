import { describe, it, expect, vi } from "vitest";
import { getItems } from "../Pagination.helper";
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
