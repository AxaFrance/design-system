import { type ReactNode } from "react";

export type InputBaseProps = {
  /**
   * The id of the input element.
   * This is used to link the label to the input, and its descriptions (helper and error messages).
   * If not provided, a unique id will be generated.
   */
  id?: string;

  /**
   * The label text for the input.
   */
  label: ReactNode;

  /**
   * Whether the input is required or not.
   * This will add a `*` after the label text.
   * This is purely presentational and does not enforce any validation logic.
   * @default false
   */
  required?: boolean;

  /**
   * className for the container. Use this to apply styles to the input container.
   */
  containerClassName?: string;

  /**
   * className for the label. Use this to apply styles to the label.
   */
  labelClassName?: string;

  /**
   * className for the input. Use this to apply styles to the input.
   */
  inputClassName?: string;

  /**
   * The position of the label relative to the input.
   * - `centerLeft` will place the label on the left of the input, centered vertically. This is the default position for most inputs.
   * - `leftAbove` will place the label above the input, aligned to the left. This is used to have the label above the input.
   * @default "centerLeft"
   */
  labelPosition?: SingleLineLabelPosition;

  /**
   * The help message to display below the input.
   */
  helpMessage?: string;

  /**
   * The error message to display below the input.
   * This will also set the `aria-invalid` attribute on the input, and apply the error styles to the input.
   */
  errorMessage?: string;

  /**
   * The right element to display next to the input.
   * This should be used to display a unit, but **if you really need to** an icon, or any other element that should be displayed next to the input.
   */
  contentRight?: ReactNode;
};

export type LabelPosition = "topLeft" | SingleLineLabelPosition;
export type SingleLineLabelPosition = "centerLeft" | "above";
