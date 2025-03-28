import "@axa-fr/design-system-slash-css/dist/Form/Select/Select.scss";
import {
  ComponentPropsWithoutRef,
  forwardRef,
  OptionHTMLAttributes,
} from "react";
import { getComponentClassName } from "../../utilities";

type Props = ComponentPropsWithoutRef<"select"> & {
  options?: OptionHTMLAttributes<HTMLOptionElement>[];
  classModifier?: string;
};

/**
 * @deprecated Use Select instead
 */
const SelectBase = forwardRef<HTMLSelectElement, Props>(
  (
    {
      options,
      id,
      className,
      classModifier,
      required,
      children,
      ...otherProps
    },
    inputRef,
  ) => {
    const componentClassName = getComponentClassName(
      className,
      classModifier,
      "af-form__input-select",
    );
    return (
      <div className="af-form__select-container">
        <select
          {...otherProps}
          id={id}
          className={componentClassName}
          ref={inputRef}
          required={classModifier?.includes("required") || required}
        >
          {children ??
            options?.map(({ label, ...opt }) => (
              <option key={opt.value?.toString()} {...opt}>
                {label}
              </option>
            ))}
        </select>
        <span aria-controls={id} className="glyphicon glyphicon-menu-down" />
      </div>
    );
  },
);

SelectBase.displayName = "SelectBase";

export { SelectBase };
