import add from "@material-symbols/svg-400/rounded/add-fill.svg";
import remove from "@material-symbols/svg-400/rounded/remove-fill.svg";
import { ComponentProps, ComponentType, useId } from "react";
import { ClickIcon } from "../ClickIcon/ClickIconCommon";
import { CardCommon } from "../Card/CardCommon";

export type LevelSelectorProps = {
  title: string;
  description?: string;
  value?: number;
  stepsCount?: 1 | 2 | 3;
  minusAriaLabel?: string;
  plusAriaLabel?: string;
  onChange?: (value: number) => void;
};

type LevelSelectorCommonProps = LevelSelectorProps & {
  ClickIconComponent: ComponentType<ComponentProps<typeof ClickIcon>>;
  CardComponent: ComponentType<ComponentProps<typeof CardCommon>>;
};

export const LevelSelectorCommon = ({
  title,
  description,
  value = 0,
  stepsCount = 2,
  ClickIconComponent,
  CardComponent,
  minusAriaLabel = "Diminuer le niveau",
  plusAriaLabel = "Augmenter le niveau",
  onChange,
}: LevelSelectorCommonProps) => {
  const levelSelectorId = useId();
  const stepsArray = Array.from(
    { length: stepsCount },
    (_, index) => index + 1,
  );
  return (
    <CardComponent
      as="fieldset"
      role="radiogroup"
      className="af-level-selector"
    >
      {Boolean(title) && (
        <legend className="af-level-selector__title">{title}</legend>
      )}
      <div className="af-level-selector__content">
        <ClickIconComponent
          aria-label={minusAriaLabel}
          src={remove}
          onClick={() => onChange?.(value - 1)}
          disabled={value === 0}
        />
        <div className="af-level-selector__group">
          {stepsArray.map((step) => (
            <label
              className={`af-level-selector__radio ${step <= value ? "af-level-selector__active" : ""}`}
              key={step}
              aria-label={`Niveau ${step}`}
            >
              <input
                type="radio"
                name={`level-selector-${levelSelectorId}`}
                aria-describedby={`level-selector-${levelSelectorId}-description`}
                value={step}
                checked={step === value}
                onChange={() => onChange?.(step)}
              />
            </label>
          ))}
        </div>
        <ClickIconComponent
          aria-label={plusAriaLabel}
          src={add}
          onClick={() => onChange?.(value + 1)}
          disabled={value === stepsCount}
        />
      </div>
      {Boolean(description) && (
        <span
          id={`level-selector-${levelSelectorId}-description`}
          className="af-level-selector__description"
          aria-live="polite"
        >
          {description}
        </span>
      )}
    </CardComponent>
  );
};
