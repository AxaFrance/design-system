import { useMemo, type ComponentProps } from "react";
import { Tag } from "../Tag";

type AccordionTagDateContainerProps = {
  tag?: string;
  tagProps?: ComponentProps<typeof Tag>;
  date?: string;
};

export const AccordionTagDateContainer = ({
  tag,
  tagProps,
  date,
}: AccordionTagDateContainerProps) => {
  const isShowing = useMemo(() => Boolean(tag) || Boolean(date), [tag, date]);

  if (!isShowing) {
    return null;
  }

  return (
    <div className="af-accordion__tag-date-container">
      {tag && (
        <div className="af-accordion__tag-container">
          <Tag classModifier="warning" {...tagProps}>
            {tag}
          </Tag>
        </div>
      )}
      {date && <p className="af-accordion__date">{date}</p>}
    </div>
  );
};
