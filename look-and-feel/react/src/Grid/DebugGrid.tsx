import { useState } from "react";
import "@axa-fr/design-system-look-and-feel-css/dist/Grid/DebugGrid.scss";
import { Checkbox } from "../Form/Checkbox";

export const DebugGrid = ({ cols = 12 }: { cols?: number }) => {
  const [checked, setChecked] = useState(true);

  const handleChecked = () => setChecked(!checked);
  return (
    <>
      <Checkbox
        className="af-checkbox af-checkbox-select af-checkbox-select--debuggrid"
        label="Grid"
        name="debuggrid"
        checked={checked}
        onClick={handleChecked}
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
