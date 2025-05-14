import "@axa-fr/design-system-apollo-css/dist/Grid/DebugGrid.scss";
import { useState } from "react";
import { CheckboxCard } from "../Form/Checkbox/CheckboxCard/CheckboxCardApollo";
import { DebugGridCommon } from "./DebugGridCommon";

export const DebugGrid = ({
  cols = 12,
  isCheckedByDefault = false,
}: {
  cols?: number;
  isCheckedByDefault?: boolean;
}) => {
  const [checked, setChecked] = useState(isCheckedByDefault);

  const handleChecked = () => setChecked(!checked);
  return (
    <>
      <CheckboxCard
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
