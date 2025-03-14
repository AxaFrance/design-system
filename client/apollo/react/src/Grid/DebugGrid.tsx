import "@axa-fr/design-system-apollo-css/dist/Grid/DebugGrid.scss";
import { useState } from "react";

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
      <div className="af-checkbox af-checkbox-select af-checkbox-select--debuggrid">
        <label htmlFor="debuggrid">
          <input
            type="checkbox"
            className="af-checkbox af-checkbox-select af-checkbox-select--debuggrid"
            name="debuggrid"
            checked={checked}
            onClick={handleChecked}
            id="debuggrid"
          />
          Grid
        </label>
      </div>

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
