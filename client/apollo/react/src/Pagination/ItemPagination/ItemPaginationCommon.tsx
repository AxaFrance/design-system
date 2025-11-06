import { type ElementType } from "react";
import { type PolymorphicComponent } from "../../utilities/types/PolymorphicComponent";
import { getClassName } from "../../utilities/getClassName";

export const ELLIPSIS = "...";

type ItemPaginationCustomProps = {
  as?: string | ElementType;
  page: number | typeof ELLIPSIS;
  isCurrentPage: boolean;
};

export type ItemPaginationCommonProps<T extends ElementType> =
  PolymorphicComponent<T, ItemPaginationCustomProps>;

const getComponent = ({
  as,
  page,
  isCurrentPage,
}: ItemPaginationCustomProps) =>
  page === ELLIPSIS || isCurrentPage ? "span" : as || "a";

export const ItemPaginationCommon = <T extends ElementType = "a">({
  as,
  page,
  isCurrentPage,
  className,
  ...props
}: ItemPaginationCommonProps<T>) => {
  const Component = getComponent({ as, page, isCurrentPage });

  return (
    <Component
      {...props}
      href={Component === "a" ? `/${page}` : undefined}
      type={Component === "button" ? "button" : undefined}
      aria-current={Component === "a" && isCurrentPage ? "page" : undefined}
      className={getClassName({
        baseClassName: "af-item-pagination",
        className,
        modifiers: [isCurrentPage ? "current" : undefined],
      })}
    >
      {page}
    </Component>
  );
};
