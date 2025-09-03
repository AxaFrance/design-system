import {
  type ComponentProps,
  ComponentPropsWithRef,
  type ComponentType,
  forwardRef,
  MouseEventHandler,
  useId,
} from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelCommon";
import { ItemMessage } from "../ItemMessage/ItemMessageCommon";

type Props = ComponentPropsWithRef<"textarea"> &
  Pick<
    ComponentProps<typeof ItemLabel>,
    | "label"
    | "description"
    | "buttonLabel"
    | "sideButtonLabel"
    | "onSideButtonClick"
  > & {
    /** @deprecated Use `className` instead */
    classModifier?: string;
    helper?: string;
    error?: string;
    ItemLabelComponent: ComponentType<
      Omit<ComponentProps<typeof ItemLabel>, "ButtonComponent">
    >;
    ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
    onButtonClick?: MouseEventHandler<HTMLButtonElement>;
  } & Partial<ComponentPropsWithRef<typeof ItemMessage>>;

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      id,
      className,
      classModifier = "",
      label,
      description,
      helper,
      error,
      buttonLabel,
      onButtonClick,
      required,
      sideButtonLabel,
      ItemLabelComponent,
      ItemMessageComponent,
      onSideButtonClick,
      placeholder = " ",
      ...inputProps
    },
    inputRef,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;

    return (
      <div
        className={["af-form__input-container", className]
          .filter(Boolean)
          .join(" ")}
      >
        <ItemLabelComponent
          label={label}
          description={description}
          buttonLabel={buttonLabel}
          onButtonClick={onButtonClick}
          sideButtonLabel={sideButtonLabel}
          onSideButtonClick={onSideButtonClick}
          required={required}
          inputId={inputId}
        />
        <textarea
          id={inputId}
          className="af-form__textarea"
          ref={inputRef}
          aria-errormessage={error ? errorId : undefined}
          aria-describedby={helper ? helperId : undefined}
          required={required}
          aria-invalid={
            Boolean(error) || classModifier.includes("error") ? true : undefined
          }
          placeholder={placeholder}
          {...inputProps}
        />
        {helper ? (
          <span id={helperId} className="af-form__input-helper">
            {helper}
          </span>
        ) : null}
        <ItemMessageComponent id={errorId} message={error} />
      </div>
    );
  },
);

TextArea.displayName = "TextArea";
