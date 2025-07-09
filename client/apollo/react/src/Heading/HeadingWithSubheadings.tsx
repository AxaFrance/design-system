import type { ReactNode } from "react";
import type { HeadingLevel } from "./types";

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
}: HeadingTextProps) => (
  <hgroup className="af-heading__title-container">
    <TitleComponent className="af-heading__title">{title}</TitleComponent>
    {firstSubtitle ? (
      <p className="af-heading__subtitle">{firstSubtitle}</p>
    ) : null}
    {TitleComponent === "h1" && secondSubtitle ? (
      <p className="af-heading__subtitle">{secondSubtitle}</p>
    ) : null}
  </hgroup>
);
