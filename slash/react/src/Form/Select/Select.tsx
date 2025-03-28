import { ComponentProps, forwardRef, OptionHTMLAttributes } from "react";
import { SelectBase } from "./SelectBase";
import { SelectDefault } from "./SelectDefault";
import { SelectDefaultWithOptions } from "./SelectDefaultWithOptions";

type SelectProps = ComponentProps<
  typeof SelectDefault | typeof SelectDefaultWithOptions
> & {
  options?: OptionHTMLAttributes<HTMLOptionElement>[];
  mode?: "default" | "base";
  children?: React.ReactNode;
};
const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ mode = "default", children, options, ...props }, inputRef) => {
    if (mode === "default") {
      return options ? (
        <SelectDefaultWithOptions ref={inputRef} {...props} options={options} />
      ) : (
        <SelectDefault ref={inputRef} {...props}>
          {children}
        </SelectDefault>
      );
    }
    return (
      <SelectBase ref={inputRef} {...props} options={options}>
        {children}
      </SelectBase>
    );
  },
);

Select.displayName = "Select";

export { Select };
