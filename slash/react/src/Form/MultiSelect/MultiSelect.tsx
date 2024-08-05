import { useId } from "react";
import ReactSelect, { GroupBase, Options, type MultiValue } from "react-select";
import ReactSelectAsync, { AsyncProps } from "react-select/async";

type Option = { value: string; label: string };
type Props = Omit<
  AsyncProps<Option, true, GroupBase<Option>>,
  "value" | "isDisabled" | "onChange"
> & {
  onChange?: (data: onChangeProps) => void;
  values?: string[] | null;
  value?: string;
  disabled?: boolean;
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
  placeholder = "Select",
  className = "react-select",
  disabled,
  loadingMessage = () => "Chargement...",
  ...otherProps
}: Props) => {
  const generatedId = useId();
  const inputId = id || generatedId;

  const handleOnChange = (newValue: MultiValue<Option> | Option) => {
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
    ...otherProps,
  };

  if (values) {
    const newValues = (options as Options<Option>).filter((opt) =>
      values.includes(opt.value),
    );

    return loadOptions ? (
      <ReactSelectAsync
        {...commonProps}
        isMulti
        value={newValues}
        loadOptions={loadOptions}
        loadingMessage={loadingMessage}
      />
    ) : (
      <ReactSelect {...commonProps} isMulti value={newValues} />
    );
  }
  const newValue = (options as Options<Option>).find((o) => o.value === value);

  const commonValueProps = {
    ...commonProps,
    multi: false,
    value: newValue,
  };

  return loadOptions ? (
    <ReactSelectAsync
      {...commonValueProps}
      loadOptions={loadOptions}
      loadingMessage={loadingMessage}
    />
  ) : (
    <ReactSelect {...commonValueProps} />
  );
};

export { MultiSelect };
