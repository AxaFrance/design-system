import "@axa-fr/canopee-css/distributeur/Form/Text/Text.css";
import { type ComponentPropsWithRef } from "react";
import { getClassName } from "../../utilities/helpers/getClassName";

type Props = ComponentPropsWithRef<"input">;

const Text = ({ className, required, ...otherProps }: Props) => {
  const componentClassName = getClassName({
    baseClassName: "af-form__input-text",
    className,
  });

  return (
    <input
      className={componentClassName}
      type="text"
      required={required}
      {...otherProps}
    />
  );
};

Text.displayName = "Text";

export { Text };
