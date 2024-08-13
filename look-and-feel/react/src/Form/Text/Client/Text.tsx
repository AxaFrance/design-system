import "@axa-fr/design-system-look-and-feel-css/dist/Form/Text/Client/Text.client.scss";
import { ComponentPropsWithRef, forwardRef } from "react";

import { getComponentClassName } from "../../core";
import { InputError } from "../../InputError";

type Props = Omit<ComponentPropsWithRef<"input">, "required"> & {
  classModifier?: string;
  helper?: string;
  error?: string;
  description?: string;
  label?: string;
  required?: boolean;
};

const Text = forwardRef<HTMLInputElement, Props>(
  ({ className, classModifier = "", ...otherProps }, inputRef) => {
    const componentClassName = getComponentClassName(
      className,
      classModifier,
      "af-form__input-text",
    );

    const { id, label, required, disabled, description, helper, error } =
      otherProps;

    return (
      <div className="af-form__input-container">
        <label htmlFor={id} className="af-form__input-label">
          {label} {required && <span> *</span>}
        </label>
        {description && (
          <span className="af-form__input-description">{description}</span>
        )}
        <input
          className={componentClassName}
          type="text"
          ref={inputRef}
          required={required}
          disabled={disabled}
          {...otherProps}
        />
        {helper && <span className="af-form__input-helper">{helper}</span>}
        {error && <InputError message={error} />}
      </div>
    );
  },
);

Text.displayName = "Text";

export { Text };
