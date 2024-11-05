import { type ReactNode } from "react";

type TitleTextProps = {
  title: ReactNode;
  firstSubtitle?: string;
  secondSubtitle?: string;
};

export const TitleWithSubtitles = ({
  title,
  firstSubtitle,
  secondSubtitle,
}: TitleTextProps) => (
  <>
    <p className="af-title__title">{title}</p>
    {firstSubtitle && (
      <span className="af-title__subtitle">{firstSubtitle}</span>
    )}
    {secondSubtitle && (
      <span className="af-title__subtitle">{secondSubtitle}</span>
    )}
  </>
);
