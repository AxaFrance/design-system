import { ReactNode } from "react";
import { Body } from "./Body";
import { Header } from "./Header";

export type CollapseProps = {
  id: string;
  title: ReactNode;
  children?: React.ReactNode;
  open?: boolean;
  name?: string;
  onToggle?: React.DetailsHTMLAttributes<HTMLDetailsElement>["onToggle"];
};

export const CollapseCard = ({
  children,
  name,
  title,
  id,
  open,
  onToggle,
}: CollapseProps) => {
  const headerId = id;

  return (
    <details
      open={open}
      name={name}
      className="af-accordion__details"
      onToggle={onToggle}
    >
      <Header id={headerId}>{title}</Header>
      <Body>{children}</Body>
    </details>
  );
};
