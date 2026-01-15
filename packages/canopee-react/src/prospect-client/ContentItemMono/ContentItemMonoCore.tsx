export type ContentMonoItemSize = "medium" | "large";

type AtLeastOne<T, K extends keyof T = keyof T> = Partial<T> &
  { [P in K]: Required<Pick<T, P>> }[K];

// shape of the text props (all optional by default)
type TextFields = {
  title?: string;
  primarySubtitle?: string;
  subtitle?: string;
};

// concrete type: at least one of title | primarySubtitle | subtitle must be present
type AtLeastOneText = AtLeastOne<TextFields>;

export type ContentItemCoreProps = {
  size?: ContentMonoItemSize;
  leftComponent?: React.ReactNode;
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
