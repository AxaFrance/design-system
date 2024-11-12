import type { ComponentProps, ReactNode } from "react";

export type TClickItem = {
  classModifier?: string;
  isDisabled?: boolean;
} & Omit<ComponentProps<"button">, "disabled"> &
  ComponentProps<"a"> & {
    /**
     * @deprecated Use children prop instead
     */
    label?: ReactNode;
    parentClickComponent?: (
      parentClickComponentProps: TParentClickComponentProps,
    ) => ReactNode;
    children?: ReactNode;
    icon?: ReactNode;
  } & Record<string, unknown>;

export type TParentClickComponentProps = { children: ReactNode } & Record<
  string,
  unknown
>;
