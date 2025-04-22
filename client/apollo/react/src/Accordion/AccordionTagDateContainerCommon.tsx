import { type ComponentProps, ComponentType, useMemo } from "react";
import { Tag } from "../Tag/TagCommon";

type AccordionTagDateContainerProps = {
  dateLabel?: string;
  dateProps?: ComponentProps<"time">;
  tagLabel?: string;
  tagProps?: ComponentProps<typeof Tag>;
  TagComponent: ComponentType<ComponentProps<typeof Tag>>;
};

export const AccordionTagDateContainer = ({
  dateLabel,
  dateProps,
  tagLabel,
  tagProps,
  TagComponent,
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
      {tagLabel && (
        <div className="af-accordion__tag-container">
          <TagComponent variant="warning" {...tagProps}>
            {tagLabel}
          </TagComponent>
        </div>
      )}
      {dateLabel && (
        <time className="af-accordion__date" {...dateProps}>
          {dateLabel}
        </time>
      )}
    </div>
  );
};
