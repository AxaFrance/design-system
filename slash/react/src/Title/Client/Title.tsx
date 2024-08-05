import { useCallback, useMemo, type ReactNode } from "react";
import { IconBg } from "../../client";
import { getComponentClassName } from "../../Form/core";
import { TitleSize } from "./constants";
import { TitleWithSubtitles } from "./TitleWithSubtitles";

type TitleProps = {
  children: ReactNode;
  firstSubtitle: string;
  className?: string;
  classModifier?: string;
  icon?: ReactNode;
  secondSubtitle?: string;
  size?: TitleSize;
};

export const Title = ({
  children: title,
  className,
  classModifier,
  firstSubtitle,
  icon,
  secondSubtitle,
  size = TitleSize.XL,
}: TitleProps) => {
  const componentClassName = useMemo(
    () =>
      getComponentClassName(
        className,
        classModifier ? `${classModifier} ${size}` : size,
        "af-title",
      ),
    [classModifier, className, size],
  );
  const TitleWithSubtitlesPart = useCallback(
    () => (
      <TitleWithSubtitles
        title={title}
        firstSubtitle={firstSubtitle}
        secondSubtitle={size === TitleSize.XL ? secondSubtitle : undefined}
      />
    ),
    [title, firstSubtitle, size, secondSubtitle],
  );

  return (
    <div className={componentClassName}>
      {icon && size === TitleSize.XL ? (
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
