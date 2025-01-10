import "@axa-fr/design-system-look-and-feel-css/dist/Pagination/Pagination.scss";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import { BREAKPOINT, useIsSmallScreen } from "../utilities";
import { PaginationDesktop } from "./PaginationDesktop";
import { PaginationMobile } from "./PaginationMobile";

type PaginationProps = {
  numberPage: number;
  onChangePage: (page: number) => void;
  defaultPage?: number;
} & ComponentPropsWithoutRef<"div">;

export const Pagination = ({
  numberPage,
  onChangePage,
  defaultPage,
}: PaginationProps) => {
  const isMobile = useIsSmallScreen(BREAKPOINT.MD);
  const [currentPage, setCurrentPage] = useState<number>(defaultPage || 1);

  useEffect(() => {
    onChangePage(currentPage);
  }, [currentPage, onChangePage]);

  return (
    <div className="af-container-pagination">
      {isMobile ? (
        <PaginationMobile
          numberPage={numberPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <PaginationDesktop
          numberPage={numberPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};
