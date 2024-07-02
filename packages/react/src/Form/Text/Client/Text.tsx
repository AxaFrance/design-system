import "@axa-fr/design-system-css/dist/Form/Text/Client/Text.client.scss";
import { ComponentPropsWithRef, forwardRef } from "react";

import { getComponentClassName } from "../../core";

type Props = Omit<ComponentPropsWithRef<"input">, "required"> & {
  classModifier?: string;
  description?: string;
  error?: string;
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

    const { description, disabled, error, id, label, required } = otherProps;

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
        {error && (
          <div className="af-form__input-alert">
            <svg
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ErrorOutlineIcon"
            >
              <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8" />
            </svg>
            <span>{error}</span>
          </div>
        )}
      </div>
    );
  },
);

Text.displayName = "Text";

export { Text };
