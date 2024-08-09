import "@axa-fr/design-system-slash-css/dist/Pagination/Pagination.client.scss";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import { BREAKPOINT } from "../utilities";
import { useIsSmallScreen } from "../utilities/hooks/useIsSmallScreen";
import { PaginationDesktop } from "./PaginationDesktop.client";
import { PaginationMobile } from "./PaginationMobile.client";

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
