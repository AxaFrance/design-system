import "@axa-fr/design-system-look-and-feel-css/dist/Form/Select/Select.scss";
import ReactSelect, {
  ActionMeta,
  ContainerProps,
  GroupBase,
  OptionProps,
  SelectInstance,
  SingleValue,
  SingleValueProps,
} from "react-select";
import { ComponentPropsWithRef, forwardRef, useId } from "react";
import classNames from "classnames";
import { DropdownIndicator } from "./DropdownIndicator";
import { CustomOption } from "./CustomOption";
import { defaultAriaLiveMessages } from "./arialiveMessagesDefault";
import { InputError } from "../InputError";

type Option = { label: string; value: string | number };

type Props = Omit<
  ComponentPropsWithRef<ReactSelect>,
  "placeholder" | "noOptionsMessage"
> & {
  id: string;
  label: string;
  options: { label: string; value?: string | number | readonly string[] }[];
  value: Option | null;
  errorLabel?: string;
  placeholder?: string;
  noOptionsMessage?: string;
  onChange: (
    newValue: SingleValue<Option>,
    actionMeta: ActionMeta<string>,
  ) => void;
  disabled?: boolean;
  required?: boolean;
};

const Select = forwardRef<
  SelectInstance<unknown, boolean, GroupBase<unknown>>,
  Props
>(
  (
    {
      id,
      required,
      disabled,
      label,
      errorLabel,
      noOptionsMessage,
      ...otherProps
    },
    inputRef,
  ) => {
    const idError = useId();
    let inputId = useId();
    inputId = id || inputId;

    return (
      <>
        {label && (
          <label htmlFor={inputId} className="af-form__select-label">
            {label}
            {required && <span aria-hidden="true"> *</span>}
          </label>
        )}
        <ReactSelect
          inputId={inputId}
          aria-errormessage={idError}
          aria-invalid={Boolean(errorLabel)}
          ariaLiveMessages={defaultAriaLiveMessages}
          screenReaderStatus={({ count }: { count: number }) =>
            `${count} résultat${count > 1 ? "s" : ""} disponible${count > 1 ? "s" : ""}`
          }
          unstyled
          isDisabled={disabled}
          noOptionsMessage={() => noOptionsMessage || "Aucun résultat"}
          components={{
            DropdownIndicator,
            Option: CustomOption,
          }}
          classNames={{
            control: () => "af-form__input-select",
            menu: () => "af-form__input-select-menu",
            menuList: () => "af-form__select-menu-list",
            container: ({
              isFocused,
              isDisabled,
              selectProps: { menuIsOpen },
            }: ContainerProps<unknown, boolean, GroupBase<unknown>>) =>
              classNames(
                "af-form__input-select-container",
                isFocused && "af-form__input-select-container-focused",
                isDisabled && "af-form__input-select-container-disabled",
                errorLabel &&
                  !isFocused &&
                  !menuIsOpen &&
                  "af-form__input-select-container-error",
              ),
            option: ({
              isSelected,
              isFocused,
            }: OptionProps<unknown, boolean, GroupBase<unknown>>) =>
              classNames(
                "af-form__input-select-menu-options",
                isSelected && "af-form__input-select-menu-options-selected",
                isFocused && "af-form__input-select-menu-options-focused",
              ),
            singleValue: ({
              isDisabled,
            }: SingleValueProps<unknown, boolean, GroupBase<unknown>>) =>
              classNames(
                "af-form__select-single-value",
                isDisabled && "af-form__select-single-value-disabled",
              ),
            dropdownIndicator: () => "af-form__select-dropdown-indicator",
          }}
          className="af-form__input-select"
          {...otherProps}
          ref={inputRef}
        />
        {errorLabel && <InputError id={idError} message={errorLabel} />}
      </>
    );
  },
);

Select.displayName = "Select";

export { Select };
