import keyboardArrowDownIcon from "@material-symbols/svg-400/outlined/keyboard_arrow_down.svg";
import { useState } from "react";
import { Svg } from "../Svg";
import { formatDate } from "./Timeline.helpers";
import { TimelineParentCircle } from "./TimelineParentCircle";
import type { TimelineItem } from "./Timeline";

export const TimelineDetails = ({ header, details, date }: TimelineItem) => {
  const [detailOpen, setDetailOpen] = useState(false);

  return (
    <details
      className="af-timeline__details"
      onToggle={(event) => setDetailOpen(event.currentTarget.open)}
    >
      <summary className="af-timeline__summary">
        <TimelineParentCircle date={date} />
        {header}
        <Svg
          src={keyboardArrowDownIcon}
          width={20}
          height={20}
          className="af-timeline__show-and-hide-icon"
          aria-label={`${detailOpen ? "Masquer" : "Devoiler"} le detail de la date ${formatDate(date)}`}
          role="img"
        />
      </summary>
      <div className="af-timeline__results">
        <span className="af-timeline__vertical-line" />
        <div className="af-timeline__content">{details}</div>
      </div>
    </details>
  );
};
