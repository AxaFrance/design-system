import "@axa-fr/design-system-css/dist/Form/Select/Client/Select.client.scss";
import ErrorOutline from "@material-design-icons/svg/outlined/error_outline.svg";
import ReactSelect, {
  ActionMeta,
  ContainerProps,
  GroupBase,
  OptionProps,
  SingleValue,
  SingleValueProps,
} from "react-select";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import classNames from "classnames";
import { DropdownIndicator } from "./DropdownIndicator";
import { Svg } from "../../../Svg";

type Props = Omit<
  ComponentPropsWithoutRef<ReactSelect>,
  "placeholder" | "noOptionsMessage"
> & {
  id: string;
  label: string;
  options: { label: string; value?: string | number | readonly string[] }[];
  value: SingleValue<string>;
  errorLabel?: string;
  placeholder?: string;
  noOptionsMessage?: string;
  onChange: (
    newValue: SingleValue<string>,
    actionMeta: ActionMeta<string>,
  ) => void;
  disabled?: boolean;
  required?: boolean;
};

const Select = ({
  id,
  required,
  disabled,
  placeholder,
  label,
  value,
  errorLabel,
  options,
  noOptionsMessage,
  onChange,
  ...otherProps
}: PropsWithChildren<Props>) => {
  return (
    <>
      {label && (
        <label htmlFor={id} className="af-form__select-label">
          {label}
          {required && <span> *</span>}
        </label>
      )}
      <ReactSelect
        id={id}
        unstyled
        isDisabled={disabled}
        noOptionsMessage={() => noOptionsMessage || "Aucun résultat"}
        components={{
          DropdownIndicator,
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
        placeholder={placeholder}
        value={value}
        options={options}
        onChange={onChange}
        {...otherProps}
      />
      {errorLabel && (
        <div className="af-form__select-error">
          <Svg
            src={ErrorOutline}
            width={16}
            className="af-form__select-error-icon"
          />
          {errorLabel}
        </div>
      )}
    </>
  );
};

Select.displayName = "Select";

export { Select };
