import { useState, useMemo } from "react";
import type { ItemMultiSelectCommonProps } from "../ItemMultiSelect/ItemMultiSelectCommon";

type UseDropdownMultiSelect = {
  items: Omit<ItemMultiSelectCommonProps, "Checkbox">[];
  defaultValue?: string[];
  placeholder?: string;
};

export const useDropdownMultiSelect = ({
  items,
  defaultValue,
  placeholder,
}: UseDropdownMultiSelect) => {
  const [internalValues, setInternalValues] = useState<string[]>(
    () =>
      defaultValue ??
      items.filter((item) => item.checked).map((item) => item.id),
  );

  const valuesLength = internalValues.length;
  const selectedItems = useMemo(
    () =>
      internalValues.length > 0
        ? items.filter((item) => internalValues.includes(item.id))
        : [],
    [items, internalValues],
  );

  const summary = useMemo(() => {
    if (valuesLength === 0) {
      return placeholder ?? "Sélectionner";
    }

    return valuesLength === 1
      ? "1 élément sélectionné"
      : `${valuesLength} éléments sélectionnés`;
  }, [valuesLength, placeholder]);

  const accessibleCount = useMemo(() => {
    const base = valuesLength === 0 ? "0 élément sélectionné" : summary;

    return `${base} sur ${items.length}`;
  }, [summary, valuesLength, items.length]);

  const handleOnItemSelect = (id: string, checked: boolean) => {
    setInternalValues((current) =>
      checked ? [...current, id] : current.filter((itemId) => itemId !== id),
    );
  };

  return {
    selectedValues: internalValues,
    selectedItems,
    summary,
    accessibleCount,
    handleOnItemSelect,
  };
};
