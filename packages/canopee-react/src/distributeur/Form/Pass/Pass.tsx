import { type ComponentPropsWithRef } from "react";
import { getComponentClassName } from "../../utilities";

import "@axa-fr/canopee-css/distributeur/Form/Pass/Pass.css";

type Props = Omit<ComponentPropsWithRef<"input">, "type" | "role"> & {
  type?: "text" | "password";
  classModifier?: string;
  onToggleType: () => void;
};

/**
 * @deprecated The Pass component is deprecated and will be removed in a future release
 */

const Pass = ({
  onToggleType,
  type = "password",
  className,
  classModifier,
  ...inputProps
}: Props) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-form__pass",
  );

  return (
    <div className={componentClassName}>
      <div className="af-form__pass-strength" />
      <input
        {...inputProps}
        role={type === "password" ? "password" : "textbox"}
        className="af-form__input-text"
        type={type}
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
};

Pass.displayName = "Pass";

export { Pass };
