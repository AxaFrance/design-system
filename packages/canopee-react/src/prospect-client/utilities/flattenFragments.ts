import { Children, Fragment, isValidElement, type ReactNode } from "react";

export const flattenFragments = (children: ReactNode): ReactNode[] =>
  Children.toArray(children).flatMap((child) =>
    isValidElement<{ children?: ReactNode }>(child) && child.type === Fragment
      ? flattenFragments(child.props.children)
      : [child],
  );
