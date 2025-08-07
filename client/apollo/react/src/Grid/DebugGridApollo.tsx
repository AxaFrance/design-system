import { CardCheckboxOption } from "../Form/Checkbox/CardCheckboxOption/CardCheckboxOptionApollo";
import { DebugGridCommon, type DebugGridProps } from "./DebugGridCommon";

export const DebugGrid = <P = object,>({ ...props }: DebugGridProps<P>) => {
  return <DebugGridCommon {...props} CardCheckboxOption={CardCheckboxOption} />;
};
