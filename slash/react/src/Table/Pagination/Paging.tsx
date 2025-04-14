import "@axa-fr/design-system-slash-css/dist/Table/Paging.scss";
import { ComponentPropsWithoutRef, useCallback } from "react";
import { getComponentClassName } from "../..";
import { Items } from "./Items";
import { Pager } from "./Pager";

type PagingComponentProps = ComponentPropsWithoutRef<typeof Pager> &
  ComponentPropsWithoutRef<typeof Items>;

type OnChangeItems = ComponentPropsWithoutRef<typeof Items>["onChange"];

type OnChangePager = (e: { numberItems: number; page: number }) => void;
export type Props = Omit<PagingComponentProps, "onChange"> & {
  onChange?: OnChangePager;
};

const Paging = ({
  className,
  classModifier,
  currentPage = 1,
  displayLabel,
  selectAriaLabel,
  elementsLabel,
  id,
  mode,
  nextLabel,
  numberItems = 10,
  numberPages,
  ofLabel,
  previousLabel,
  items,
  onChange,
}: Props) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-paging",
  );

  const handleChangeItems = useCallback<OnChangeItems>(
    (e) =>
      onChange &&
      onChange({
        numberItems: e.value,
        page: currentPage,
      }),
    [currentPage, onChange],
  );

  const handleChangePager = useCallback<OnChangeItems>(
    (e) =>
      onChange &&
      onChange({
        numberItems,
        page: e.value,
      }),
    [numberItems, onChange],
  );

  return (
    <div className={componentClassName}>
      <div className="af-paging__limit">
        <Items
          onChange={handleChangeItems}
          numberItems={numberItems}
          id={id}
          displayLabel={displayLabel}
          selectAriaLabel={selectAriaLabel}
          elementsLabel={elementsLabel}
          items={items}
        />
      </div>
      <div className="af-paging__pager">
        <Pager
          onChange={handleChangePager}
          currentPage={currentPage}
          numberPages={numberPages}
          previousLabel={previousLabel}
          nextLabel={nextLabel}
          ofLabel={ofLabel}
          mode={mode}
        />
      </div>
    </div>
  );
};

export { Paging };
