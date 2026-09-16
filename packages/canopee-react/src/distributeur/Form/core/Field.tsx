import classNames from "classnames";
import { type ReactNode, useId } from "react";
import { FieldError, FormClassManager, HelpMessage, MessageTypes } from ".";
import { getClassName } from "../../utilities";
import { useAriaInvalid } from "./useAriaInvalid";

type InputProps = {
  /**
   * The label of the input element.
   */
  label: ReactNode;
  /**
   * The id of the input element. If not provided, a unique id will be generated.
   */
  id?: string;
  className?: string;
  classNameContainerLabel?: string;
  classNameContainerInput?: string;
  roleContainer?: string;
  ariaLabelContainer?: string;
  isLabelContainerLinkedToInput?: boolean;
  forceDisplayMessage?: boolean;
  message?: string;
  messageType?: MessageTypes;
  required?: boolean;
  disabled?: boolean;
  hasInfobulle?: boolean;
  helpMessage?: ReactNode;
  /**
   * Sets the position of the label relative to the input.
   * Top will put the label at the top of the input group. This is useful for textarea for example.
   * Center will put the label in the center of the input group, and is used for single line inputs in order to align the label and the input box.
   * @default "center"
   *
   */
  labelPosition?: "top" | "center";
  fieldClassNameSuffix?: string;
  renderInput: (
    props: {
      id: string;
      inputClassName: string;
      errorId?: string;
      ariaInvalid?: boolean;
    } & Record<string, unknown>,
  ) => ReactNode;
  /**
   * Elements to be appended to the end of the input group, just before the 2 ending divs
   * @example <Field appendChildren={<Button>Submit</Button>} renderinput={() => <span>hello</span>} />
   * will result in
   * ```html
   * <div class="af-form__text">
   *  <span>hello</span>
   *  <Button>Submit</Button>
   * </div>
   * ```
   * @optional
   */
  appendChildren?: ReactNode;
};

export type ConsumerFieldProps = Omit<
  InputProps,
  "renderInput" | "classNameSuffix" | "children"
> & {
  /**
   * Element appended right to the input
   */
  children?: ReactNode;
};

function isIdDefined(id: string | undefined): id is string {
  return typeof id === "string" && id.length > 0;
}

export const Field = ({
  classNameContainerInput = "col-md-10",
  classNameContainerLabel = "col-md-2",
  className,
  label,
  forceDisplayMessage,
  message,
  messageType,
  required,
  disabled = false,
  hasInfobulle,
  helpMessage,
  id,
  roleContainer,
  ariaLabelContainer,
  isLabelContainerLinkedToInput = true,
  labelPosition = "center",
  fieldClassNameSuffix = "text",
  renderInput,
  appendChildren,
  ...otherProps
}: InputProps) => {
  const inputUseId = useId();
  const inputId = isIdDefined(id) ? id : inputUseId;
  const isInvalid = useAriaInvalid(message, forceDisplayMessage, messageType);
  const errorId =
    forceDisplayMessage || helpMessage ? `${inputId}-description` : undefined;

  const labelId = useId();

  const isGroup = roleContainer === "radiogroup" || roleContainer === "group";
  const LabelElement = isGroup ? "div" : "label";

  const fieldModifiers = [
    disabled && "disabled",
    required && "required",
    forceDisplayMessage && FormClassManager.getModifier(messageType),
  ];
  const inputClassName = [
    ...fieldModifiers,
    hasInfobulle && `af-form__input-${fieldClassNameSuffix}--hasinfobulle`,
  ]
    .filter(Boolean)
    .join(" ");
  const fieldContainerClassName = getClassName({
    baseClassName: `af-form__${fieldClassNameSuffix}`,
    modifiers: fieldModifiers,
  });
  const groupClassName = getClassName({
    baseClassName: "af-form__group",
    className,
  });

  return (
    <div
      className={classNames("row", groupClassName, {
        "af-form__group--required": required,
        "af-form__group--label-top": labelPosition === "top",
      })}
      role={roleContainer}
      aria-invalid={isGroup ? isInvalid : undefined}
      aria-required={isGroup ? required : undefined}
      aria-label={ariaLabelContainer}
      aria-labelledby={isGroup ? labelId : undefined}
      aria-errormessage={isGroup && isInvalid ? errorId : undefined}
    >
      <div className={classNameContainerLabel}>
        <LabelElement
          className={classNames("af-form__group-label", {
            "af-form__group-label--required": required,
          })}
          htmlFor={isLabelContainerLinkedToInput ? inputId : undefined}
          id={labelId}
        >
          {label}
        </LabelElement>
      </div>

      <div className={classNameContainerInput}>
        <div className={fieldContainerClassName}>
          {renderInput({
            inputClassName,
            id: inputId,
            errorId,
            disabled,
            ariaInvalid: isInvalid,
            required,
            ...otherProps,
          })}
        </div>
        {forceDisplayMessage ? (
          <FieldError
            message={message}
            messageType={messageType}
            errorId={errorId}
          />
        ) : (
          <HelpMessage message={helpMessage} id={errorId} />
        )}

        {appendChildren}
      </div>
    </div>
  );
};
