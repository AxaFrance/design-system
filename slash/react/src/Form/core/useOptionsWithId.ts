import { useId } from "react";
import type { Option } from ".";

export function useOptionsWithId(options?: Option[], id?: string) {
  const reactId = useId();

  if (!options) {
    return [];
  }

  return options.map((option, index) => {
    if (option.id) {
      return option;
    }

    return { ...option, id: `${id ?? reactId}_${index}` };
  });
}
