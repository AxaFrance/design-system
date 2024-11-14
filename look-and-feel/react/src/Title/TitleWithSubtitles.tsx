import { type ReactNode } from "react";
import type { TitleLevel } from ".";

type TitleTextProps = {
  title: ReactNode;
  firstSubtitle?: string;
  secondSubtitle?: string;
  level?: TitleLevel;
};

export const TitleWithSubtitles = ({
  title,
  firstSubtitle,
  secondSubtitle,
  level = 1,
}: TitleTextProps) => {
  const HLevel = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <>
      <HLevel className="af-title__title">{title}</HLevel>
      {firstSubtitle && (
        <span className="af-title__subtitle">{firstSubtitle}</span>
      )}
      {secondSubtitle && (
        <span className="af-title__subtitle">{secondSubtitle}</span>
      )}
    </>
  );
};
