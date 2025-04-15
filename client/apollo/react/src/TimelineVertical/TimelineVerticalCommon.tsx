import { ReactNode, ComponentProps, PropsWithChildren } from "react";
import classNames from "classnames";
import { Tag } from "../Tag/TagCommon";

type TimelineVerticalProps = PropsWithChildren<{
  title: string;
  tag: ReactNode;
  tagProps?: Omit<ComponentProps<typeof Tag>, "children">;
  className?: string;
}>;

export const TimelineVertical = ({
  title,
  children,
  tag,
  tagProps = {},
  className,
}: TimelineVerticalProps) => {
  return (
    <section className={classNames("af-timeline-vertical", className)}>
      <header className="af-timeline-vertical__header">
        <Tag variant="info" {...tagProps}>
          {tag}
        </Tag>
        <h4 className="af-timeline-vertical__title">{title}</h4>
      </header>
      {Boolean(children) && (
        <main className="af-timeline-vertical__description">{children}</main>
      )}
    </section>
  );
};
