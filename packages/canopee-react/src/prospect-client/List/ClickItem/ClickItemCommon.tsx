import { useId } from "react";
import type { ClickItemPropsCommon } from "./types";
import { ClickItemWrapper } from "./ClickItemWrapper";
import {
  type ClickItemContentPart,
  getClickItemContentId,
} from "./components/ClickItemContentCommon";

export type { ClickItemProps } from "./types";

export const clickItemVariants = {
  small: "small",
  medium: "medium",
  large: "large",
  agent: "agent",
} as const;
export type ClickItemVariants = keyof typeof clickItemVariants;

export const clickItemStates = {
  default: "default",
  disabled: "disabled",
  loading: "loading",
} as const;
export type ClickItemStates = keyof typeof clickItemStates;

/** Content that ClickItemCommon.css hides for a variant: not described */
const hiddenContentByVariant: Partial<
  Record<ClickItemVariants, ClickItemContentPart[]>
> = {
  small: ["subtitle", "secondary", "tertiary", "tag"],
  agent: ["secondary", "tertiary", "tag"],
};

export const ClickItemCommon = ({
  className = "",
  state = "default",
  variant = "large",
  icon,
  title,
  subtitle,
  textSecondary,
  textTertiary,
  tagLabel,
  tagProps,
  basePictureProps,
  onClick,
  ariaLabelForActionIcon,
  ClickItemContentComponent,
  ClickItemSuffixComponent,
  ClickItemPrefixComponent,
}: ClickItemPropsCommon) => {
  const idPrefix = useId();
  const actionDescriptionId = `${idPrefix}-action`;
  const spinnerId = `${idPrefix}-spinner`;
  // ClickItemSuffixCommon only shows the spinner of the large variant
  const hasSpinner = variant === "large" && state === "loading";
  const describedContent: [ClickItemContentPart, string | undefined][] = [
    ["subtitle", subtitle],
    ["secondary", textSecondary],
    ["tertiary", textTertiary],
    ["tag", tagLabel],
  ];
  const describedBy = [
    ...describedContent
      .filter(
        ([part, text]) =>
          text && !hiddenContentByVariant[variant]?.includes(part),
      )
      .map(([part]) => getClickItemContentId(idPrefix, part)),
    ...(hasSpinner ? [spinnerId] : []),
    ...(ariaLabelForActionIcon ? [actionDescriptionId] : []),
  ].join(" ");

  const clickableProps = onClick && {
    "aria-labelledby": getClickItemContentId(idPrefix, "title"),
    "aria-describedby": describedBy || undefined,
    onClick,
    disabled: state === "disabled" || state === "loading",
  };

  return (
    <ClickItemWrapper
      isClickable={Boolean(onClick)}
      className={[
        "af-apollo-click-item",
        `af-apollo-click-item--${variant}`,
        `af-apollo-click-item--${state}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...clickableProps}
    >
      <div className="af-apollo-click-item__leading">
        <ClickItemPrefixComponent
          variant={variant}
          state={state}
          basePictureProps={basePictureProps}
          icon={icon}
        />
      </div>
      <div className="af-apollo-click-item__content">
        <ClickItemContentComponent
          idPrefix={idPrefix}
          title={title}
          subtitle={subtitle}
          textSecondary={textSecondary}
          textTertiary={textTertiary}
          tagLabel={tagLabel}
          tagProps={{
            ...(tagProps ?? {}),
            variant: state === "disabled" ? "neutral" : tagProps?.variant,
          }}
        />
      </div>
      <div className="af-apollo-click-item__trailing">
        <ClickItemSuffixComponent
          variant={variant}
          state={state}
          spinnerId={spinnerId}
        />
      </div>
      {onClick && ariaLabelForActionIcon ? (
        <span id={actionDescriptionId} hidden>
          {ariaLabelForActionIcon}
        </span>
      ) : null}
    </ClickItemWrapper>
  );
};
