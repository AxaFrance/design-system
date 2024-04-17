import "@axa-fr/design-system-css/dist/Pagination/PaginationMobile.client.scss";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import { ComponentPropsWithoutRef } from "react";

type PropsPaginationMobile = {
  numberPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
} & ComponentPropsWithoutRef<"div">;

export const PaginationMobile = ({
  numberPage,
  currentPage,
  setCurrentPage,
}: PropsPaginationMobile) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === numberPage;
  return (
    <div className="af-pagination-mobile">
      <button
        type="button"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={isFirstPage}
        aria-label="Page précédente"
      >
        <ArrowBackIos className="arrow" />
      </button>
      <span>
        {currentPage} sur {numberPage}
      </span>
      <button
        type="button"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={isLastPage}
        aria-label="Page suivant"
      >
        <ArrowForwardIos className="arrow" />
      </button>
    </div>
  );
};
