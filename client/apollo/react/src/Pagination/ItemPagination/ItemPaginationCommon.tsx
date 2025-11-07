import { type ElementType } from "react";
import { type PolymorphicComponent } from "../../utilities/types/PolymorphicComponent";
import { getClassName } from "../../utilities/getClassName";

export const ELLIPSIS = "...";

type ItemPaginationCustomProps = {
  page: number | typeof ELLIPSIS;
  isCurrentPage: boolean;
};

export type ItemPaginationCommonProps<T extends ElementType> =
  PolymorphicComponent<T, ItemPaginationCustomProps>;

export const ItemPaginationCommon = <T extends ElementType = "a">({
  as,
  page,
  isCurrentPage,
  className,
  ...props
}: ItemPaginationCommonProps<T>) => {
  const Component = page === ELLIPSIS || isCurrentPage ? "span" : as || "a";

  return (
    <Component
      href={Component === "a" ? `/${page}` : undefined}
      type={Component === "button" ? "button" : undefined}
      aria-current={Component === "a" && isCurrentPage ? "page" : undefined}
      className={getClassName({
        baseClassName: "af-item-pagination",
        className,
        modifiers: [isCurrentPage ? "current" : undefined],
      })}
      {...props}
    >
      {page}
    </Component>
  );
};
