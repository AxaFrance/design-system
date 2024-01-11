import { ComponentProps } from "react";
import { SelectBase } from "./SelectBase";
import { SelectDefault } from "./SelectDefault";

type SelectProps = ComponentProps<typeof SelectDefault> & {
  mode?: "default" | "base";
};
const Select = ({ mode = "default", children, ...props }: SelectProps) => {
  const DynamicComponent = mode === "default" ? SelectDefault : SelectBase;
  return <DynamicComponent {...props}>{children}</DynamicComponent>;
};

export { Select };
