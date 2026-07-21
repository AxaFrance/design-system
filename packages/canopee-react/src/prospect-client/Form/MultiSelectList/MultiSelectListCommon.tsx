import type { ComponentType } from "react";
import type { ListProps } from "../../List/List/ListCommon";
import type { ItemMultiSelectCommonProps } from "../ItemMultiSelect/ItemMultiSelectCommon";

export type MultiSelectListProps = Omit<
  ListProps,
  "children" | "separator" | "onChange"
> & {
  items: ItemMultiSelectCommonProps[];
  onChange?: (id: string, checked: boolean) => void;
};

type MultiSelectListCommonProps = MultiSelectListProps & {
  ItemMultiSelectComponent: ComponentType<
    Omit<ItemMultiSelectCommonProps, "Checkbox">
  >;
};

export const MultiSelectListCommon = ({
  items,
  ItemMultiSelectComponent,
}: MultiSelectListCommonProps) => (
  <ul className="af-multi-select-list">
    {items.map((item, index) => (
      <li key={item.id}>
        <ItemMultiSelectComponent
          {...item}
          variant={index % 2 === 0 ? "primary" : "secondary"}
        />
      </li>
    ))}
  </ul>
);
