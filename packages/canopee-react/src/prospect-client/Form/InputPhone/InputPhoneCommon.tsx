import {
  type ChangeEvent,
  type ComponentProps,
  type ComponentPropsWithRef,
  type ComponentType,
  forwardRef,
  useId,
} from "react";
import { SingleValue } from "react-select";
import { Icon } from "../../Icon/IconCommon";
import { InputTextAtom } from "../InputTextAtom/InputTextAtomCommon";
import {
  ItemLabelCommon,
  type ItemLabelProps,
} from "../ItemLabel/ItemLabelCommon";
import {
  ItemMessage,
  type ItemMessageProps,
} from "../ItemMessage/ItemMessageCommon";
import { CountryCodeSelect } from "./CountryCodeSelect";
import { type OptionType } from "./InputPhone.types";
import { maskFrenchPhoneNumber } from "./maskFrenchPhoneNumber";

export type InputPhoneProps = ComponentPropsWithRef<"input"> & {
  classModifier?: string;
  helper?: string;
  /**
   * @deprecated Use `message` and messageType instead.
   */
  error?: string;
  /**
   * @deprecated Use `message` and messageType instead.
   */
  success?: string;
  defaultCountry?: string;
  showSelect?: boolean;
  disabled?: boolean;
  countryCodeOptions?: OptionType[];
  onChangeSelect?: (value: SingleValue<OptionType>) => void;
  onChangeInput?: (value: string) => void;
  mask?: (value: string) => string;
  label: ItemLabelProps["children"];
} & Pick<
    ItemLabelProps,
    | "description"
    | "moreButtonLabel"
    | "buttonLabel"
    | "onMoreButtonClick"
    | "onButtonClick"
    | "sideButtonLabel"
    | "onSideButtonClick"
  > &
  Pick<ItemMessageProps, "message" | "messageType">;

type InputPhoneCommonProps = InputPhoneProps & {
  ItemLabelComponent: ComponentType<
    Omit<ComponentProps<typeof ItemLabelCommon>, "ButtonComponent">
  >;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
  InputTextComponent: ComponentType<ComponentProps<typeof InputTextAtom>>;
  IconComponent: ComponentType<ComponentProps<typeof Icon>>;
};

const InputPhoneCommon = forwardRef<HTMLInputElement, InputPhoneCommonProps>(
  (
    {
      className,
      classModifier = "",
      helper,
      error,
      success,
      message,
      messageType,
      defaultCountry,
      showSelect,
      disabled,
      label,
      description,
      buttonLabel,
      moreButtonLabel,
      onButtonClick,
      onMoreButtonClick,
      required,
      sideButtonLabel,
      onSideButtonClick,
      countryCodeOptions = [],
      onChangeSelect,
      onChangeInput,
      mask = maskFrenchPhoneNumber,
      ItemLabelComponent,
      ItemMessageComponent,
      InputTextComponent,
      IconComponent,
      "aria-errormessage": ariaErrormessage,
      ...otherProps
    },
    inputRef,
  ) => {
    let inputId = useId();
    inputId = otherProps.id || inputId;
    const idMessage = useId();
    const idHelp = useId();

    const ariaDescribedby = [helper && idHelp, success && idMessage].filter(
      Boolean,
    ) as string[];

    const hasError =
      (Boolean(message) && messageType === "error") || Boolean(error);

    /**
     * Gère le changement de valeur du champ numéro de téléphone.
     * - Récupère une fonction de masquage (mask) depuis les props ou utilise une version par défaut.
     * - La fonction de masquage par défaut :
     *   - Ne garde que les chiffres (supprime tout le reste).
     *   - Limite à 10 chiffres.
     *   - Formate par groupes de 2 chiffres séparés par un espace (ex: 06 12 34 56 78).
     * - Applique le masquage à la valeur saisie et transmet le résultat via onChangeInput.
     */
    const handleChangeNumber = (e: ChangeEvent<HTMLInputElement>) => {
      const input = e.target;
      const rawValue = input.value;
      const maskedValue = mask(rawValue);

      onChangeInput?.(maskedValue);
    };

    return (
      <div className="af-form__input-phone-container">
        <ItemLabelComponent
          description={description}
          moreButtonLabel={moreButtonLabel ?? buttonLabel}
          onMoreButtonClick={onMoreButtonClick ?? onButtonClick}
          sideButtonLabel={sideButtonLabel}
          onSideButtonClick={onSideButtonClick}
          required={required}
          htmlFor={inputId}
        >
          {label}
        </ItemLabelComponent>

        <div className="af-form__input-phone-fields">
          {showSelect ? (
            <div className="af-form__country-code-wrapper">
              <CountryCodeSelect
                options={countryCodeOptions}
                defaultCountry={defaultCountry}
                onChangeSelect={onChangeSelect}
                IconComponent={IconComponent}
                disabled={disabled}
              />
            </div>
          ) : null}
          <InputTextComponent
            {...otherProps}
            className={["af-form__input-phone", className]
              .filter(Boolean)
              .join(" ")}
            classModifier={classModifier}
            ref={inputRef}
            error={hasError ? messageType || error : undefined}
            type="tel"
            required={required}
            placeholder={otherProps.placeholder}
            aria-errormessage={ariaErrormessage}
            value={otherProps.value}
            onChange={handleChangeNumber}
            disabled={disabled}
            idMessage={hasError ? idMessage : undefined}
            idHelp={
              ariaDescribedby.length > 0 ? ariaDescribedby.join(" ") : undefined
            }
            id={inputId}
          />
        </div>

        {helper ? (
          <span id={idHelp} className="af-form__input-phone-helper">
            {helper}
          </span>
        ) : null}

        <ItemMessageComponent
          id={idMessage}
          message={message || error || success}
          messageType={messageType || (error ? "error" : "success")}
        />
      </div>
    );
  },
);
InputPhoneCommon.displayName = "InputPhone";

export { InputPhoneCommon };
