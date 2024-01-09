/* eslint-disable react-hooks/rules-of-hooks */
import { useId } from "react";
import type { Option } from ".";

export function useOptionsWithId(options?: Option[], id?: string) {
  if (!options) {
    return [];
  }
  return options.map((option, index) => {
    const newOptionId = id ? `${id}_${index}` : useId();
    return { ...option, id: option.id ?? newOptionId };
  });
}
