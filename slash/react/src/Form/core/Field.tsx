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

type InputProps = {
  label: ReactNode;
  children?: ReactNode;
  id?: string;
  classModifier?: string;
  classNameContainerLabel?: string;
  classNameContainerInput?: string;
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
};

export const Field = ({
  classNameContainerInput = "col-md-10",
  classNameContainerLabel = "col-md-2",
  label,
  forceDisplayMessage,
  message,
  messageType,
  required,
  classModifier = "",
  children,
  disabled = false,
  helpMessage,
  id,
  isVisible = true,
  roleContainer,
  ariaLabelContainer,
  isLabelContainerLinkedToInput = true,
  renderInput,
}: InputProps & {
  renderInput: (props: { id: string; classModifier: string }) => ReactNode;
}) => {
  const inputUseId = useId();
  const inputId = id ?? inputUseId;

  const actualRequired = required || classModifier.includes("required");

  const { inputClassModifier, inputFieldClassModifier } = useInputClassModifier(
    classModifier,
    disabled,
    Boolean(children),
    actualRequired,
  );

  if (!isVisible) {
    return null;
  }

  const fieldContainerClassName = getComponentClassName(
    "af-form__text",
    forceDisplayMessage
      ? `${inputFieldClassModifier} ${FormClassManager.getModifier(messageType)}`
      : inputFieldClassModifier,
  );

  return (
    <div
      className={classNames("row af-form__group", {
        "af-form__group--required": actualRequired,
      })}
      role={roleContainer}
      aria-label={ariaLabelContainer}
    >
      <div className={classNameContainerLabel}>
        <label
          className={classNames("af-form__group-label", {
            "af-form__group-label--required": actualRequired,
          })}
          htmlFor={isLabelContainerLinkedToInput ? inputId : undefined}
        >
          {label}
        </label>
      </div>
      <div className={classNameContainerInput}>
        <div className={fieldContainerClassName}>
          {renderInput({ id: inputId, classModifier: inputClassModifier })}
          {children}
        </div>
        {forceDisplayMessage ? (
          <FieldError message={message} messageType={messageType} />
        ) : (
          <HelpMessage message={helpMessage} ariaDescribedBy={inputId} />
        )}
      </div>
    </div>
  );
};
