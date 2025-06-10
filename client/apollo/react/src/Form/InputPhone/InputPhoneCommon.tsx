import {
  type ComponentProps,
  type ComponentPropsWithRef,
  type ComponentType,
  forwardRef,
  useId,
  useEffect,
  useState,
} from "react";
import Select, { SingleValue } from "react-select";
import { ItemLabel } from "../ItemLabel/ItemLabelCommon";
import { getComponentClassName } from "../../utilities/getComponentClassName";
import { ItemMessage } from "../ItemMessage/ItemMessageCommon";
import { InputTextAtom } from "../InputTextAtom/InputTextAtomCommon";
import { Icon } from "../../Icon/IconCommon";

const importAllFlags = async () => {
  const flagModules = import.meta.glob<{ default: string }>("./Flags/*.svg");
  const flagPromises = Object.keys(flagModules).map(async (path) => {
    const code = path
      .replace("./Flags/", "")
      .replace(".svg", "")
      .replace(/^.*_/, "");
    const module = await flagModules[path]();
    return { code, flag: module.default };
  });
  const flags = await Promise.all(flagPromises);
  return flags.sort((a, b) => a.code.localeCompare(b.code));
};

type InputPhoneProps = ComponentPropsWithRef<"input"> & {
  unit?: React.ReactNode;
  classModifier?: string;
  helper?: string;
  error?: string;
  success?: string;
  defaultCountry?: string;
  showSelect?: boolean;
  label: ComponentProps<typeof ItemLabel>["label"];
  ItemLabelComponent: ComponentType<
    Omit<ComponentProps<typeof ItemLabel>, "ButtonComponent">
  >;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
  InputTextComponent: ComponentType<ComponentProps<typeof InputTextAtom>>;
  IconComponent: ComponentType<ComponentProps<typeof Icon>>;
} & Partial<ComponentPropsWithRef<typeof ItemLabel>>;

const InputPhone = forwardRef<HTMLInputElement, InputPhoneProps>(
  (
    {
      className,
      classModifier = "",
      helper,
      error,
      success,
      defaultCountry,
      showSelect,
      label,
      description,
      buttonLabel,
      onButtonClick,
      required,
      sideButtonLabel,
      onSideButtonClick,
      ItemLabelComponent,
      ItemMessageComponent,
      InputTextComponent,
      IconComponent,
      "aria-errormessage": ariaErrormessage,
      ...otherProps
    },
    inputRef,
  ) => {
    const componentClassName = getComponentClassName(
      "af-form__input-phone",
      className,
      classModifier + (error || ariaErrormessage ? " error" : ""),
    );

    let inputId = useId();
    inputId = otherProps.id || inputId;
    const idMessage = useId();
    const idLabel = useId();
    const idHelp = useId();
    const [selectedOption, setSelectedOption] = useState<OptionType>();
    const [options, setOptions] = useState<OptionType[]>([]);

    type OptionType = {
      labelCode: string;
      value: string;
      flag: string;
    };

    const formatOptionLabel = ({ labelCode, flag }: OptionType) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <IconComponent src={flag} />
        {labelCode}
      </div>
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
    };

    const handleChange = (newValue: SingleValue<OptionType>) => {
      setSelectedOption(newValue as OptionType);
    };

    const [value, setValue] = useState("");

    const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
      let numericValue = e.target.value.replace(/[^0-9]/g, "");
      numericValue = numericValue.slice(0, 10);
      let formattedValue = "";
      for (let i = 0; i < numericValue.length; i += 2) {
        formattedValue += numericValue.slice(i, i + 2);
        if (i + 2 < numericValue.length) {
          formattedValue += " ";
        }
      }

      setValue(formattedValue);
    };

    useEffect(() => {
      importAllFlags().then((flagsImported) => {
        const loadedOptions = flagsImported.map(({ code, flag }) => ({
          value: code,
          labelCode: code.toUpperCase(),
          flag,
        }));
        setOptions(loadedOptions);
        const defaultOption = loadedOptions.find(
          (option) => option.value === (defaultCountry ?? "+33"),
        );
        setSelectedOption(defaultOption);
      });
    }, []);

    return (
      <div className="af-form__input-phone-container">
        <ItemLabelComponent
          label={label}
          description={description}
          buttonLabel={buttonLabel}
          onButtonClick={onButtonClick}
          sideButtonLabel={sideButtonLabel}
          onSideButtonClick={onSideButtonClick}
          required={required}
          inputId={inputId}
          idLabel={idLabel}
        />

        <div className="af-form__input-phone-fields">
          {showSelect && (
            <div className="af-form__country-code-wrapper">
              <Select
                classNamePrefix="country-code-select"
                styles={customStyles}
                options={options}
                value={selectedOption}
                onChange={handleChange}
                formatOptionLabel={formatOptionLabel}
                aria-label="Select country code"
                getOptionValue={(option) => option.value}
              />
            </div>
          )}
          <InputTextComponent
            className={componentClassName}
            ref={inputRef}
            error={error}
            type="tel"
            required={required}
            placeholder={otherProps.placeholder ?? "07 89 10 11 12"}
            aria-errormessage={ariaErrormessage}
            value={value}
            onChange={handleChangeNumber}
          />
        </div>

        {helper && (
          <span id={idHelp} className="af-form__input-phone-helper">
            {helper}
          </span>
        )}

        <ItemMessageComponent
          id={idMessage}
          message={error || success}
          messageType={error ? "error" : "success"}
        />
      </div>
    );
  },
);
InputPhone.displayName = "InputPhone";

export { InputPhone };
