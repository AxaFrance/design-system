import { type ComponentProps, type ReactNode } from "react";
import { InputContainer } from "./InputContainer";
import { InputUnit } from "./InputUnit";
import { ItemMessage } from "./ItemMessage";
import { Label } from "./Label";
import { Select } from "./Select";
import type { InputBaseProps } from "./types";
import { useInput } from "./useInput.hook";

export type SelectInputProps = Omit<ComponentProps<typeof Select>, "children"> &
  InputBaseProps & {
    /**
     * The content of the select, as JSX.
     * This allows you to render `<option>` elements, and to group them with `<optgroup>`.
     *
     * @example
     * ```tsx
     * options={
     *   <optgroup label="Europe">
     *     <option value="FR">France</option>
     *     <option value="ES">Spain</option>
     *   </optgroup>
     * }
     * ```
     */
    options: ReactNode;

    /**
     * The text of the empty option rendered before the options, when no value is selected.
     * Pass `null` to not render any placeholder option.
     * @default "- Select -"
     */
    placeholder?: string | null;
  };

/**
 * This component renders a label, a select field and optionnally help and error messages.
 * It can be customized to render the label on top, or on the left of the select.
 * It also supports adding a unit on the right of the select.
 */

const SelectInput = ({
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
  options,
  placeholder = "- Select -",
  ...props
}: SelectInputProps) => {
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
      <Select
        {...props}
        className={inputClassName}
        id={inputId}
        aria-describedby={describedBy}
        aria-invalid={isInvalid}
      >
        {placeholder === null ? null : <option value="">{placeholder}</option>}
        {options}
      </Select>
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

SelectInput.displayName = "SelectInput";

export { SelectInput };
