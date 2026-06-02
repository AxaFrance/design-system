import {
  type ComponentPropsWithRef,
  forwardRef,
  type ReactElement,
} from "react";
import { Svg } from "../Svg";
import { ButtonPolymorphe } from "../Button/ButtonPolymorphe";

export type LinkVariant = "default" | "reverse";
type AnchorLinkProps = {
  leftIcon?: ReactElement<typeof Svg>;
  rightIcon?: ReactElement<typeof Svg>;
  className?: string;
  disabled?: boolean;
  variant?: LinkVariant;
};

type LinkComponentProps = ComponentPropsWithRef<"a"> & AnchorLinkProps;

const LinkAnchor = forwardRef<HTMLAnchorElement, LinkComponentProps>(
  (
    {
      className,
      target,
      rel,
      leftIcon,
      children,
      rightIcon,
      disabled,
      variant,
      ...restProps
    }: LinkComponentProps,
    ref,
  ) => {
    return (
      <ButtonPolymorphe
        className={className}
        variant={variant}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        aria-disabled={disabled ?? restProps["aria-disabled"]}
        ref={ref}
        target={target}
        {...restProps}
        as="a"
      >
        {leftIcon}
        {children}
        {rightIcon}
      </ButtonPolymorphe>
    );
  },
);

LinkAnchor.displayName = "LinkAnchor";

export { LinkAnchor, type LinkComponentProps };
