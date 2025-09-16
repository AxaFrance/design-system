import { ComponentPropsWithRef, forwardRef, useState } from "react";
import { getComponentClassName } from "../../utilities";

import "@axa-fr/design-system-slash-css/dist/Form/Pass/Pass.scss";

type Props = Omit<ComponentPropsWithRef<"input">, "type" | "role"> & {
  classModifier?: string;
  onToggleType: () => void;
};

const Pass = forwardRef<HTMLInputElement, Props>(
  ({ onToggleType, className, classModifier, ...inputProps }, inputRef) => {
    const componentClassName = getComponentClassName(
      className,
      classModifier,
      "af-form__pass",
    );

    const [type, setType] = useState<"text" | "password">("password");

    return (
      <div className={componentClassName}>
        <div className="af-form__pass-strength" />
        <input
          {...inputProps}
          className="af-form__input-text"
          type={type}
          ref={inputRef}
          required={classModifier?.includes("required")}
          aria-label={inputProps["aria-label"] || "password"} // Fallback to ensure accessibility
        />
        <button
          className="af-form__pass-btn"
          type="button"
          aria-label="show password"
          onClick={() => {
            setType(type === "password" ? "text" : "password");
            onToggleType();
          }}
        >
          <i
            className={`glyphicon glyphicon-eye${type === "text" ? "-close" : "-open"}`}
          />
        </button>
      </div>
    );
  },
);

Pass.displayName = "Pass";

export { Pass };
