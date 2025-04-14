import React, { type ReactNode } from "react";
import classNames from "classnames";
import { HeadingWithSubheadings } from "./HeadingWithSubheadings";
import { Icon, IconProps } from "../Icon/IconCommon";
import { TagProps } from "../Tag/TagCommon";
import { HeadingLevel } from "./types";

export type HeadingCommonProps = React.PropsWithChildren<{
  level?: HeadingLevel;
  icon?: string;
  iconProps?: Omit<IconProps, "src">;
  tag?: React.ReactNode;
  firstSubtitle?: ReactNode;
  secondSubtitle?: ReactNode;
  className?: string;
}>;

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
}: HeadingCommonProps) => (
  <header className={classNames("af-heading", className)}>
    {tag && level < 3 && <div className="af-heading__label">{tag}</div>}
    {icon && level === 1 && (
      <Icon
        src={icon}
        size="L"
        hasBackground
        variant="secondary"
        {...iconProps}
        className={classNames("af-heading__icon", iconProps.className)}
      />
    )}
    <HeadingWithSubheadings
      title={title}
      firstSubtitle={firstSubtitle}
      titleComponent={`h${level}`}
      secondSubtitle={secondSubtitle}
    />
  </header>
);
