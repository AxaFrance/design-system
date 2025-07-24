import type { ClickItemPropsCommon } from "./types";
import { ClickItemWrapper } from "./ClickItemWrapper";

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
  const clickableProps = onClick && {
    "aria-label": ariaLabelForActionIcon,
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
        <ClickItemSuffixComponent variant={variant} state={state} />
      </div>
    </ClickItemWrapper>
  );
};
