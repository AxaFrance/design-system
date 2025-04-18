import {
  useCallback,
  useMemo,
  type ComponentProps,
  type ReactNode,
} from "react";
import { IconBg } from "..";
import { getComponentClassName } from "../utilities";
import { TitleLevel, TitleSize } from "./constants";
import { TitleWithSubtitles } from "./TitleWithSubtitles";

type TitleProps = {
  children: ReactNode;
  firstSubtitle?: string;
  secondSubtitle?: string;
  icon?: ReactNode;
  className?: string;
  classModifier?: string;
  size?: TitleSize;
  level?: TitleLevel;
};

/**
 * @deprecated Use Heading instead
 */
export const Title = ({
  children: title,
  className,
  classModifier,
  firstSubtitle,
  icon,
  secondSubtitle,
  size = TitleSize.XL,
  level = size === TitleSize.L ? 2 : 1,
}: TitleProps) => {
  const componentClassName = useMemo(
    () =>
      getComponentClassName(
        "af-title",
        className,
        classModifier ? `${classModifier} ${size}` : size,
      ),
    [classModifier, className, size],
  );
  const TitleWithSubtitlesPart = useCallback(
    ({
      ...args
    }: Omit<
      ComponentProps<typeof TitleWithSubtitles>,
      "title" | "firstSubtitle"
    >) => (
      <TitleWithSubtitles
        title={title}
        firstSubtitle={firstSubtitle}
        level={level}
        {...args}
      />
    ),
    [title, firstSubtitle, level],
  );

  return (
    <header className={componentClassName}>
      {icon && size === TitleSize.XL ? (
        <>
          <IconBg className="af-title__icon af-icon-bg">{icon}</IconBg>
          <TitleWithSubtitlesPart secondSubtitle={secondSubtitle} />
        </>
      ) : (
        <TitleWithSubtitlesPart />
      )}
    </header>
  );
};
