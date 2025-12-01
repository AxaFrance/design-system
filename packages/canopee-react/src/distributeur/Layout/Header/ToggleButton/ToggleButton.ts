import {
  cloneElement,
  type HTMLAttributes,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";

type Props = {
  children: ReactNode;
  idControl: string;
};

const ToggleButton = ({ children, idControl }: Props) =>
  isValidElement(children) &&
  cloneElement<HTMLAttributes<HTMLElement>>(
    children as ReactElement<HTMLAttributes<HTMLElement>>,
    {
      ...(children as ReactElement<HTMLAttributes<HTMLElement>>).props,
      "aria-controls": idControl,
      "aria-haspopup": true,
    },
  );

export { ToggleButton };
