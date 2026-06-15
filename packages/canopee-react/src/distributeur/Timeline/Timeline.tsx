import classNames from "classnames";

import "@axa-fr/canopee-css/distributeur/Timeline/Timeline.css";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { getTimelineItemKey } from "./Timeline.helpers";
import { TimelineDetails } from "./TimelineDetails";
import { TimelineParentCircle } from "./TimelineParentCircle";

type TimelineBaseItem = {
  header: ReactNode;
  date?: Date;
};

export type TimelineItem = TimelineBaseItem & {
  details: ReactNode;
};

export type TimelineItemWithoutDetails = TimelineBaseItem & {
  details?: ReactNode;
};

export type TimelineListItem = TimelineItem | TimelineItemWithoutDetails;

export type TimelineVariants = "default" | "withoutDetails";

type TimelineBaseProps = Omit<ComponentPropsWithoutRef<"ol">, "children">;

type TimelineDefaultProps = TimelineBaseProps & {
  items: TimelineItem[];
  variant?: "default";
};

type TimelineWithoutDetailsProps = TimelineBaseProps & {
  items: TimelineItemWithoutDetails[];
  variant: "withoutDetails";
};

export type TimelineProps = TimelineDefaultProps | TimelineWithoutDetailsProps;

export const Timeline = ({
  items,
  variant = "default",
  className,
  ...otherProps
}: TimelineProps) => {
  const isWithoutDetails = variant === "withoutDetails";

  return (
    <ol
      className={classNames(
        "af-timeline",
        {
          "af-timeline--single-item": items.length === 1,
          "af-timeline--without-details": isWithoutDetails,
        },
        className,
      )}
      {...otherProps}
    >
      {items.map((item: TimelineListItem) => {
        return (
          <li className="af-timeline__item" key={getTimelineItemKey(item)}>
            {isWithoutDetails ? (
              <div className="af-timeline__without-details">
                <TimelineParentCircle date={item.date} />
                <div className="af-timeline__without-details-content">
                  {item.header}
                </div>
              </div>
            ) : (
              <TimelineDetails
                date={item.date}
                details={(item as TimelineItem).details}
                header={item.header}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
};
