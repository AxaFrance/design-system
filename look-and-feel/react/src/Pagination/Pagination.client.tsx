import "@axa-fr/design-system-look-and-feel-css/dist/Pagination/Pagination.client.scss";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import { PaginationMobile } from "./PaginationMobile.client";
import { PaginationDesktop } from "./PaginationDesktop.client";
import { useIsSmallScreen } from "../utilities/hooks/useIsSmallScreen";

type PaginationProps = {
  numberPage: number;
  onChangePage: (page: number) => void;
  defaultPage?: number;
} & ComponentPropsWithoutRef<"div">;

const BREAKPOINT_SMALL = 1024;

export const Pagination = ({
  numberPage,
  onChangePage,
  defaultPage,
}: PaginationProps) => {
  const isMobile = useIsSmallScreen(BREAKPOINT_SMALL);
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
