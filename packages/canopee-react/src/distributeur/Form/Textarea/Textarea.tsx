import "@axa-fr/canopee-css/distributeur/Form/Textarea/Textarea.css";
import { type ComponentPropsWithRef, useId } from "react";

import { getClassName } from "../../utilities/helpers/getClassName";

type Props = ComponentPropsWithRef<"textarea">;

const Textarea = ({ id, className, required, ...otherProps }: Props) => {
  const inputUseId = useId();
  const inputId = id ?? inputUseId;
  const componentClassName = getClassName({
    baseClassName: "af-form__input-textarea",
    className,
  });

  return (
    <textarea
      {...otherProps}
      id={inputId}
      className={componentClassName}
      required={required}
    />
  );
};

Textarea.displayName = "Textarea";

export { Textarea };
