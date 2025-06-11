import { useState } from "react";
import { CardCheckbox } from "../Form/Checkbox/CardCheckbox/CardCheckboxLF";
import { DebugGridCommon } from "./DebugGridCommon";

import "@axa-fr/design-system-apollo-css/dist/Grid/DebugGrid.scss";

type DebugGridProps<P = object> = P & {
  cols?: number;
  isCheckedByDefault?: boolean;
};

export const DebugGrid = <P = object,>({
  cols = 12,
  isCheckedByDefault = false,
  ...props
}: DebugGridProps<P>) => {
  const [checked, setChecked] = useState(isCheckedByDefault);

  const handleChecked = () => setChecked(!checked);

  const forceVisible =
    (props as { forceVisible?: boolean })?.forceVisible || false;
  if (process.env.NODE_ENV === "production" && !forceVisible) {
    return null;
  }

  return (
    <>
      <CardCheckbox
        type="horizontal"
        options={[
          {
            name: "debuggrid",
            label: "Grid",
            checked,
            onClick: handleChecked,
          },
        ]}
      />

      <DebugGridCommon cols={cols} />
    </>
  );
};
