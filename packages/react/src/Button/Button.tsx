import { PropsWithChildren } from "react";
type ButtonProps = { type: "submit" | "reset" | "button" };

const Button = ({
  children,
  type = "button",
}: PropsWithChildren<ButtonProps>) => {
  return <button type={type}>{children}</button>;
};

export default Button;
