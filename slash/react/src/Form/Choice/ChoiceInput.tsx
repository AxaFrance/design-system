import { forwardRef, useId, type ComponentProps } from "react";
import { LegacyField, useInputClassModifier, useOptionsWithId } from "../core";
import { Choice } from "./Choice";
import { useAriaInvalid } from "../core/useAriaInvalid";

type Props = ComponentProps<typeof Choice> &
  Omit<ComponentProps<typeof LegacyField>, "children">;

const defaultOptions = [
  { label: "Oui", value: true },
  { label: "Non", value: false },
];

const ChoiceInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      id,
      name,
      messageType,
      message,
      className,
      classModifier,
      isVisible,
      classNameContainerLabel,
      classNameContainerInput,
      label,
      forceDisplayMessage,
      options = defaultOptions,
      disabled,
      required,
      ...otherProps
    },
    inputRef,
  ) => {
    const errorUseId = useId();
    const newOptions = useOptionsWithId(
      options.map((o) => ({
        ...o,
        value: `${o.value}`,
      })),
    );

    const { inputClassModifier, inputFieldClassModifier } =
      useInputClassModifier(
        classModifier ?? "",
        disabled ?? false,
        false,
        required,
      );

    const firstId = newOptions?.[0]?.id ?? "";
    const choiceOptions = newOptions.map((o) => ({
      ...o,
      value: o.value === "true",
    }));
    const isInvalid = useAriaInvalid(message, forceDisplayMessage, messageType);
    return (
      <LegacyField
        label={label}
        id={firstId}
        message={message}
        messageType={messageType}
        isVisible={isVisible}
        forceDisplayMessage={forceDisplayMessage}
        className={className}
        classModifier={inputFieldClassModifier}
        classNameContainerLabel={classNameContainerLabel}
        classNameContainerInput={classNameContainerInput}
        errorId={errorUseId}
      >
        <Choice
          {...otherProps}
          id={id}
          name={name}
          ref={inputRef}
          classModifier={inputClassModifier}
          options={options ? choiceOptions : undefined}
          required={required}
          disabled={disabled}
          aria-describedby={errorUseId}
          aria-invalid={isInvalid}
        />
      </LegacyField>
    );
  },
);

ChoiceInput.displayName = "ChoiceInput";

export { ChoiceInput };
