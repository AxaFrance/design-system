import classnames from "classnames";
import {
  type ComponentProps,
  type ElementType,
  type ForwardedRef,
  forwardRef,
  type PropsWithChildren,
} from "react";

import "@axa-fr/design-system-slash-css/dist/Typography/Typography.scss";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "text"
  | "label"
  | "text-static"
  | "label-restitution"
  | "value-restitution"
  | "button"
  | "link"
  | "tag"
  | "form-error"
  | "app-name"
  | "app-subtitle"
  | "user"
  | "copyright"
  | "step-train";

const defaultComponent: Record<TypographyVariant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  text: "p",
  label: "label",
  "text-static": "p",
  "label-restitution": "p",
  "value-restitution": "p",
  button: "button",
  link: "a",
  tag: "p",
  "form-error": "small",
  "app-name": "p",
  "app-subtitle": "p",
  user: "p",
  copyright: "p",
  "step-train": "p",
};

export type TypographyProps<C extends ElementType> = {
  component?: C;
  variant?: TypographyVariant;
  className?: string;
} & ComponentProps<C>;

export const Typography = forwardRef(
  <C extends ElementType = "p">(
    {
      className,
      component,
      variant = "text",
      ...props
    }: PropsWithChildren<TypographyProps<C>>,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const Component =
      component ?? defaultComponent[variant as TypographyVariant];
    return (
      <Component
        className={classnames(`af-typography--${variant}`, className)}
        {...props}
        ref={ref}
      />
    );
  },
);

Typography.displayName = "Typography";
