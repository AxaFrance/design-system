import { type ComponentProps, ComponentType, useMemo } from "react";
import { Tag } from "../../Tag/TagCommon";

export type AccordionTagDateContainerProps = {
  dateLabel?: string;
  dateProps?: ComponentProps<"time">;
  tagLabel?: string;
  tagProps?: ComponentProps<typeof Tag>;
};

export type AccordionTagDateContainerCommonProps =
  AccordionTagDateContainerProps & {
    TagComponent: ComponentType<ComponentProps<typeof Tag>>;
  };

export const AccordionTagDateContainerCommon = ({
  dateLabel,
  dateProps,
  tagLabel,
  tagProps,
  TagComponent,
}: AccordionTagDateContainerCommonProps) => {
  const isShowing = useMemo(
    () => Boolean(tagLabel) || Boolean(dateLabel),
    [tagLabel, dateLabel],
  );

  if (!isShowing) {
    return null;
  }

  return (
    <>
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
    </>
  );
};
