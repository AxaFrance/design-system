import {
  ComponentPropsWithRef,
  forwardRef,
  MouseEventHandler,
  useId,
} from "react";
import infoIcon from "@material-symbols/svg-400/outlined/info.svg";
import { getComponentClassName } from "../core";
import { Button, Svg } from "../..";
import { Variants } from "../../Button/Button";
import { InputError } from "../InputError";

type Props = ComponentPropsWithRef<"textarea"> & {
  classModifier?: string;
  helper?: string;
  error?: string;
  description?: string;
  label?: string;
  buttonLabel?: string;
  onButtonClick?: MouseEventHandler<HTMLButtonElement>;
};

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
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
      "af-form__input-textarea",
      className,
      classModifier,
    );

    let inputId = useId();
    inputId = otherProps.id || inputId;
    const idError = useId();

    return (
      <div className="af-form__input-container">
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
        <textarea
          id={inputId}
          className={componentClassName}
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

TextArea.displayName = "TextArea";

export { TextArea };
