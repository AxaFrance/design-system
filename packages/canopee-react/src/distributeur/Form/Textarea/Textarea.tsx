import "@axa-fr/canopee-css/distributeur/Form/Textarea/Textarea.css";
import { type ComponentPropsWithRef, useId } from "react";

import { getClassName } from "../../utilities/helpers/getClassName";

type Props = ComponentPropsWithRef<"textarea"> & {
  /** @deprecated Use `className` and the native `required` prop instead. */
  classModifier?: string;
};

const Textarea = ({ id, className, classModifier, ...otherProps }: Props) => {
  const inputUseId = useId();
  const inputId = id ?? inputUseId;
  const componentClassName = getClassName({
    baseClassName: "af-form__input-textarea",
    modifiers: classModifier?.split(" "),
    className,
  });

  return (
    <textarea
      {...otherProps}
      id={inputId}
      className={componentClassName}
      required={classModifier?.includes("required")}
    />
  );
};

Textarea.displayName = "Textarea";

export { Textarea };
