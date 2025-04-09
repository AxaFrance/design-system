import { useId } from "react";
import { getComponentClassName } from "../../utilities";
import { Select } from "../../Form/Select";

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
   * Assoaciated label with the per-page select
   */
  selectPageSizeLabel?: string;
  /**
   * Possible values for the number of items displayed per page
   */
  items?: number[];
  /**
   * Number of items displayed per page
   */
  numberItems?: number;
  onChange: (e: { value: number }) => void;
};

const Items = ({
  className,
  classModifier,
  onChange,
  displayLabel = "Afficher",
  elementsLabel = "éléments",
  selectPageSizeLabel = "Nombre d'éléments à afficher",
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
              aria-label={selectPageSizeLabel}
              mode="base"
              options={items.map((item) => ({
                label: item.toString(),
                value: item.toString(),
              }))}
              onChange={(e) => {
                e.preventDefault();
                onChange({ value: Number(e.target.value) });
              }}
            />
            <span className="af-form__input-cmplt">{elementsLabel}</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export { Items };
