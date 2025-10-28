import { ComponentProps, ComponentType, useState } from "react";
import Select, { SingleValue } from "react-select";
import { OptionType } from "./InputPhone.types";
import { Icon } from "../../Icon/IconCommon";

const CountryCodeSelect = ({
  options,
  defaultCountry,
  onChangeSelect,
  IconComponent,
  disabled,
}: {
  options: OptionType[];
  defaultCountry?: string;
  onChangeSelect?: (value: SingleValue<OptionType>) => void;
  IconComponent: ComponentType<ComponentProps<typeof Icon>>;
  disabled?: boolean;
}) => {
  const defaultOption = options.find(
    (option) => option.code === (defaultCountry ?? "+33"),
  );
  const [selectedOption, setSelectedOption] = useState<OptionType | undefined>(
    defaultOption,
  );

  const customStyles = {
    control: (provided: Record<string, unknown>) => ({
      ...provided,
      margin: 0,
    }),
    dropdownIndicator: (provided: Record<string, unknown>) => ({
      ...provided,
      display: "none",
    }),
    indicatorSeparator: (provided: Record<string, unknown>) => ({
      ...provided,
      display: "none",
    }),
    singleValue: (provided: Record<string, unknown>) => ({
      ...provided,
      color: "inherit",
    }),
  };

  const formatOptionLabel = ({ flag, code }: OptionType) => (
    <div className="country-code-select-format-label">
      <IconComponent src={flag} />
      {code}
    </div>
  );

  const handleChange = (newValue: SingleValue<OptionType>) => {
    setSelectedOption(newValue ?? undefined);
    if (newValue) onChangeSelect?.(newValue);
  };

  return (
    <Select
      classNamePrefix="country-code-select"
      styles={customStyles}
      options={options}
      value={selectedOption}
      onChange={handleChange}
      formatOptionLabel={formatOptionLabel}
      aria-label="Select country code"
      getOptionValue={(option) => option.code}
      isDisabled={disabled}
    />
  );
};

export { CountryCodeSelect };
