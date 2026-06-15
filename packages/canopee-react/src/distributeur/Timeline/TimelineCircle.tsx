import classNames from "classnames";
import { isDateInFuture } from "./Timeline.helpers";

type TimelineCircleProps = {
  date?: Date;
};

export const TimelineCircle = ({ date }: TimelineCircleProps) => {
  return (
    <span
      className={classNames("af-timeline__circle", {
        "af-timeline__circle--half": isDateInFuture(date),
      })}
      role="presentation"
    />
  );
};
