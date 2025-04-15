import { PropsWithChildren, ReactNode } from "react";
import classNames from "classnames";

export type TimelineVerticalProps = PropsWithChildren<{
  title: string;
  tag: ReactNode;
  className?: string;
}>;

export const TimelineVertical = ({
  title,
  children,
  tag,
  className,
}: TimelineVerticalProps) => (
  <section className={classNames("af-timeline-vertical", className)}>
    <header className="af-timeline-vertical__header">
      {tag}
      <h4 className="af-timeline-vertical__title">{title}</h4>
    </header>
    {Boolean(children) && (
      <main className="af-timeline-vertical__description">{children}</main>
    )}
  </section>
);
