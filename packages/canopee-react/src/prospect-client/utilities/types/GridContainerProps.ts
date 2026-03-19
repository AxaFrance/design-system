import type { ComponentProps, ElementType } from "react";

type Cols = `${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}`;

export type GridContainerProps<T extends ElementType = "div"> =
  ComponentProps<T> & {
    "data-cols-mobile"?: Cols;
    "data-cols-tablet"?: Cols;
    "data-cols-desktop-small"?: Cols;
    "data-cols-desktop-medium"?: Cols;
    "data-cols-desktop-large"?: Cols;
  };
