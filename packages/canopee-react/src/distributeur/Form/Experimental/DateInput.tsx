import { type ComponentProps } from "react";
import { formatDateInputValue } from "../../utilities/helpers/date";
import { Input } from "./Input";
import { InputContainer } from "./InputContainer";
import { InputUnit } from "./InputUnit";
import { ItemMessage } from "./ItemMessage";
import { Label } from "./Label";
import type { InputBaseProps } from "./types";
import { useInput } from "./useInput.hook";

export type DateInputProps = Omit<
  ComponentProps<typeof Input>,
  "children" | "type" | "value" | "defaultValue" | "min" | "max"
> &
  InputBaseProps & {
    /**
     * The value of the date input, as a `Date` or an ISO date string (`YYYY-MM-DD`).
     */
    value?: Date | string;

    /**
     * The default value of the date input, as a `Date` or an ISO date string (`YYYY-MM-DD`).
     */
    defaultValue?: Date | string;

    /**
     * The earliest selectable date, as a `Date` or an ISO date string (`YYYY-MM-DD`).
     */
    min?: Date | string;

    /**
     * The latest selectable date, as a `Date` or an ISO date string (`YYYY-MM-DD`).
     */
    max?: Date | string;
  };

/**
 * This component renders a label, a date input field and optionnally help and error messages.
 * It can be customized to render the label on top, or on the left of the input.
 * It also supports adding a unit on the right of the input.
 */

const DateInput = ({
  contentRight,
  id,
  labelPosition,
  inputClassName: inputClassNameProp,
  labelClassName: labelClassNameProp,
  helpMessage,
  containerClassName,
  required,
  label,
  errorMessage,
  value,
  defaultValue,
  min,
  max,
  ...props
}: DateInputProps) => {
  const {
    describedBy,
    errorId,
    helperId,
    inputClassName,
    inputId,
    isContainerVertical,
    isInvalid,
    labelClassName,
  } = useInput({
    id,
    labelPosition,
    inputClassName: inputClassNameProp,
    labelClassName: labelClassNameProp,
    errorMessage,
    helpMessage,
  });

  return (
    <InputContainer
      vertical={isContainerVertical}
      className={containerClassName}
    >
      <Label htmlFor={inputId} required={required} className={labelClassName}>
        {label}
      </Label>
      <Input
        {...props}
        type="date"
        value={formatDateInputValue(value)}
        defaultValue={formatDateInputValue(defaultValue)}
        min={formatDateInputValue(min)}
        max={formatDateInputValue(max)}
        className={inputClassName}
        id={inputId}
        aria-describedby={describedBy}
        aria-invalid={isInvalid}
      />
      {contentRight ? <InputUnit>{contentRight}</InputUnit> : null}
      {helpMessage ? (
        <ItemMessage id={helperId}>{helpMessage}</ItemMessage>
      ) : null}
      {errorMessage ? (
        <ItemMessage variant="error" id={errorId}>
          {errorMessage}
        </ItemMessage>
      ) : null}
    </InputContainer>
  );
};

DateInput.displayName = "DateInput";

export { DateInput };
