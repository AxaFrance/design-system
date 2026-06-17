import type { ComponentType } from "react";
import type { PaginationProps } from "../Pagination/PaginationCommon";
import type { MultiMessageItem } from "./types";

const baseClassName = "af-multi-message";

type MultiMessageFooterProps = {
  action: MultiMessageItem["action"];
  currentIndex: number;
  hasMultiple: boolean;
  nextButtonProps: PaginationProps["nextButtonProps"];
  nextLabel: string;
  onChangePage: (page: number) => void;
  PaginationComponent: ComponentType<PaginationProps>;
  prevButtonProps: PaginationProps["prevButtonProps"];
  prevLabel: string;
  total: number;
};

export const MultiMessageFooter = ({
  action,
  currentIndex,
  hasMultiple,
  nextButtonProps,
  nextLabel,
  onChangePage,
  PaginationComponent,
  prevButtonProps,
  prevLabel,
  total,
}: MultiMessageFooterProps) => {
  if (!hasMultiple && !action) return null;

  return (
    <div className={`${baseClassName}__footer`}>
      {hasMultiple ? (
        <PaginationComponent
          className={`${baseClassName}__pagination`}
          numberPages={total}
          currentPage={currentIndex + 1}
          onChangePage={(page) => onChangePage(page - 1)}
          asItem="button"
          aria-label="Pagination des messages"
          prevButtonProps={{
            "aria-label": prevLabel,
            ...prevButtonProps,
          }}
          nextButtonProps={{
            "aria-label": nextLabel,
            ...nextButtonProps,
          }}
        />
      ) : null}
      {action ? (
        <div className={`${baseClassName}__action`}>{action}</div>
      ) : null}
    </div>
  );
};
