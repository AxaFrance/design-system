import { ComponentPropsWithRef, PropsWithChildren, forwardRef } from "react";
import { getComponentClassName } from "../utilities";
import "@axa-fr/design-system-slash-css/dist/Tag/Tag.scss";

type TagModifier =
  | "success"
  | "information"
  | "warning"
  | "error"
  | "default"
  | "dark"
  | "purple"
  | "gray";

/**
 * @deprecated instead use warning
 */
type TagModifierDecrepated = "danger";

type TagProps = ComponentPropsWithRef<"span"> & {
  classModifier?: `${TagModifier | TagModifierDecrepated}` | string;
  disabled?: boolean;
};

/**
 * Tag component to display a label with various styles.
 *
 * @component
 * @example
 * // Basic usage
 * <Tag classModifier="success">Success Tag</Tag>
 *
 * @param {object} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be displayed inside the tag.
 * @param {string} [props.className] - Additional class names to apply to the tag.
 * @param {string} [props.classModifier] - Modifier class to apply specific styles. Note: "danger" is deprecated, use "warning" instead.
 * @param {boolean} [props.disabled] - If true, the tag will be disabled.
 * @param {React.Ref<HTMLSpanElement>} ref - The ref to the span element.
 * @returns {JSX.Element} The rendered Tag component.
 */
export const Tag = forwardRef<HTMLSpanElement, PropsWithChildren<TagProps>>(
  ({ children, className, classModifier = "default", ...otherProps }, ref) => {
    const componentClassName = getComponentClassName(
      className,
      classModifier,
      "af-tag",
    );

    // Kept for backward compatibility. May be removed in a future version
    const badgeClassName = getComponentClassName(
      className,
      classModifier,
      "af-badge",
    );

    return (
      <span
        ref={ref}
        className={`${componentClassName} ${badgeClassName}`}
        {...otherProps}
      >
        {children}
      </span>
    );
  },
);

Tag.displayName = "Tag";
