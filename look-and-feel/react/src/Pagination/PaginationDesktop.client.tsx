import "@axa-fr/design-system-look-and-feel-css/dist/Pagination/PaginationDesktop.client.scss";
import { ComponentPropsWithoutRef } from "react";

type PropsPaginationDesktop = {
  numberPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
} & ComponentPropsWithoutRef<"div">;

const SEVEN_PAGE = 7;
const LAST_FOUR_PAGE = 4;
const FIVE_PAGE = 5;

export const PaginationDesktop = ({
  numberPage,
  currentPage,
  setCurrentPage,
}: PropsPaginationDesktop) => {
  const pages = Array.from({ length: numberPage }, (_, index) => index + 1);
  let filteredNumbers = [...pages];
  let classNamePagination = "";

  if (numberPage > SEVEN_PAGE) {
    if (currentPage < FIVE_PAGE) {
      classNamePagination = "first";
      filteredNumbers = [...pages.slice(0, FIVE_PAGE), pages[pages.length - 1]];
    } else if (currentPage > numberPage - LAST_FOUR_PAGE) {
      classNamePagination = "last";
      filteredNumbers = [pages[0], ...pages.slice(-FIVE_PAGE)];
    } else {
      classNamePagination = "between";
      filteredNumbers = [
        pages[0],
        currentPage - 1,
        currentPage,
        currentPage + 1,
        pages[pages.length - 1],
      ];
    }
  }

  return (
    <div className="af-pagination-desktop">
      <ul className={classNamePagination}>
        {filteredNumbers.map((page) => (
          <li
            aria-label={`page-${page}`}
            aria-current={currentPage === page ? "page" : undefined}
            key={`page-${page}`}
          >
            <button type="button" onClick={() => setCurrentPage(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
