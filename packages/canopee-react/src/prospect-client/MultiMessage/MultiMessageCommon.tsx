import chevronBackward from "@material-symbols/svg-400/rounded/chevron_backward.svg";
import chevronForward from "@material-symbols/svg-400/rounded/chevron_forward.svg";
import {
  useState,
  type ComponentProps,
  type ComponentPropsWithoutRef,
} from "react";
import { ClickIcon } from "../ClickIcon/ClickIconCommon";
import type { Icon } from "../Icon/IconCommon";
import { getAriaRole } from "../Message/Message.helpers";
import { iconByVariant, messageVariants } from "../Message/constants";
import { getClassName } from "../utilities/getClassName";
import { clampIndex, formatCounterLabel } from "./MultiMessage.helpers";
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
  /** Custom counter label formatter — defaults to `${current} sur ${total}` */
  formatCounter?: (current: number, total: number) => string;
  /** Optional override for the previous button props */
  prevButtonProps?: ComponentProps<typeof ClickIcon>;
  /** Optional override for the next button props */
  nextButtonProps?: ComponentProps<typeof ClickIcon>;
} & ComponentPropsWithoutRef<"section">;

type MultiMessageCommonProps = MultiMessageProps & {
  IconComponent: typeof Icon;
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
  formatCounter = formatCounterLabel,
  prevButtonProps,
  nextButtonProps,
  className,
  IconComponent,
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
  const variant = item.variant ?? messageVariants.information;
  const role = getAriaRole(variant);
  const hasMultiple = total > 1;

  const goTo = (next: number) => {
    const clamped = clampIndex(next, total);
    if (clamped === currentIndex) return;
    if (!isControlled) setInternalIndex(clamped);
    onChangeActive?.(clamped);
  };

  return (
    <section
      className={getClassName({
        baseClassName,
        modifiers: [variant],
        className,
      })}
      role={role}
      aria-live={role === "alert" ? "assertive" : "polite"}
      {...sectionProps}
    >
      <IconComponent
        src={iconByVariant[variant]}
        width={iconSize}
        height={iconSize}
        className={`${baseClassName}__icon`}
        role="presentation"
      />
      <div className={`${baseClassName}__content`}>
        {item.title ? (
          <Heading className={`${baseClassName}__title`}>{item.title}</Heading>
        ) : null}
        {item.children ? (
          <div className={`${baseClassName}__body`}>{item.children}</div>
        ) : null}
        {hasMultiple || item.action ? (
          <div className={`${baseClassName}__footer`}>
            {hasMultiple ? (
              <div className={`${baseClassName}__pagination`}>
                <ClickIcon
                  src={chevronBackward}
                  onClick={() => goTo(currentIndex - 1)}
                  disabled={currentIndex === 0}
                  aria-label={prevLabel}
                  {...prevButtonProps}
                />
                <span className={`${baseClassName}__counter`} aria-live="off">
                  {formatCounter(currentIndex + 1, total)}
                </span>
                <ClickIcon
                  src={chevronForward}
                  onClick={() => goTo(currentIndex + 1)}
                  disabled={currentIndex === total - 1}
                  aria-label={nextLabel}
                  {...nextButtonProps}
                />
              </div>
            ) : null}
            {item.action ? (
              <div className={`${baseClassName}__action`}>{item.action}</div>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
};
