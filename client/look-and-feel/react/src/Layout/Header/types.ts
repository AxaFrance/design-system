import type {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from "react";

type HeaderItemProps = {
  id: number;
  Wrapper: ElementType;
  props: ComponentProps<ElementType>;
};

type HeaderProps = {
  defaultActiveLink?: number;
  links?: HeaderItemProps[];
  previousLink?: ReactNode;
  rightItems?: HeaderItemProps[];
} & ComponentPropsWithoutRef<"header">;

export type { HeaderProps, HeaderItemProps };
