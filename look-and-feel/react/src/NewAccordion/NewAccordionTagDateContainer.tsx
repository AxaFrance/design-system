import { useMemo, type ComponentProps } from "react";
import { Tag } from "../Tag";

type NewAccordionTagDateContainerProps = {
  tag?: string;
  tagProps?: ComponentProps<typeof Tag>;
  date?: string;
};

export const NewAccordionTagDateContainer = ({
  tag,
  tagProps,
  date,
}: NewAccordionTagDateContainerProps) => {
  const isShowing = useMemo(() => Boolean(tag) || Boolean(date), [tag, date]);

  if (!isShowing) {
    return null;
  }

  return (
    <div className="af-new-accordion__tag-date-container">
      {tag && (
        <div className="af-new-accordion__tag-container">
          <Tag classModifier="warning" {...tagProps}>
            {tag}
          </Tag>
        </div>
      )}
      {date && <p className="af-new-accordion__date">{date}</p>}
    </div>
  );
};
