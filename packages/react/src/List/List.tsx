import {
  Children,
  ReactElement,
  ReactNode,
  isValidElement,
  useMemo,
} from "react";
import "@axa-fr/design-system-css/dist/List/List.scss";

const defaultClassName = "af-list";

type TList = {
  children: ReactNode;
};

export const List = ({ children }: TList) => {
  const validChildren = useMemo<ReactElement[]>(
    () =>
      (
        Children.map(children, (child) => isValidElement(child) && child) ?? []
      ).filter(Boolean),
    [children],
  );

  return (
    <ul className={defaultClassName}>
      {Children.map(validChildren, (child) => (
        <li className={`${defaultClassName}__item`}>{child}</li>
      ))}
    </ul>
  );
};
