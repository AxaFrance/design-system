import { useId } from "react";
import Select, {
  type GroupBase,
  type Options,
  type SingleValue,
  type MultiValue,
} from "react-select";
import AsyncSelect, { AsyncProps } from "react-select/async";
import { ValueContainer } from "./ValueContainer";
import "@axa-fr/design-system-slash-css/dist/Form/MultiSelect/MultiSelect.scss";
import { formatOptionLabel } from "./FormatOptionLabel";
import { useMultiSelectStyle } from "./useMultiSelectStyle";
import { noOptionsMessage } from "./NoOptionsMessage";

type Option = { value: string; label: string };
type Props = Omit<
  AsyncProps<Option, true, GroupBase<Option>>,
  "value" | "isDisabled" | "onChange"
> & {
  onChange?: (data: onChangeProps) => void;
  values?: string[] | null;
  value?: string;
  disabled?: boolean;
  selectedLimit?: number;
  selectedLimitLabel?: string;
};
type onChangeProps = {
  id: string;
  name: string;
  values?: string[];
  value?: string;
};

const MultiSelect = ({
  id,
  name,
  loadOptions,
  values,
  options,
  value,
  onChange,
  onBlur,
  placeholder = "- Sélectionner -",
  className = "react-select",
  disabled,
  loadingMessage = () => "Chargement...",
  isMulti,
  selectedLimit,
  selectedLimitLabel,
  ...otherProps
}: Props) => {
  const { styles } = useMultiSelectStyle();
  const generatedId = useId();
  const inputId = id || generatedId;

  const handleOnChange = (
    newValue: SingleValue<Option> | MultiValue<Option>,
  ) => {
    if (!onChange) return;

    let onChangeProps: onChangeProps = {
      name: name ?? "",
      id: inputId,
    };

    if (values) {
      onChangeProps = {
        ...onChangeProps,
        values: ((newValue as Option[]) || []).map((v) => v.value),
      };
    } else {
      onChangeProps = {
        ...onChangeProps,
        value: (newValue as Option)?.value,
      };
    }

    onChange(onChangeProps);
  };

  const commonProps = {
    inputId,
    name,
    onChange: handleOnChange,
    onBlur,
    placeholder,
    className,
    isDisabled: disabled,
    options,
    valueKey: "value",
    labelKey: "label",
    styles,
    isMulti,
    noOptionsMessage,
    isClearable: true,
    hideSelectedOptions: false,
    components: { ValueContainer },
    closeMenuOnSelect: !values,
    ...otherProps,
  };

  if (values) {
    const newValues = (options as Options<Option>).filter((opt) =>
      values.includes(opt.value),
    );

    const commonValuesProps = {
      ...commonProps,
      value: newValues,
      formatOptionLabel,
      selectedLimit,
      selectedLimitLabel,
    };

    return loadOptions ? (
      <AsyncSelect
        {...commonValuesProps}
        loadOptions={loadOptions}
        loadingMessage={loadingMessage}
        isMulti
      />
    ) : (
      <Select {...commonValuesProps} isMulti />
    );
  }
  const newValue = (options as Options<Option>).find((o) => o.value === value);

  const commonValueProps = {
    ...commonProps,
    multi: false,
    value: newValue,
  };

  return loadOptions ? (
    <AsyncSelect
      {...commonValueProps}
      loadOptions={loadOptions}
      loadingMessage={loadingMessage}
    />
  ) : (
    <Select {...commonValueProps} />
  );
};

export { MultiSelect, type Option };
