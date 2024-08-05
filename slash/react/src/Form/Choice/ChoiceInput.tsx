import { forwardRef, type ComponentProps } from "react";
import { Field, useOptionsWithId } from "../core";
import { Choice } from "./Choice";

type Props = ComponentProps<typeof Choice> &
  Omit<ComponentProps<typeof Field>, "children">;

const defaultOptions = [
  { label: "Oui", value: true, id: "radioItemTrue" },
  { label: "Non", value: false, id: "radioItemFalse" },
];

const ChoiceInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      id,
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
      ...otherProps
    },
    inputRef,
  ) => {
    const newOptions = useOptionsWithId(
      options.map((o) => ({ ...o, value: `${o.value}` })),
      id,
    );
    const firstId = newOptions?.[0]?.id ?? "";
    const choiceOptions = newOptions.map((o) => ({
      ...o,
      value: o.value === "true",
    }));
    return (
      <Field
        label={label}
        id={firstId}
        message={message}
        messageType={messageType}
        isVisible={isVisible}
        forceDisplayMessage={forceDisplayMessage}
        className={className}
        classModifier={classModifier}
        classNameContainerLabel={classNameContainerLabel}
        classNameContainerInput={classNameContainerInput}
      >
        <Choice
          {...otherProps}
          id={id}
          ref={inputRef}
          classModifier={classModifier}
          options={options ? choiceOptions : undefined}
          required={classModifier?.includes("required")}
        />
      </Field>
    );
  },
);

ChoiceInput.displayName = "ChoiceInput";

export { ChoiceInput };
