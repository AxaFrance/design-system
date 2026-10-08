import {
  type ChangeEvent,
  type ComponentProps,
  type ComponentType,
  useId,
} from "react";
import type { MultiSelectListProps } from "../MultiSelectList/MultiSelectListCommon";
import type { TagListProps } from "../../TagList/TagListCommon";
import type { TagProps } from "../../Tag/TagCommon";
import type {
  ItemLabelCommon,
  ItemLabelProps,
} from "../ItemLabel/ItemLabelCommon";
import type { ItemMessage, ItemMessageProps } from "../ItemMessage/ItemMessage";
import { getClassName } from "../../utilities/getClassName";
import { useDropdownMultiSelect } from "./useDropdownMultiSelect.hook";

export type DropdownMultiSelectProps = Pick<
  ItemLabelProps,
  | "moreButtonLabel"
  | "onMoreButtonClick"
  | "sideButtonLabel"
  | "onSideButtonClick"
> &
  Pick<ItemMessageProps, "message" | "messageType"> &
  Pick<MultiSelectListProps, "items"> & {
    id?: string;
    name: string;
    required?: boolean;
    disabled?: boolean;
    className?: string;
    label?: ItemLabelProps["children"];
    placeholder?: string;
    description?: string;
    helper?: string;
    /**
     * The number of items to hide before showing a "more" option.
     */
    hideThreshold?: number;
    /**
     * Props to be spread onto the underlying input element.
     * onChange will be override by `onChange` prop of `DropdownMultiSelect`.
     */
    inputProps?: Omit<ComponentProps<"input">, "type" | "onChange">;
    /**
     * The currently selected values in the dropdown multi-select.
     */
    values?: string[];
    /**
     * Callback function invoked when an item is selected or deselected.
     */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };

type DropdownMultiSelectCommonProps = DropdownMultiSelectProps & {
  MultiSelectListComponent: ComponentType<MultiSelectListProps>;
  TagListComponent: ComponentType<TagListProps>;
  TagComponent: ComponentType<TagProps>;
  ItemLabelComponent: ComponentType<
    Omit<ComponentProps<typeof ItemLabelCommon>, "ButtonComponent">
  >;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
};

export const DropdownMultiSelectCommon = ({
  items,
  helper,
  name,
  message,
  messageType,
  description,
  placeholder,
  className,
  moreButtonLabel,
  onMoreButtonClick,
  sideButtonLabel,
  onSideButtonClick,
  required,
  id: inputId,
  label,
  disabled,
  hideThreshold,
  values,
  onChange: onItemChange,
  MultiSelectListComponent,
  TagListComponent,
  TagComponent,
  ItemLabelComponent,
  ItemMessageComponent,
  inputProps,
}: DropdownMultiSelectCommonProps) => {
  const {
    selectedItems,
    selectedValues,
    summary,
    accessibleCount,
    handleOnItemSelect,
  } = useDropdownMultiSelect({
    items,
    values,
    placeholder,
  });

  const inputItems = items.map((item) => ({
    ...inputProps,
    name,
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      onItemChange?.(e);
      handleOnItemSelect(item.id, e.target.checked);
    },
    ...item,
    checked: selectedValues.includes(item.id),
    value: item.id,
  }));

  const generatedId = useId();
  const idMessage = useId();
  const fieldId = inputId ?? generatedId;
  const triggerId = `${fieldId}-trigger`;
  const panelId = `${fieldId}-panel`;
  const countId = `${fieldId}-count`;

  const componentClassName = getClassName({
    baseClassName: "af-form__dropdown-multi-select",
    modifiers: [disabled && "disabled"],
    className,
  });

  const componentInputClassName = getClassName({
    baseClassName: "af-form__dropdown-input",
    modifiers: [Boolean(message) && messageType],
    className: "dropdown-multi-select__trigger",
  });

  return (
    <div className={componentClassName} id={fieldId}>
      <ItemLabelComponent
        description={description}
        moreButtonLabel={moreButtonLabel}
        onMoreButtonClick={onMoreButtonClick}
        sideButtonLabel={sideButtonLabel}
        onSideButtonClick={onSideButtonClick}
        required={required}
        id={`${fieldId}-label`}
        htmlFor={triggerId}
      >
        {label}
      </ItemLabelComponent>

      <div className="dropdown-multi-select__surface">
        <button
          type="button"
          id={triggerId}
          className={componentInputClassName}
          aria-controls={panelId}
          aria-haspopup="listbox"
          aria-label={summary}
          disabled={disabled}
          data-empty={selectedItems.length === 0}
          popoverTarget={panelId}
          popoverTargetAction="toggle"
        >
          <span className="dropdown-multi-select__summary">{summary}</span>
          <span id={countId} className="sr-only">
            {accessibleCount}
          </span>
        </button>

        <div
          id={panelId}
          popover="auto"
          className="dropdown-multi-select__list"
          role="group"
          aria-labelledby={triggerId}
        >
          {items.length > 0 ? (
            <MultiSelectListComponent items={inputItems} />
          ) : null}
        </div>
      </div>

      {selectedItems.length > 0 ? (
        <TagListComponent
          className="dropdown-multi-select__tags"
          hideThreshold={hideThreshold}
          OverflowTag={TagComponent}
          aria-hidden="true"
        >
          {selectedItems.map((item) => (
            <TagComponent key={item.id}>{item.label}</TagComponent>
          ))}
        </TagListComponent>
      ) : null}
      {helper ? <span className="af-form__input-helper">{helper}</span> : null}
      <ItemMessageComponent
        id={idMessage}
        message={message}
        messageType={messageType}
      />
    </div>
  );
};

DropdownMultiSelectCommon.displayName = "DropdownMultiSelectCommon";
