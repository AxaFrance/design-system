import { ComponentProps, ReactNode, useId, useState } from "react";
import {
  FieldInput,
  HelpMessage,
  LegacyField,
  useInputClassModifier,
} from "../core";
import { Pass } from "./Pass";
import { useAriaInvalid } from "../core/useAriaInvalid";

const strengthList: Record<number, string> = {
  0: "bad",
  1: "okay",
  2: "good",
  3: "verygood",
  4: "excellent",
};

const calculateStrength = (score?: string | null) => {
  if (score === null || score === undefined) {
    return null;
  }

  const scoreToNumber = Number(score);
  let strength = Number.isNaN(scoreToNumber) ? 0 : scoreToNumber;
  if (strength > 4) {
    strength = 4;
  }
  if (strength < 0) {
    strength = 0;
  }
  return strengthList[strength];
};

type PassProps = ComponentProps<typeof Pass>;
type Props = ComponentProps<typeof LegacyField> &
  Omit<PassProps, "onToggleType" | "type"> & {
    helpMessage?: ReactNode;
    score?: string;
  };

const PassInput = ({
  message,
  children,
  helpMessage,
  id,
  disabled = false,
  label,
  messageType,
  isVisible,
  forceDisplayMessage,
  className,
  classModifier,
  classNameContainerLabel,
  classNameContainerInput,
  score,
  required,
  ...passProps
}: Props) => {
  const strength = calculateStrength(score);
  const classModifierStrength = [classModifier ?? "", strength ?? ""].join(" ");

  const [type, setType] = useState<PassProps["type"]>("password");
  const inputId = useId();
  const errorUseId = useId();
  const finalId = id ?? inputId;
  const { inputClassModifier, inputFieldClassModifier } = useInputClassModifier(
    classModifierStrength,
    disabled,
    Boolean(children),
    required,
  );
  const isInvalid = useAriaInvalid(message, forceDisplayMessage, messageType);

  return (
    <LegacyField
      label={label}
      message={message}
      messageType={messageType}
      isVisible={isVisible}
      forceDisplayMessage={forceDisplayMessage}
      className={className}
      id={finalId}
      classModifier={`${classModifierStrength} ${inputFieldClassModifier}`}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}
      errorId={errorUseId}
    >
      <FieldInput
        className="af-form__pass-container"
        classModifier={inputFieldClassModifier}
      >
        <Pass
          {...passProps}
          type={type}
          id={inputId}
          disabled={disabled}
          classModifier={inputClassModifier}
          aria-describedby={errorUseId}
          aria-invalid={isInvalid}
          onToggleType={() =>
            setType(type === "password" ? "text" : "password")
          }
        />
        {children}
        <HelpMessage message={helpMessage} isVisible={!message} />
      </FieldInput>
    </LegacyField>
  );
};

export { PassInput };
