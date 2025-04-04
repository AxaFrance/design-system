import {
  ComponentProps,
  forwardRef,
  OptionHTMLAttributes,
  PropsWithChildren,
} from "react";
import { SelectBase } from "./SelectBase";
import { SelectDefault } from "./SelectDefault";
import { SelectDefaultWithOptions } from "./SelectDefaultWithOptions";

type SelectProps = PropsWithChildren<
  ComponentProps<typeof SelectDefault | typeof SelectDefaultWithOptions> & {
    /**
     * @deprecated Use `children` instead
     * Instead of
     * ```jsx
     * <SelectBase options={[{ value: "1", label: "Option 1" }]} />
     * ```
     * you can now do something like :
     * ```jsx
     * <SelectBase>
     *   <option value="1">Option 1</option>
     * </SelectBase>
     * ```
     * It allows you to use the `optgroup` tag for example.
     */
    options?: OptionHTMLAttributes<HTMLOptionElement>[];
    mode?: "default" | "base";
  }
>;
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
