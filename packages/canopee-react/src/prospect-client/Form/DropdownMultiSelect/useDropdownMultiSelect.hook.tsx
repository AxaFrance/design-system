import { useState, useMemo } from "react";
import type { ItemMultiSelectCommonProps } from "../ItemMultiSelect/ItemMultiSelectCommon";

type UseDropdownMultiSelect = {
  items: Omit<ItemMultiSelectCommonProps, "Checkbox">[];
  values?: string[];
  placeholder?: string;
};

export const useDropdownMultiSelect = ({
  items,
  values,
  placeholder,
}: UseDropdownMultiSelect) => {
  const [internalValues, setInternalValues] = useState<string[]>(
    () => values ?? items.filter((item) => item.checked).map((item) => item.id),
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
    const nextValues = checked
      ? [...internalValues, id]
      : internalValues.filter((value) => value !== id);

    setInternalValues(nextValues);
  };

  return {
    selectedValues: internalValues,
    selectedItems,
    summary,
    accessibleCount,
    handleOnItemSelect,
  };
};
