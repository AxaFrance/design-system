import {
  useId,
  type ComponentType,
  type MouseEventHandler,
  type ReactNode,
  type ComponentProps,
} from "react";
import infoIcon from "@material-symbols/svg-400/outlined/info.svg";
import { Svg } from "../../Svg/Svg";
import type { ButtonProps } from "../../Button/ButtonCommon";

export type ItemLabelProps = ComponentProps<"label"> & {
  /**
   * Label text content
   * @deprecated use `children` instead.
   */
  label?: ReactNode;

  /**
   * Additional description text that enriches the label.
   * @example "Phone bill, EDF receipt, etc."
   */
  description?: ReactNode;

  /**
   * Shows a visual asterisk (*) indicator next to the label.
   */
  required?: boolean;

  /**
   * ID of the associated input element
   * @deprecated use `htmlFor` instead.
   */
  inputId?: string;

  /**
   * Label content for the side action button.
   * When provided, renders a secondary button next to the main label.
   */
  sideButtonLabel?: ReactNode;

  /**
   * Click handler for the side button
   */
  onSideButtonClick?: MouseEventHandler<HTMLButtonElement>;

  /**
   * Additional props to pass to the side button component.
   */
  sideButtonProps?: Omit<
    Partial<ButtonProps>,
    "children" | "onClick" | "variant" | "className"
  >;

  /**
   * Label content for the more button
   * @deprecated use `moreButtonLabel` instead.
   */
  buttonLabel?: ReactNode;

  /**
   * Click handler for the info button
   * @deprecated use `onInfoButtonClick` instead.
   */
  onButtonClick?: MouseEventHandler<HTMLButtonElement>;

  /**
   * Label content for the more button
   * When provided, renders an more button with an info icon.
   */
  moreButtonLabel?: ReactNode;

  /**
   * Click handler for the more button
   */
  onMoreButtonClick?: MouseEventHandler<HTMLButtonElement>;

  /**
   * Additional props to pass to the more button component.
   */
  moreButtonProps?: Omit<
    Partial<ButtonProps>,
    "children" | "onClick" | "variant" | "className"
  >;
};

export type ItemLabelCommonProps = ItemLabelProps & {
  ButtonComponent: ComponentType<ButtonProps>;
};

/**
 * A comprehensive label component for form items with support for descriptions and action buttons.
 *
 * This component provides an accessible label that can be enhanced with:
 * - Visual required field indicator (asterisk)
 * - Optional description text
 * - Optional side action button
 * - Optional more button with icon
 *
 * The component ensures proper accessibility by:
 * - Associating the label with form controls via htmlFor
 * - Providing appropriate ARIA attributes for screen readers
 * - Supporting keyboard navigation for interactive elements
 *
 * @example Basic usage
 * ```tsx
 * <ItemLabelCommon
 *   htmlFor="email-input"
 *   required
 *   ButtonComponent={Button}
 * >
 *   Email Address
 * </ItemLabelCommon>
 * ```
 *
 * @example With description and action buttons
 * ```tsx
 * <ItemLabelCommon
 *   htmlFor="document-upload"
 *   description="Accepted: PDF, JPG, PNG (max 5MB)"
 *   sideButtonLabel="Browse"
 *   onSideButtonClick={handleBrowse}
 *   moreButton="Help"
 *   onMoreButtonClick={handleShowHelp}
 *   ButtonComponent={Button}
 * >
 *   Proof of residence
 * </ItemLabelCommon>
 * ```
 */
export const ItemLabelCommon = ({
  label,
  children,
  description,
  required,
  inputId,
  htmlFor,
  className,
  style,
  "aria-describedby": ariaDescribedby,
  sideButtonLabel,
  onSideButtonClick,
  sideButtonProps,
  buttonLabel,
  onButtonClick,
  moreButtonLabel,
  onMoreButtonClick,
  ButtonComponent,
  moreButtonProps,
  ...props
}: ItemLabelCommonProps) => {
  const idDescription = useId();

  const contentLabel = children ?? label;
  const describedByIds = [description ? idDescription : null, ariaDescribedby]
    .filter(Boolean)
    .join(" ");

  if (!contentLabel) {
    return null;
  }

  return (
    <div
      className={["af-item-label", className].filter(Boolean).join(" ")}
      style={style}
    >
      <label
        htmlFor={htmlFor || inputId}
        className="af-item-label__label"
        aria-describedby={describedByIds || undefined}
        {...props}
      >
        {contentLabel}
        {required ? <span aria-hidden>*</span> : null}
      </label>

      {sideButtonLabel ? (
        <ButtonComponent
          {...sideButtonProps}
          variant="ghost"
          onClick={onSideButtonClick}
          className="af-item-label__sidebutton"
        >
          {sideButtonLabel}
        </ButtonComponent>
      ) : null}

      {description ? (
        <span id={idDescription} className="af-item-label__description">
          {description}
        </span>
      ) : null}

      {moreButtonLabel || buttonLabel ? (
        <ButtonComponent
          iconLeft={<Svg src={infoIcon} role="presentation" />}
          {...moreButtonProps}
          variant="ghost"
          className="af-item-label__more"
          onClick={onMoreButtonClick || onButtonClick}
        >
          {moreButtonLabel || buttonLabel}
        </ButtonComponent>
      ) : null}
    </div>
  );
};
