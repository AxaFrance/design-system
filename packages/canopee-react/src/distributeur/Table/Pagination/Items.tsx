import { useId } from "react";
import { Select } from "../../Form/Select";
import { getClassName } from "../../utilities";

export type Props = {
  id?: string;
  className?: string;
  /**
   * Text displayed before the per-page select
   */
  displayLabel?: string;
  /**
   * Text displayed after the per-page select and used in page selection links label
   */
  elementsLabel?: string;
  /**
   * Possible values for the number of items displayed per page
   */
  items?: number[];
  /**
   * Number of items displayed per page
   */
  numberItems?: number;
  /**
   * Aria label for the the per-page select
   */
  selectAriaLabel?: string;
  onChange: (e: { value: number }) => void;
};

const Items = ({
  className,
  onChange,
  displayLabel = "Afficher",
  elementsLabel = "éléments",
  selectAriaLabel = "Modifier le nombre d'éléments à afficher dans le tableau",
  id,
  items = [5, 10, 25, 50, 100],
  numberItems = 10,
}: Props) => {
  const defaultIdName = useId();
  const newId = id ?? defaultIdName;
  const componentClassName = getClassName({
    baseClassName: "af-paging__form",
    className,
  });
  return (
    <div className="af-paging__limit">
      <form className={componentClassName}>
        <div className="af-form__group">
          <div className="col col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <label className="af-form__group-label" htmlFor={newId}>
              {displayLabel}
            </label>
          </div>
          <div className="col col-sm-10 col-md-10 col-lg-10 col-xl-10">
            <Select
              id={newId}
              value={numberItems}
              mode="base"
              onChange={(e) => {
                e.preventDefault();
                onChange({ value: Number(e.target.value) });
              }}
              aria-label={selectAriaLabel}
            >
              {items.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
            <span className="af-form__input-cmplt">{elementsLabel}</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export { Items };
