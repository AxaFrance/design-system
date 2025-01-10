import "@axa-fr/design-system-look-and-feel-css/dist/Form/Text/Text.scss";
import {
  ComponentPropsWithRef,
  forwardRef,
  MouseEventHandler,
  useId,
} from "react";

import infoIcon from "@material-symbols/svg-400/outlined/info.svg";
import { Button } from "../..";
import { Variants } from "../../Button/Button";
import { Svg } from "../../Svg";
import { getComponentClassName } from "../../utilities";
import { InputError } from "../InputError";

type Props = ComponentPropsWithRef<"input"> & {
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
    const idError = useId();

    return (
      <div className="af-form__input-container">
        {(label || description || buttonLabel) && (
          <div className="af-form__label-container">
            <label htmlFor={inputId} className="af-form__input-label">
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
          </div>
        )}

        <input
          id={inputId}
          className={componentClassName}
          type="text"
          ref={inputRef}
          aria-errormessage={idError}
          aria-invalid={Boolean(error)}
          {...otherProps}
        />
        {helper && <span className="af-form__input-helper">{helper}</span>}
        {error && <InputError id={idError} message={error} />}
      </div>
    );
  },
);

Text.displayName = "Text";

export { Text };
