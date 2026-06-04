import { useState, type ComponentType } from "react";
import type { MessageProps } from "../Message/MessageCommon";
import type { PaginationProps } from "../Pagination/PaginationCommon";
import { getClassName } from "../utilities/getClassName";
import { MultiMessageFooter } from "./MultiMessageFooter";
import { clampIndex } from "./MultiMessage.helpers";
import type { MultiMessageItem } from "./types";

type Headings = "h2" | "h3" | "h4" | "h5" | "h6";

export type MultiMessageProps = {
  /** Messages displayed inside the carousel */
  items: MultiMessageItem[];
  /** Controlled active index (zero-based) */
  activeIndex?: number;
  /** Default active index (zero-based) when uncontrolled */
  defaultActiveIndex?: number;
  /** Called when the user navigates between messages */
  onChangeActive?: (index: number) => void;
  /** Icon size in pixels */
  iconSize?: number;
  /** HTML heading level used for each message title */
  heading?: Headings;
  /** ARIA label for the previous button */
  prevLabel?: string;
  /** ARIA label for the next button */
  nextLabel?: string;
  /** Optional override for the previous button props */
  prevButtonProps?: PaginationProps["prevButtonProps"];
  /** Optional override for the next button props */
  nextButtonProps?: PaginationProps["nextButtonProps"];
} & Omit<
  MessageProps,
  "action" | "children" | "heading" | "iconSize" | "title" | "variant"
>;

type MultiMessageCommonProps = MultiMessageProps & {
  MessageComponent: ComponentType<MessageProps>;
  PaginationComponent: ComponentType<PaginationProps>;
};

const baseClassName = "af-multi-message";

export const MultiMessageCommon = ({
  items,
  activeIndex,
  defaultActiveIndex = 0,
  onChangeActive,
  iconSize = 24,
  heading: Heading = "h4",
  prevLabel = "Message précédent",
  nextLabel = "Message suivant",
  prevButtonProps,
  nextButtonProps,
  className,
  MessageComponent,
  PaginationComponent,
  ...sectionProps
}: MultiMessageCommonProps) => {
  const total = items.length;
  const isControlled = activeIndex !== undefined;
  const [internalIndex, setInternalIndex] = useState(
    clampIndex(defaultActiveIndex, total),
  );
  const currentIndex = clampIndex(
    isControlled ? activeIndex : internalIndex,
    total,
  );

  if (total === 0) return null;

  const item = items[currentIndex];
  const hasMultiple = total > 1;

  const goTo = (next: number) => {
    const clamped = clampIndex(next, total);
    if (clamped === currentIndex) return;
    if (!isControlled) setInternalIndex(clamped);
    onChangeActive?.(clamped);
  };

  return (
    <MessageComponent
      className={getClassName({
        baseClassName,
        className,
      })}
      variant={item.variant}
      title={item.title}
      iconSize={iconSize}
      heading={Heading}
      {...sectionProps}
    >
      {item.children}
      <MultiMessageFooter
        action={item.action}
        currentIndex={currentIndex}
        hasMultiple={hasMultiple}
        nextButtonProps={nextButtonProps}
        nextLabel={nextLabel}
        onChangePage={goTo}
        PaginationComponent={PaginationComponent}
        prevButtonProps={prevButtonProps}
        prevLabel={prevLabel}
        total={total}
      />
    </MessageComponent>
  );
};
