import { CardCheckboxOption } from "../Form/Checkbox/CardCheckboxOption/CardCheckboxOptionApollo";
import { DebugGridCommon, type DebugGridProps } from "./DebugGridCommon";

export const DebugGrid = <P extends object = object>({
  ...props
}: DebugGridProps<P>) => (
  <DebugGridCommon {...props} CardCheckboxOption={CardCheckboxOption} />
);
