import openInNew from "@material-symbols/svg-400/outlined/open_in_new.svg";
import type { ElementType, ReactNode } from "react";
import { Svg } from "../Svg/Svg";
import { getClassName } from "../utilities/getClassName";
import type { PolymorphicComponent } from "../utilities/types/PolymorphicComponent";

export const linkVariants = {
  inverse: "inverse",
  "button-primary": "button-primary",
  "button-primary-business": "button-primary-business",
  "button-primary-inverse": "button-primary-inverse",
  "button-secondary": "button-secondary",
  "button-secondary-inverse": "button-secondary-inverse",
  "button-tertiary": "button-tertiary",
  "button-ghost": "button-ghost",
} as const;

export type LinkVariants = keyof typeof linkVariants;

const BUTTON_VARIANT_PREFIX = "button-";

const getButtonClassName = (variant?: LinkVariants) =>
  variant?.startsWith(BUTTON_VARIANT_PREFIX)
    ? `af-btn-client af-btn-client--${variant.slice(BUTTON_VARIANT_PREFIX.length)}`
    : undefined;

export type LinkProps<T extends ElementType = "a"> = PolymorphicComponent<
  T,
  {
    variant?: LinkVariants;
    openInNewTab?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    className?: string;
    children?: ReactNode;
  }
>;

export const Link = <T extends ElementType = "a">({
  as,
  variant,
  openInNewTab = false,
  leftIcon,
  rightIcon,
  children,
  className,
  ...props
}: LinkProps<T>) => {
  const Component = as ?? "a";
  const newTabProps = openInNewTab && {
    target: "_blank",
    rel: "noopener noreferrer",
  };
  const buttonClassName = getButtonClassName(variant);

  return (
    <Component
      className={getClassName({
        baseClassName: "af-link",
        modifiers: [
          buttonClassName ? undefined : variant,
          openInNewTab && "openInNewTab",
        ],
        className: [buttonClassName, className].filter(Boolean).join(" "),
      })}
      {...newTabProps}
      {...props}
    >
      {leftIcon}
      {children}
      {openInNewTab || Boolean(rightIcon)
        ? (rightIcon ?? <Svg src={openInNew} />)
        : null}
    </Component>
  );
};
