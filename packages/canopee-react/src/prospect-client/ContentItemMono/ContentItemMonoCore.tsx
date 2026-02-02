import type { ElementType } from "react";
import { ReactNode } from "react";

import { AtLeastOne } from "../utilities/types/AtLeastOne";
import { getClassName } from "../utilities/getClassName";

export type ContentMonoItemSize = "medium" | "large";

type TextFields = {
  title?: string;
  primarySubtitle?: string;
  subtitle?: string;
};

type AtLeastOneText = AtLeastOne<TextFields>;

export type ContentItemCoreProps<T extends ElementType = "div"> = {
  as?: T;
  size?: ContentMonoItemSize;
  leftComponent?: ReactNode;
} & AtLeastOneText;

export const ContentItemMonoCore = <T extends ElementType = "div">({
  as,
  size = "medium",
  leftComponent,
  title,
  primarySubtitle,
  subtitle,
}: ContentItemCoreProps<T>) => {
  const Component = as ?? "div";

  const componentClassName = getClassName({
    baseClassName: "af-content-item-mono",
    modifiers: [size],
  });

  return (
    <Component className={componentClassName}>
      {leftComponent}
      <div className="af-content-item-mono__text-content">
        {title ? (
          <span className="af-content-item-mono__title">{title}</span>
        ) : null}
        {primarySubtitle ? (
          <span className="af-content-item-mono__subtitle-primary">
            {primarySubtitle}
          </span>
        ) : null}
        {subtitle ? (
          <span className="af-content-item-mono__subtitle">{subtitle}</span>
        ) : null}
      </div>
    </Component>
  );
};
