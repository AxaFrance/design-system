import type { ElementType } from "react";

export type ContentMonoItemSize = "medium" | "large";

export type ContentItemCoreProps<T extends ElementType = "div"> = {
  as?: T;
  size?: ContentMonoItemSize;
  title?: string;
  primarySubtitle?: string;
  subtitle?: string;
  leftComponent?: React.ReactNode;
};

export const ContentItemMonoCore = <T extends ElementType = "div">({
  as,
  size = "medium",
  leftComponent,
  title,
  primarySubtitle,
  subtitle,
}: ContentItemCoreProps<T>) => {
  const Component = as ?? "div";

  return (
    <Component
      data-testid="container"
      className={`af-content-item-mono ${size}`}
    >
      {leftComponent}
      <div className="text-content">
        <span className="title">{title}</span>
        {primarySubtitle ? (
          <span className="subtitle-primary">{primarySubtitle}</span>
        ) : null}
        {subtitle ? <span className="subtitle">{subtitle}</span> : null}
      </div>
    </Component>
  );
};
