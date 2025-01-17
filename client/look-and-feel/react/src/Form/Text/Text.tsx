import "@axa-fr/design-system-look-and-feel-css/dist/Form/Text/Text.scss";
import {
  ComponentPropsWithRef,
  forwardRef,
  MouseEventHandler,
  useId,
} from "react";

import infoIcon from "@material-symbols/svg-400/outlined/info.svg";
import euroSymbolIcon from "@material-symbols/svg-400/outlined/euro_symbol.svg";

import { Button } from "../..";
import { Variants } from "../../Button/Button";
import { Svg } from "../../Svg";
import { getComponentClassName } from "../../utilities";
import { InputError } from "../InputError";

enum TextVariants {
  currency = "currency",
  years = "years",
}

type Props = ComponentPropsWithRef<"input"> & {
  variant?: TextVariants;
  classModifier?: string;
  helper?: string;
  error?: string;
  description?: string;
  label?: string;
  buttonLabel?: string;
  onButtonClick?: MouseEventHandler<HTMLButtonElement>;
};

const Text = forwardRef<HTMLInputElement, Props>(
  (
    {
      variant,
      className,
      classModifier = "",
      label,
      description,
      helper,
      error,
      buttonLabel,
      onButtonClick,
      required,
      ...otherProps
    },
    inputRef,
  ) => {
    const componentClassName = getComponentClassName(
      className,
      classModifier,
      "af-form__input-text",
    );

    let inputId = useId();
    inputId = otherProps.id || inputId;
    const idDescription = useId();
    const idError = useId();
    const idHelp = useId();
    const idLabel = useId();

    return (
      <div className="af-form__input-container">
        {(label || description || buttonLabel) && (
          <div className="af-form__label-container">
            <label
              htmlFor={inputId}
              aria-describedby={idDescription}
              className="af-form__input-label"
            >
              {label} {required && <span aria-hidden="true"> *</span>}
            </label>
            {description && (
              <span id={idDescription} className="af-form__input-description">
                {description}
              </span>
            )}
            {buttonLabel && (
              <Button
                className="af-form__input-more"
                variant={Variants.ghost}
                iconLeft={<Svg src={infoIcon} />}
                onClick={onButtonClick}
              >
                {buttonLabel}
              </Button>
            )}
          </div>
        )}

        <div className="af-form__input-variant">
          <input
            id={inputId}
            className={componentClassName}
            type="text"
            ref={inputRef}
            aria-labelledby={idLabel}
            aria-errormessage={idError}
            aria-invalid={Boolean(error)}
            aria-describedby={idHelp}
            {...otherProps}
          />
          {variant === TextVariants.currency && (
            <Svg
              src={euroSymbolIcon}
              id={idLabel}
              aria-label={`${label} en euros`}
              className="af-form__input-icon"
            />
          )}
          {variant === TextVariants.years && (
            <span
              id={idLabel}
              aria-label={`${label} en années`}
              className="af-form__input-icon"
            >
              ans
            </span>
          )}
        </div>
        {helper && (
          <span id={idHelp} className="af-form__input-helper">
            {helper}
          </span>
        )}
        {error && <InputError id={idError} message={error} />}
      </div>
    );
  },
);

Text.displayName = "Text";

export { Text, TextVariants };
