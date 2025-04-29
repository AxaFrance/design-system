import "@axa-fr/design-system-apollo-css/dist/Grid/DebugGrid.scss";
import { useState } from "react";
import { CheckboxCard } from "..";

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
        type="vertical"
        options={[
          {
            name: "debuggrid",
            label: "Grid",
            checked,
            onClick: handleChecked,
          },
        ]}
      />

      <div className="debug-grid">
        <div className="grid">
          {[...Array(cols).keys()].map((col: number) => (
            <div key={col} className="cols" />
          ))}
        </div>
      </div>
    </>
  );
};
