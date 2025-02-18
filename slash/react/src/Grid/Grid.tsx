import {
  type ComponentProps,
  type ElementType,
  type ForwardedRef,
  forwardRef,
  type PropsWithChildren,
} from "react";
import classNames from "classnames";

import "@axa-fr/design-system-slash-css/dist/Grid/Grid.scss";

export type GridProps<C extends ElementType> = {
  component?: C;
  className?: string;
} & ComponentProps<C>;

export const Grid = forwardRef(
  <C extends ElementType = "div">(
    {
      className,
      component: Component = "div",
      ...props
    }: PropsWithChildren<GridProps<C>>,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    return (
      <Component
        className={classNames("af-grid", className)}
        {...props}
        ref={ref}
      />
    );
  },
);

Grid.displayName = "Grid";
