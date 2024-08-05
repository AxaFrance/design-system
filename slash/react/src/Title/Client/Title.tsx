import { useCallback, useMemo, type ReactNode } from "react";
import { IconBg } from "../../client";
import { getComponentClassName } from "../../Form/core";
import { TitleWithSubtitles } from "./TitleWithSubtitles";

type TitleProps = {
  children: ReactNode;
  firstSubtitle: string;
  className?: string;
  classModifier?: string;
  icon?: ReactNode;
  secondSubtitle?: string;
};

export const Title = ({
  children: title,
  className,
  classModifier,
  firstSubtitle,
  icon,
  secondSubtitle,
}: TitleProps) => {
  const componentClassName = useMemo(
    () => getComponentClassName(className, classModifier, "af-title"),
    [classModifier, className],
  );
  const TitleWithSubtitlesPart = useCallback(
    () => (
      <TitleWithSubtitles
        title={title}
        firstSubtitle={firstSubtitle}
        secondSubtitle={secondSubtitle}
      />
    ),
    [title, firstSubtitle, secondSubtitle],
  );

  return (
    <div className={componentClassName}>
      {icon ? (
        <>
          <IconBg className="af-title__icon af-icon-bg">{icon}</IconBg>
          <div className="af-title__text-container">
            <TitleWithSubtitlesPart />
          </div>
        </>
      ) : (
        <TitleWithSubtitlesPart />
      )}
    </div>
  );
};
