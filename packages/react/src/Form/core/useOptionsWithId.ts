import { useId } from "react";
import type { Option } from ".";

export function useOptionsWithId(options?: Option[], id?: string) {
  const reactId = useId();
  if (!options) {
    return [];
  }
  return options.map((option, index) => {
    const newOptionId = id ? `${id}_${index}` : reactId;
    return { ...option, id: option.id ?? newOptionId };
  });
}
