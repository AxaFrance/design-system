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
  unit?: React.ReactNode;
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
      unit,
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
      "af-form__input-text",
      className,
      classModifier +
        (error || otherProps["aria-errormessage"] ? " error" : ""),
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
              id={idLabel}
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
            aria-errormessage={otherProps["aria-errormessage"] ?? idError}
            aria-invalid={Boolean(error || otherProps["aria-errormessage"])}
            aria-describedby={idHelp}
            {...otherProps}
          />
          {unit}
        </div>
        {helper && (
          <span id={idHelp} className="af-form__input-helper">
            {helper}
          </span>
        )}
        {!otherProps["aria-errormessage"] && error && (
          <InputError id={idError} message={error} />
        )}
      </div>
    );
  },
);

Text.displayName = "Text";

export { Text };
