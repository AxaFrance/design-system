import { type KeyboardEvent, type MouseEvent } from "react";
import {
  components,
  type ClearIndicatorProps,
  type GroupBase,
} from "react-select";

import type { Option } from "./MultiSelect";

const ClearIndicator = <IsMulti extends boolean>({
  clearValue,
  selectProps,
}: ClearIndicatorProps<Option, IsMulti, GroupBase<Option>>) => {
  const handleMouseDown = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    clearValue();

    if (selectProps.inputId) {
      document.getElementById(selectProps.inputId)?.focus();
    }
  };

  return (
    <button
      aria-label="Effacer la sélection"
      className="react-select__clear-indicator"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseDown={handleMouseDown}
      type="button"
    >
      <components.CrossIcon aria-hidden="true" focusable="false" />
    </button>
  );
};

export { ClearIndicator };
