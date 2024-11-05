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
  const HLevel = useMemo(
    () => `h${level}`,
    [level],
  ) as keyof JSX.IntrinsicElements;

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
    ({
      ...args
    }: Omit<
      ComponentProps<typeof TitleWithSubtitles>,
      "title" | "firstSubtitle"
    >) => (
      <TitleWithSubtitles
        title={title}
        firstSubtitle={firstSubtitle}
        {...args}
      />
    ),
    [title, firstSubtitle],
  );

  return (
    <HLevel className={componentClassName}>
      {icon && size === TitleSize.XL ? (
        <>
          <IconBg className="af-title__icon af-icon-bg">{icon}</IconBg>
          <div className="af-title__text-container">
            <TitleWithSubtitlesPart secondSubtitle={secondSubtitle} />
          </div>
        </>
      ) : (
        <TitleWithSubtitlesPart />
      )}
    </HLevel>
  );
};
