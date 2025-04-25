export type ContentMonoItemSize = "medium" | "large";

export type ContentItemCoreProps = {
  size?: ContentMonoItemSize;
  title?: string;
  primarySubtitle?: string;
  subtitle?: string;
  leftComponent?: React.ReactNode;
};

export const ContentItemMonoCore = ({
  size = "medium",
  leftComponent,
  title,
  primarySubtitle,
  subtitle,
}: ContentItemCoreProps) => {
  return (
    <div data-testid="container" className={`af-content-item-mono ${size}`}>
      {leftComponent ?? <div className="stick" />}
      <div className="text-content">
        <span className="title">{title}</span>
        {primarySubtitle && (
          <span className="subtitle-primary">{primarySubtitle}</span>
        )}
        {subtitle && <span className="subtitle">{subtitle}</span>}
      </div>
    </div>
  );
};
