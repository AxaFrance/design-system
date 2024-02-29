import { cloneElement, isValidElement, ReactNode } from "react";

type Props = {
  children: ReactNode;
  idControl: string;
};

const ToggleButton = ({ children, idControl }: Props) =>
  isValidElement(children) &&
  cloneElement(children, {
    ...children.props,
    "aria-controls": idControl,
    "aria-haspopup": true,
  });

export { ToggleButton };
