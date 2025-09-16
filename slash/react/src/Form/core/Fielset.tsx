import classNames from "classnames";
import type { InputProps } from "./Field";
import { useAriaInvalid } from "./useAriaInvalid";
import { useFieldClass, useFieldId } from "./useField";
import { FieldError } from "./FieldError";
import { HelpMessage } from "./HelpMessage";

export const Fieldset = ({
  id,
  label,
  roleContainer,
  required,
  classNameContainerInput = "col-md-10",
  classNameContainerLabel = "col-md-2",
  classModifier = "",
  message,
  forceDisplayMessage,
  messageType,
  helpMessage,
  isVisible = true,
  disabled = false,
  classNameSuffix = "text",
  labelPosition = "center",
  renderInput,
  className,
  ...otherProps
}: InputProps) => {
  const { errorId, inputId } = useFieldId({
    id,
    forceDisplayMessage,
    helpMessage,
  });
  const isInvalid = useAriaInvalid(message, forceDisplayMessage, messageType);
  const actualRequired = required || classModifier.includes("required");

  const { groupClassName, inputClassModifier, modifiers } = useFieldClass({
    disabled,
    actualRequired,
    forceDisplayMessage,
    message,
    messageType,
    classNameSuffix,
  });

  if (!isVisible) {
    return null;
  }

  return (
    <fieldset
      role={roleContainer}
      aria-required={required}
      aria-invalid={isInvalid}
      className={classNames(
        "row",
        groupClassName,
        {
          "af-form__group--required": actualRequired,
          "af-form__group--label-top": labelPosition === "top",
        },
        className,
      )}
    >
      <div className={classNameContainerLabel}>
        <legend
          className={classNames("af-form__group-label", {
            "af-form__group-label--required": actualRequired,
          })}
        >
          {label}
        </legend>
      </div>

      <div className={classNameContainerInput}>
        {renderInput({
          id: inputId,
          classModifier: `${inputClassModifier} ${modifiers}`,
          errorId,
          ariaInvalid: isInvalid,
          disabled,
          ...otherProps,
        })}
        {forceDisplayMessage ? (
          <FieldError
            message={message}
            messageType={messageType}
            errorId={errorId}
          />
        ) : (
          <HelpMessage message={helpMessage} id={errorId} />
        )}
      </div>
    </fieldset>
  );
};
