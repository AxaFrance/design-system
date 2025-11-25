import classNames from "classnames";
import greenTick from "@material-symbols/svg-400/outlined/check-fill.svg";
import "@axa-fr/design-system-slash-css/dist/FormHelper/ItemFormHelper.css";
import { Svg } from "../../Svg";

type ItemFormHelperProps = {
  label: string;
  mode: string;
  anchor?: string;
};

export const ItemFormHelper = ({
  label,
  mode,
  anchor,
}: ItemFormHelperProps) => {
  const className = `af-item-form-helper__${mode}`;
  const showTick = mode === "validated";
  return (
    <li
      className={classNames("af-item-form-helper", className)}
      key={`etape_${label}`}
    >
      {showTick ? (
        <Svg
          src={greenTick}
          className={classNames("af-item-form-helper__greenTick")}
        />
      ) : null}
      {anchor ? (
        <a
          href={`#${anchor}`}
          aria-label={`Accéder à l'étape ${label} depuis l'assistant de saisie`}
        >
          {label}
        </a>
      ) : (
        <span className={mode === "locked" ? "lockedStep" : undefined}>
          {label}
        </span>
      )}
    </li>
  );
};
