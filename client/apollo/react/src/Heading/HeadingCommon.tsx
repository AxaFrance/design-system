import classNames from "classnames";
import type { HTMLElementType, PropsWithChildren, ReactNode } from "react";
import { Icon, IconProps } from "../Icon/IconCommon";
import { TagProps } from "../Tag/TagCommon";
import { HeadingWithSubheadings } from "./HeadingWithSubheadings";
import { HeadingLevel } from "./types";

export type HeadingCommonProps = PropsWithChildren<{
  level?: HeadingLevel;
  icon?: string;
  iconProps?: Omit<IconProps, "src">;
  tag?: ReactNode;
  firstSubtitle?: ReactNode;
  secondSubtitle?: ReactNode;
  className?: string;
  as?: HTMLElementType;
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
  as: Header = "header",
}: HeadingCommonProps) => (
  <Header className={classNames("af-heading", className)}>
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
  </Header>
);
