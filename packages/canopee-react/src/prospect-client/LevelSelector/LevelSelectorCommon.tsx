import add from "@material-symbols/svg-400/rounded/add-fill.svg";
import remove from "@material-symbols/svg-400/rounded/remove-fill.svg";
import { useId } from "react";
import { ClickIcon } from "../ClickIcon/ClickIconCommon";

export type LevelSelectorProps = {
  title?: string;
  description?: string;
  value?: number;
  steps: number;
  onChange?: (value: number) => void;
};

export const LevelSelector = ({
  title,
  description,
  value = 0,
  steps = 1,
  onChange,
}: LevelSelectorProps) => {
  const LevelSelectorId = useId();
  const nbrSteps = Array.from({ length: steps }, (_, index) => index + 1);
  return (
    <div className="af-level-selector">
      <span
        id={`level-selector-${LevelSelectorId}-title`}
        className="af-level-selector-title"
      >
        {title}
      </span>
      <div className="af-level-selector-content">
        <ClickIcon
          aria-label="Diminuer le niveau"
          src={remove}
          onClick={() => onChange?.(value - 1)}
          disabled={!value}
        />
        <div
          role="radiogroup"
          className="af-level-selector-group"
          aria-describedby={`level-selector-${LevelSelectorId}-title`}
        >
          {nbrSteps.map((step, index) => (
            <label
              className={`af-level-selector-radio ${index < value ? "selected" : ""}`}
              key={step}
              aria-label={`Niveau ${step}`}
            >
              <input
                type="radio"
                name={`level-selector-${LevelSelectorId}`}
                aria-describedby={`level-selector-${LevelSelectorId}-description`}
                value={step}
                checked={step === value}
                onChange={() => onChange?.(step)}
              />
            </label>
          ))}
        </div>
        <ClickIcon
          aria-label="Augmenter le niveau"
          src={add}
          onClick={() => onChange?.(value + 1)}
          disabled={value === steps}
        />
      </div>
      <span
        id={`level-selector-${LevelSelectorId}-description`}
        className="af-level-selector-description"
        aria-live="polite"
      >
        {description}
      </span>
    </div>
  );
};
