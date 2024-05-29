import { ComponentProps, forwardRef } from "react";
import { SelectBase } from "./SelectBase";
import { SelectDefault } from "./SelectDefault";

type SelectProps = ComponentProps<typeof SelectDefault> & {
  mode?: "default" | "base";
};
const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ mode = "default", children, ...props }, inputRef) => {
    const DynamicComponent = mode === "default" ? SelectDefault : SelectBase;
    return (
      <DynamicComponent ref={inputRef} {...props}>
        {children}
      </DynamicComponent>
    );
  },
);

Select.displayName = "Select";

export { Select };
