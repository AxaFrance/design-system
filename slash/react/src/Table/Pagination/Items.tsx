import { useId } from "react";
import { Select } from "../../Form/Select";
import { getComponentClassName } from "../../utilities";

export type Props = {
  id?: string;
  className?: string;
  classModifier?: string;
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
  classModifier,
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
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-paging__form",
  );
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
              options={items.map((item) => ({
                label: item.toString(),
                value: item.toString(),
              }))}
              onChange={(e) => {
                e.preventDefault();
                onChange({ value: Number(e.target.value) });
              }}
              aria-label={selectAriaLabel}
            />
            <span className="af-form__input-cmplt">{elementsLabel}</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export { Items };
