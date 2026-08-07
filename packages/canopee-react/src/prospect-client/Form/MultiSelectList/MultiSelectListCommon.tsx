import type { ComponentType, ReactNode } from "react";
import type { ListProps } from "../../List/List/ListCommon";
import type { ItemMultiSelectCommonProps } from "../ItemMultiSelect/ItemMultiSelectCommon";

export type MultiSelectListItem = {
  id: string;
  label: ReactNode;
  checked?: boolean;
  disabled?: boolean;
};

export type MultiSelectListProps = Omit<
  ListProps,
  "children" | "separator" | "onChange"
> & {
  items: MultiSelectListItem[];
  onChange?: (id: string, checked: boolean) => void;
};

type MultiSelectListCommonProps = MultiSelectListProps & {
  ItemMultiSelectComponent: ComponentType<
    Omit<ItemMultiSelectCommonProps, "Checkbox">
  >;
};

export const MultiSelectListCommon = ({
  items,
  onChange,
  ItemMultiSelectComponent,
}: MultiSelectListCommonProps) => (
  <ul className="af-multi-select-list">
    {items.map((item, index) => (
      <li key={item.id}>
        <ItemMultiSelectComponent
          id={item.id}
          name={item.id}
          label={item.label}
          checked={item.checked}
          disabled={item.disabled}
          variant={index % 2 === 0 ? "primary" : "secondary"}
          onChange={(event) => onChange?.(item.id, event.currentTarget.checked)}
        />
      </li>
    ))}
  </ul>
);
