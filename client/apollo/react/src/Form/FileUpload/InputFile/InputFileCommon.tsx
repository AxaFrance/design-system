import {
  type ComponentPropsWithRef,
  type ComponentType,
  forwardRef,
  type MouseEventHandler,
  type ReactNode,
  useId,
} from "react";
import addCircleIcon from "@material-symbols/svg-400/rounded/add_circle-fill.svg";
import { Svg } from "../../../Svg/Svg";
import { type ItemLabelProps } from "../../ItemLabel/ItemLabelCommon";
import { type ItemMessageProps } from "../../ItemMessage/ItemMessageCommon";

type LabelProps = Partial<
  Omit<
    ItemLabelProps,
    | "children"
    | "label"
    | "description"
    | "sideButtonLabel"
    | "onSideButtonClick"
    | "moreButtonLabel"
    | "onMoreButtonClick"
  >
>;

export type InputFileProps = Omit<ComponentPropsWithRef<"input">, "type"> & {
  /**
   * Label text content
   */
  label?: ReactNode;

  /**
   * Additional description text that enriches the label.
   * @example "Phone bill, EDF receipt, etc."
   */
  description?: ReactNode;

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
   * Label content for the more button
   * When provided, renders an more button with an info icon.
   */
  moreButtonLabel?: ReactNode;

  /**
   * Click handler for the more button
   */
  onMoreButtonClick?: MouseEventHandler<HTMLButtonElement>;

  /**
   * Props forwarded to the label component to customize its appearance and behavior.
   * Accepts a subset of ItemLabelProps (see LabelProps type). Use this to override
   * visual or behavioral options for the label (e.g., size, tone, visibility of helpers).
   */
  labelProps?: LabelProps;

  /**
   * Help text displayed below the control. This text is associated with the input via
   * `aria-describedby` when provided. Keep the content concise and actionable; avoid
   * using color alone to convey meaning.
   */
  helper?: ReactNode;

  /**
   * Labels for the dropzone UI. Each field is optional and will fall back to defaults.
   * Example: { dropzone: 'Glisser...', or: 'ou', button: 'Importer fichier' }
   */
  dropzoneLabels?: {
    dropzone?: ReactNode;
    or?: ReactNode;
    button?: ReactNode;
  };
} & Omit<ItemMessageProps, "id">;

type InputFileCommonProps = InputFileProps & {
  ItemLabelComponent: ComponentType<ItemLabelProps>;
  ItemMessageComponent: ComponentType<ItemMessageProps>;
};

const DEFAULT_DROPZONE_LABELS = {
  dropzone: "Glisser et déposer un fichier",
  or: "ou",
  button: "Importer fichier",
} as const;

export const InputFileCommon = forwardRef<
  HTMLInputElement,
  InputFileCommonProps
>(
  (
    {
      ItemLabelComponent,
      ItemMessageComponent,
      id,
      label,
      description,
      sideButtonLabel,
      onSideButtonClick,
      moreButtonLabel,
      onMoreButtonClick,
      labelProps,
      helper,
      required,
      message,
      messageType = "error",
      className,
      style,
      dropzoneLabels = {},
      children,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const messageId = `${inputId}-message`;
    const helpId = `${inputId}-help`;

    const ariaDescribedby = [
      helper && helpId,
      message && messageType === "success" && messageId,
    ].filter(Boolean) as string[];

    const hasError = Boolean(message && messageType === "error");

    const resolvedDropzoneLabels = {
      dropzone: dropzoneLabels.dropzone || DEFAULT_DROPZONE_LABELS.dropzone,
      or: dropzoneLabels.or || DEFAULT_DROPZONE_LABELS.or,
      button: dropzoneLabels.button || DEFAULT_DROPZONE_LABELS.button,
    };

    return (
      <div
        className={["af-input-file", className].filter(Boolean).join(" ")}
        style={style}
      >
        <ItemLabelComponent
          htmlFor={inputId}
          description={description}
          sideButtonLabel={sideButtonLabel}
          onSideButtonClick={onSideButtonClick}
          moreButtonLabel={moreButtonLabel}
          onMoreButtonClick={onMoreButtonClick}
          required={required}
          {...labelProps}
        >
          {label}
        </ItemLabelComponent>
        <div className="af-input-file__container">
          <span
            className={[
              "af-input-file__dropzone",
              hasError && "af-input-file__dropzone--error",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <input
              ref={ref}
              type="file"
              id={inputId}
              required={required}
              aria-invalid={hasError || undefined}
              aria-errormessage={hasError ? messageId : undefined}
              aria-describedby={
                ariaDescribedby.length > 0
                  ? ariaDescribedby.join(" ")
                  : undefined
              }
              {...props}
            />
            <span>{resolvedDropzoneLabels.dropzone}</span>
            <span>{resolvedDropzoneLabels.or}</span>
            <span className="af-btn-client af-btn-client--tertiary">
              <Svg src={addCircleIcon} role="presentation" />
              {resolvedDropzoneLabels.button}
            </span>
          </span>
          {helper ? (
            <span id={helpId} className="af-input-file__help">
              {helper}
            </span>
          ) : null}
          <ItemMessageComponent
            id={messageId}
            message={message}
            messageType={messageType}
          />
        </div>
        {children}
      </div>
    );
  },
);

InputFileCommon.displayName = "InputFileCommon";
