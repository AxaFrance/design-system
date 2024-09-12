import "@axa-fr/design-system-look-and-feel-css/dist/Form/Text/Text.scss";
import { ComponentPropsWithRef, forwardRef, MouseEventHandler } from "react";

import infoIcon from "@material-symbols/svg-400/outlined/info.svg";
import { Button } from "../..";
import { Variants } from "../../Button/Button";
import { Svg } from "../../Svg";
import { getComponentClassName } from "../../utilities";
import { InputError } from "../InputError";

type Props = Omit<ComponentPropsWithRef<"input">, "required"> & {
  classModifier?: string;
  helper?: string;
  error?: string;
  description?: string;
  label?: string;
  required?: boolean;
  buttonLabel?: string;
  onButtonClick?: MouseEventHandler<HTMLButtonElement>;
};

const Text = forwardRef<HTMLInputElement, Props>(
  ({ className, classModifier = "", ...otherProps }, inputRef) => {
    const componentClassName = getComponentClassName(
      className,
      classModifier,
      "af-form__input-text",
    );

    const {
      id,
      label,
      required,
      disabled,
      description,
      helper,
      error,
      buttonLabel,
      onButtonClick,
    } = otherProps;

    return (
      <div className="af-form__input-container">
        <label htmlFor={id} className="af-form__input-label">
          {label} {required && <span> *</span>}
        </label>
        {description && (
          <span className="af-form__input-description">{description}</span>
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
        <input
          className={componentClassName}
          type="text"
          ref={inputRef}
          required={required}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          {...otherProps}
        />
        {helper && <span className="af-form__input-helper">{helper}</span>}
        {error && <InputError id={`${id}-error`} message={error} />}
      </div>
    );
  },
);

Text.displayName = "Text";

export { Text };
