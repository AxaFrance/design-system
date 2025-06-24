import {
  type ComponentProps,
  type ComponentPropsWithRef,
  type ComponentType,
  forwardRef,
  useId,
} from "react";
import { SingleValue } from "react-select";
import { ItemLabel } from "../ItemLabel/ItemLabelCommon";
import { getComponentClassName } from "../../utilities/getComponentClassName";
import { ItemMessage } from "../ItemMessage/ItemMessageCommon";
import { InputTextAtom } from "../InputTextAtom/InputTextAtomCommon";
import { Icon } from "../../Icon/IconCommon";
import { OptionType } from "./InputPhone.types";
import { CountryCodeSelect } from "./CountryCodeSelect";

type InputPhoneProps = ComponentPropsWithRef<"input"> & {
  classModifier?: string;
  helper?: string;
  error?: string;
  success?: string;
  defaultCountry?: string;
  showSelect?: boolean;
  disabled?: boolean;
  countryCodeOptions?: OptionType[];
  onChangeSelect?: (value: SingleValue<OptionType>) => void;
  onChangeInput?: (value: string) => void;
  mask?: (value: string) => string;
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
      disabled,
      label,
      description,
      buttonLabel,
      onButtonClick,
      required,
      sideButtonLabel,
      onSideButtonClick,
      countryCodeOptions = [],
      onChangeSelect,
      onChangeInput,
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

    const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {
        mask = (value: string) => {
          let numericValue = value.replace(/[^0-9]/g, "");
          numericValue = numericValue.slice(0, 10);
          let formattedValue = "";
          for (let i = 0; i < numericValue.length; i += 2) {
            formattedValue += numericValue.slice(i, i + 2);
            if (i + 2 < numericValue.length) {
              formattedValue += " ";
            }
          }
          return formattedValue;
        },
      } = otherProps as { mask?: (value: string) => string };

      const input = e.target;
      const rawValue = input.value;
      const maskedValue = mask(rawValue);

      onChangeInput?.(maskedValue);
    };

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
              <CountryCodeSelect
                options={countryCodeOptions}
                defaultCountry={defaultCountry}
                onChangeSelect={onChangeSelect}
                IconComponent={IconComponent}
                disabled={disabled}
              />
            </div>
          )}
          <InputTextComponent
            className={componentClassName}
            ref={inputRef}
            error={error}
            type="tel"
            required={required}
            placeholder={otherProps.placeholder}
            aria-errormessage={ariaErrormessage}
            value={otherProps.value}
            onChange={handleChangeNumber}
            disabled={disabled}
            idLabel={idLabel}
            idMessage={idMessage}
            idHelp={idHelp}
            id={inputId}
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
