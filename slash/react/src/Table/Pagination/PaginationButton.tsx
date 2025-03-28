import { ReactNode } from "react";

type PaginationButtonProps = {
  isVisible?: boolean;
  active?: boolean;
  children?: ReactNode;
  value: number;
  onChange: (e: { value: number }) => void;
  ariaLabel: string;
};

const PaginationButton = ({
  isVisible,
  active,
  children,
  value,
  onChange,
  ariaLabel,
}: PaginationButtonProps) => {
  if (!isVisible) {
    return null;
  }
  if (active) {
    return (
      <li className="af-pager__item">
        <a
          className="af-pager__item-link"
          href="/#"
          role="button"
          aria-label={ariaLabel}
          onClick={(e) => {
            e.preventDefault();
            onChange({ value });
          }}
        >
          {children}
        </a>
      </li>
    );
  }
  return (
    <li className="af-pager__item af-pager__item--disabled">
      <span className="af-pager__item-nolink">{children}</span>
    </li>
  );
};

export { PaginationButton };
