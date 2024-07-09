import React, {
  Children,
  ReactElement,
  isValidElement,
  useMemo,
  type ComponentProps,
} from "react";
import { Card } from "../client";

import "@axa-fr/design-system-css/dist/List/List.scss";

const defaultClassName = "af-list";

type TList = ComponentProps<typeof Card>;

export const List = ({ children, ...cardProps }: TList) => {
  const validChildren = useMemo<ReactElement[]>(
    () =>
      (
        Children.map(children, (child) => isValidElement(child) && child) ?? []
      ).filter(Boolean),
    [children],
  );

  return (
    <Card classModifier="list" {...cardProps}>
      <ul className={defaultClassName}>
        {Children.map(validChildren, (child, index) => (
          <React.Fragment key={child.key}>
            <li className={`${defaultClassName}__item`}>{child}</li>
            {index < validChildren.length - 1 && (
              <hr className={`${defaultClassName}__separator`} />
            )}
          </React.Fragment>
        ))}
      </ul>
    </Card>
  );
};
