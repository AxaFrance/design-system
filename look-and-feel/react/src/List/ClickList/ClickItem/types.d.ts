import type { ComponentProps, ReactNode } from "react";

export type TClickItem = {
  classModifier?: string;
  isDisabled?: boolean;
} & Omit<ComponentProps<"button">, "disabled"> & {
    parentClickComponent?: (
      parentClickComponentProps: TParentClickComponentProps,
    ) => ReactNode;
    children?: ReactNode;
    icon?: ReactNode;
    actionIcon?: ReactNode;
  } & Record<string, unknown>;

export type TParentClickComponentProps = { children: ReactNode } & Record<
  string,
  unknown
>;
