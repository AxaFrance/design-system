import { type ComponentProps, type PropsWithChildren } from "react";
import { SelectBase } from "./SelectBase";
import { SelectDefault } from "./SelectDefault";

type SelectProps = PropsWithChildren<
  ComponentProps<typeof SelectDefault> & { mode?: "default" | "base" }
>;

const Select = ({ mode = "default", children, ...props }: SelectProps) => {
  if (mode === "default") {
    return <SelectDefault {...props}>{children}</SelectDefault>;
  }
  return <SelectBase {...props}>{children}</SelectBase>;
};

Select.displayName = "Select";

export { Select };
