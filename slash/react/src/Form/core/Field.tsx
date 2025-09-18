import classNames from "classnames";
import { type ReactNode, useId } from "react";
import {
  FieldError,
  FormClassManager,
  HelpMessage,
  MessageTypes,
  useInputClassModifier,
} from ".";
import { getComponentClassName } from "../../utilities";
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
  classModifier?: string;
  classNameContainerLabel?: string;
  classNameContainerInput?: string;
  /**
   * Setting this to false will disable the rendering of the component
   * @default true
   * @deprecated You should handle the visibility of the component in your code
   * instead of using this prop. This prop will be removed in a future version.
   */
  isVisible?: boolean;
  roleContainer?: string;
  ariaLabelContainer?: string;
  isLabelContainerLinkedToInput?: boolean;
  forceDisplayMessage?: boolean;
  message?: string;
  messageType?: MessageTypes;
  required?: boolean;
  disabled?: boolean;
  helpMessage?: ReactNode;
  /**
   * Sets the position of the label relative to the input.
   * Top will put the label at the top of the input group. This is useful for textarea for example.
   * Center will put the label in the center of the input group, and is used for single line inputs in order to align the label and the input box.
   * @default "center"
   *
   */
  labelPosition?: "top" | "center";
  /**
   * suffix appended to the className of the div wrapping the input
   * @deprecated We should rationalize the CSS for the components to avoid having to use different sufixes
   * but it would be a breaking change to do so, so we keep it for now
   * @example "textarea" will result in
   * ```html
   * <div class="af-form__textarea">
   *  // ... input
   * </div>
   * ```
   * @default "text"
   */
  classNameSuffix?: string;
  renderInput: (
    props: {
      id: string;
      classModifier: string;
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
  classModifier = "",
  disabled = false,
  helpMessage,
  id,
  isVisible = true,
  roleContainer,
  ariaLabelContainer,
  isLabelContainerLinkedToInput = true,
  labelPosition = "center",
  classNameSuffix = "text",
  renderInput,
  appendChildren,
  ...otherProps
}: InputProps) => {
  const inputUseId = useId();
  const inputId = isIdDefined(id) ? id : inputUseId;
  const actualRequired = required || classModifier.includes("required");
  const isInvalid = useAriaInvalid(message, forceDisplayMessage, messageType);
  const errorId =
    forceDisplayMessage || helpMessage ? `${inputId}-description` : undefined;

  const { inputClassModifier, inputFieldClassModifier } = useInputClassModifier(
    classModifier,
    disabled,
    false,
    actualRequired,
  );

  const labelId = useId();

  if (!isVisible) {
    return null;
  }

  const isGroup = roleContainer === "radiogroup" || roleContainer === "group";
  const LabelElement = isGroup ? "div" : "label";

  const modifiers = forceDisplayMessage
    ? `${inputFieldClassModifier} ${FormClassManager.getModifier(messageType)}`
    : inputFieldClassModifier;
  const fieldContainerClassName = getComponentClassName(
    `af-form__${classNameSuffix}`,
    modifiers,
  );
  const groupClassName = getComponentClassName(
    className,
    classModifier,
    "af-form__group",
  );

  return (
    <div
      className={classNames("row", groupClassName, {
        "af-form__group--required": actualRequired,
        "af-form__group--label-top": labelPosition === "top",
      })}
      role={roleContainer}
      aria-label={ariaLabelContainer}
      aria-labelledby={isGroup ? labelId : undefined}
    >
      <div className={classNameContainerLabel}>
        <LabelElement
          className={classNames("af-form__group-label", {
            "af-form__group-label--required": actualRequired,
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
            classModifier: `${inputClassModifier} ${modifiers}`,
            id: inputId,
            errorId,
            disabled,
            ariaInvalid: isInvalid,
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
