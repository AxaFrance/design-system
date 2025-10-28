import { CardCheckboxOption } from "../Form/Checkbox/CardCheckboxOption/CardCheckboxOptionLF";
import { DebugGridCommon, type DebugGridProps } from "./DebugGridCommon";

export const DebugGrid = <P extends object = object>({
  ...props
}: DebugGridProps<P>) => (
  <DebugGridCommon<P> {...props} CardCheckboxOption={CardCheckboxOption} />
);
