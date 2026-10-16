import openInNew from "@material-symbols/svg-400/outlined/open_in_new.svg";
import type { ElementType, ReactNode } from "react";
import { Svg } from "../Svg/Svg";
import { getClassName } from "../utilities/getClassName";
import type { PolymorphicComponent } from "../utilities/types/PolymorphicComponent";

export const linkVariants = {
  inverse: "inverse",
} as const;

export type LinkVariants = keyof typeof linkVariants;

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

  return (
    <Component
      className={getClassName({
        baseClassName: "af-link",
        modifiers: [variant, openInNewTab && "openInNewTab"],
        className,
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
