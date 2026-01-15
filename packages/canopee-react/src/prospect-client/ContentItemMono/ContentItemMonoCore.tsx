import { ReactNode } from "react";
import { AtLeastOne } from "../utilities/types/AtLeastOne";

export type ContentMonoItemSize = "medium" | "large";

type TextFields = {
  title?: string;
  primarySubtitle?: string;
  subtitle?: string;
};

type AtLeastOneText = AtLeastOne<TextFields>;

export type ContentItemCoreProps = {
  size?: ContentMonoItemSize;
  leftComponent?: ReactNode;
} & AtLeastOneText;

export const ContentItemMonoCore = ({
  size = "medium",
  leftComponent,
  title,
  primarySubtitle,
  subtitle,
}: ContentItemCoreProps) => {
  return (
    <div data-testid="container" className={`af-content-item-mono ${size}`}>
      {leftComponent}
      <div className="text-content">
        {title ? <span className="title">{title}</span> : null}
        {primarySubtitle ? (
          <span className="subtitle-primary">{primarySubtitle}</span>
        ) : null}
        {subtitle ? <span className="subtitle">{subtitle}</span> : null}
      </div>
    </div>
  );
};
