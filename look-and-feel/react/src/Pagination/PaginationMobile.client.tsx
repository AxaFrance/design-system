import "@axa-fr/design-system-look-and-feel-css/dist/Pagination/PaginationMobile.client.scss";
import { ComponentPropsWithoutRef } from "react";
import arrowBackIos from "@material-symbols/svg-400/outlined/arrow_back_ios.svg";
import arrowForwardIos from "@material-symbols/svg-400/outlined/arrow_forward_ios.svg";
import { Svg } from "../Svg";

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
        <Svg src={arrowBackIos} className="arrow" />
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
        <Svg src={arrowForwardIos} className="arrow" />
      </button>
    </div>
  );
};
