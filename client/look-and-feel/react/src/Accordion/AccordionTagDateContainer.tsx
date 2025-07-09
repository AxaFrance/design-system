import { useMemo, type ComponentProps } from "react";
import { Tag } from "../Tag/Tag";

type AccordionTagDateContainerProps = {
  tagLabel?: string;
  tagProps?: ComponentProps<typeof Tag>;
  dateLabel?: string;
  dateProps?: ComponentProps<"time">;
};

export const AccordionTagDateContainer = ({
  tagLabel,
  tagProps,
  dateLabel,
  dateProps,
}: AccordionTagDateContainerProps) => {
  const isShowing = useMemo(
    () => Boolean(tagLabel) || Boolean(dateLabel),
    [tagLabel, dateLabel],
  );

  if (!isShowing) {
    return null;
  }

  return (
    <div className="af-accordion__tag-date-container">
      {tagLabel ? (
        <div className="af-accordion__tag-container">
          <Tag variant="warning" {...tagProps}>
            {tagLabel}
          </Tag>
        </div>
      ) : null}
      {dateLabel ? (
        <time className="af-accordion__date" {...dateProps}>
          {dateLabel}
        </time>
      ) : null}
    </div>
  );
};
