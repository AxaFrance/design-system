import type { ReactNode } from "react";
import { HeadingLevel } from "./types";

type HeadingTextProps = {
  title: ReactNode;
  firstSubtitle?: ReactNode;
  secondSubtitle?: ReactNode;
  titleComponent?: `h${HeadingLevel}`;
};

export const HeadingWithSubheadings = ({
  title,
  firstSubtitle,
  secondSubtitle,
  titleComponent: TitleComponent = "h1",
}: HeadingTextProps) => {
  return (
    <>
      <TitleComponent className="af-heading__title">{title}</TitleComponent>
      {firstSubtitle && (
        <span className="af-heading__subtitle">{firstSubtitle}</span>
      )}
      {TitleComponent === "h1" && secondSubtitle && (
        <span className="af-heading__subtitle">{secondSubtitle}</span>
      )}
    </>
  );
};
