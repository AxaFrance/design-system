import "@axa-fr/canopee-css/distributeur/Tag/Tag.css";
import { type ComponentPropsWithRef, type PropsWithChildren } from "react";
import { getClassName } from "../utilities/helpers/getClassName";

export type TagVariants =
  | "success"
  | "information"
  | "warning"
  | "error"
  | "default"
  | "dark"
  | "purple"
  | "gray"
  | "white";

type TagProps = ComponentPropsWithRef<"span"> & {
  /**
   * Variant of the tag to apply specific styles.
   * "warning" replaces the deprecated "danger
   * "information" replaces the deprecated "info"
   * @default "default"
   */
  variant?: TagVariants;
  disabled?: boolean;
};

/**
 * Tag component to display a label with various styles.
 *
 * @component
 * @example
 * // Basic usage
 * <Tag variant="success">Success Tag</Tag>
 *
 * @param {React.ReactNode} props.children - The content to be displayed inside the tag.
 * @param {React.Ref<HTMLSpanElement>} ref - The ref to the span element.
 * @returns {JSX.Element} The rendered Tag component.
 */

export const Tag = ({
  children,
  className,
  variant,
  ...otherProps
}: PropsWithChildren<TagProps>) => {
  const actualModifier = variant || "default";

  const componentClassName = getClassName({
    baseClassName: "af-tag",
    modifiers: [actualModifier],
    className,
  });

  // Kept for backward compatibility. May be removed in a future version
  const badgeClassName = getClassName({
    baseClassName: "af-badge",
    modifiers: [actualModifier],
    className,
  });

  return (
    <span className={`${componentClassName} ${badgeClassName}`} {...otherProps}>
      {children}
    </span>
  );
};

Tag.displayName = "Tag";
