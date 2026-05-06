import { type ComponentPropsWithRef, forwardRef } from "react";
import { getClassName } from "../../utilities/helpers/getClassName";

import "@axa-fr/canopee-css/distributeur/Form/Pass/Pass.css";

type PassStrength = "bad" | "okay" | "good" | "verygood" | "excellent";

type Props = Omit<ComponentPropsWithRef<"input">, "type" | "role"> & {
  type?: "text" | "password";
  /** @deprecated Use `className` and the native `required` prop instead. */
  classModifier?: string;
  strength?: PassStrength;
  onToggleType: () => void;
};

const Pass = forwardRef<HTMLInputElement, Props>(
  (
    {
      onToggleType,
      type = "password",
      className,
      classModifier,
      strength,
      ...inputProps
    },
    inputRef,
  ) => {
    const componentClassName = getClassName({
      baseClassName: "af-form__pass",
      modifiers: [strength, ...(classModifier?.split(" ") ?? [])],
      className,
    });

    return (
      <div className={componentClassName}>
        <div className="af-form__pass-strength" />
        <input
          {...inputProps}
          role={type === "password" ? "password" : "textbox"}
          className="af-form__input-text"
          type={type}
          ref={inputRef}
          required={classModifier?.includes("required")}
        />
        <button
          className="af-form__pass-btn"
          type="button"
          aria-label="show password"
          onClick={onToggleType}
        >
          <i
            className={`glyphicon glyphicon-eye${
              type === "text" ? "-close" : "-open"
            }`}
          />
        </button>
      </div>
    );
  },
);

Pass.displayName = "Pass";

export { Pass };
