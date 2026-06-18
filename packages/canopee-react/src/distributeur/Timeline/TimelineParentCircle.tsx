import classNames from "classnames";
import { isDateInFuture } from "./Timeline.helpers";

type TimelineParentCircleProps = {
  date?: Date;
};

export const TimelineParentCircle = ({ date }: TimelineParentCircleProps) => {
  return (
    <div className="af-timeline__parent-circle">
      <span
        className={classNames("af-timeline__circle", {
          "af-timeline__circle--half": isDateInFuture(date),
        })}
        role="presentation"
      />
    </div>
  );
};
