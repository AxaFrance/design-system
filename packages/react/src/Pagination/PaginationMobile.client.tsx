import "@axa-fr/design-system-css/dist/Pagination/PaginationMobile.client.scss";
import { ComponentPropsWithoutRef } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
        <ArrowBackIosIcon className="arrow" />
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
        <ArrowForwardIosIcon className="arrow" />
      </button>
    </div>
  );
};
