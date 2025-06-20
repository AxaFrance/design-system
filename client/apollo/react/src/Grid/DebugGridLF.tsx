import { CardCheckbox } from "../Form/Checkbox/CardCheckbox/CardCheckboxLF";
import { DebugGridCommon, type DebugGridCommonProps } from "./DebugGridCommon";

type DebugGridProps<P = object> = Omit<DebugGridCommonProps<P>, "CardCheckbox">;

export const DebugGrid = <P = object,>({ ...props }: DebugGridProps<P>) => {
  return (
    <DebugGridCommon
      {...props}
      CardCheckbox={CardCheckbox as DebugGridCommonProps<P>["CardCheckbox"]}
    />
  );
};
