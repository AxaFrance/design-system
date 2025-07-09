import classNames from "classnames";
import type { JSX, PropsWithChildren, ReactNode } from "react";
import { Icon, type IconProps } from "../Icon/IconCommon";
import { type TagProps } from "../Tag/TagCommon";
import { HeadingWithSubheadings } from "./HeadingWithSubheadings";
import { type HeadingLevel } from "./types";

export type HeadingCommonProps = PropsWithChildren<{
  level?: HeadingLevel;
  icon?: string;
  iconProps?: Omit<IconProps, "src">;
  tag?: ReactNode;
  firstSubtitle?: ReactNode;
  secondSubtitle?: ReactNode;
  className?: string;
}> &
  JSX.IntrinsicElements["div"];

export const DEFAULT_TAG_PROPS: TagProps = {
  variant: "neutral",
};

export const HeadingCommon = ({
  children: title,
  className,
  firstSubtitle,
  secondSubtitle,
  level = 1,
  icon,
  iconProps = {},
  tag,
  ...props
}: HeadingCommonProps) => (
  <div className={classNames("af-heading", className)} {...props}>
    {tag && level < 3 ? <div className="af-heading__label">{tag}</div> : null}
    {icon && level === 1 ? (
      <Icon
        src={icon}
        size="L"
        hasBackground
        variant="secondary"
        {...iconProps}
        className={classNames("af-heading__icon", iconProps.className)}
      />
    ) : null}
    <HeadingWithSubheadings
      title={title}
      firstSubtitle={firstSubtitle}
      titleComponent={`h${level}`}
      secondSubtitle={secondSubtitle}
    />
  </div>
);
