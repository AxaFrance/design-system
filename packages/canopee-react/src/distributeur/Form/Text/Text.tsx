import "@axa-fr/canopee-css/distributeur/Form/Text/Text.css";
import { type ComponentPropsWithRef } from "react";
import { getClassName } from "../../utilities/helpers/getClassName";

type Props = ComponentPropsWithRef<"input"> & {
  /** @deprecated Use `className` and the native `required` prop instead. */
  classModifier?: string;
};

const Text = ({ className, classModifier, required, ...otherProps }: Props) => {
  const componentClassName = getClassName({
    baseClassName: "af-form__input-text",
    modifiers: classModifier?.split(" "),
    className,
  });

  return (
    <input
      className={componentClassName}
      type="text"
      required={required || classModifier?.includes("required")}
      {...otherProps}
    />
  );
};

Text.displayName = "Text";

export { Text };
