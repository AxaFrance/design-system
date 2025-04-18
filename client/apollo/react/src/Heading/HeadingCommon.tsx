import React, { type ReactNode } from "react";
import classNames from "classnames";
import { HeadingWithSubheadings } from "./HeadingWithSubheadings";
import { Icon, IconProps } from "../Icon/IconCommon";
import { TagProps } from "../Tag/TagCommon";
import { HeadingLevel } from "./types";

export type HeadingProps = React.PropsWithChildren<{
  level?: HeadingLevel;
  icon?: string;
  iconProps?: Omit<IconProps, "src">;
  tagComponent?: React.ComponentType<TagProps>;
  tagProps?: TagProps;
  firstSubtitle?: ReactNode;
  secondSubtitle?: ReactNode;
  className?: string;
}>;

export const Heading = ({
  children: title,
  className,
  firstSubtitle,
  secondSubtitle,
  level = 1,
  icon,
  iconProps = {},
  tagComponent: TagComponent,
  tagProps = {},
}: HeadingProps) => (
  <header className={classNames("af-heading", className)}>
    {TagComponent && level < 3 && (
      <div className="af-heading__label">
        <TagComponent variant="neutral" {...tagProps} />
      </div>
    )}
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
