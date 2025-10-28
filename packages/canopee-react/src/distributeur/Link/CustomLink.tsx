import { ReactNode } from "react";
import { linkClassName } from "./linkClassName";

type CustomLinkProps = {
  render: (props: { className: string }) => ReactNode;
};

const CustomLink = (props: CustomLinkProps) => {
  const { render } = props;

  return render({ className: linkClassName, ...props });
};

export { CustomLink, type CustomLinkProps };
