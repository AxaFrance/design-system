import "@axa-fr/design-system-look-and-feel-css/dist/Form/Select/Client/Select.client.scss";
import ErrorOutline from "@material-symbols/svg-400/outlined/error.svg";
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
import { CustomOption } from "./CustomOption";

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
  label,
  errorLabel,
  noOptionsMessage,
  ...otherProps
}: PropsWithChildren<Props>) => {
  return (
    <>
      {label && (
        <label
          id={`${id}__label`}
          htmlFor={`${id}__input`}
          className="af-form__select-label"
        >
          {label}
          {required && <span> *</span>}
        </label>
      )}
      <ReactSelect
        inputId={`${id}__input`}
        aria-labelledby={`${id}__label`}
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
