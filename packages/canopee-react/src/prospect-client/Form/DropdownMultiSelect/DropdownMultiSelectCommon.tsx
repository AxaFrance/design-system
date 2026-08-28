import {
  type ComponentProps,
  type ComponentType,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import type { DropdownProps } from "../Dropdown/DropdownCommon";
import type {
  MultiSelectListItem,
  MultiSelectListProps,
} from "../MultiSelectList/MultiSelectListCommon";
import type { TagListProps } from "../../TagList/TagListCommon";
import type { TagProps } from "../../Tag/TagCommon";
import type { ItemLabelCommon } from "../ItemLabel/ItemLabelCommon";
import { getClassName } from "../../utilities/getClassName";
import type { ItemMessage } from "../ItemMessage/ItemMessageCommon";

export type DropdownMultiSelectProps = Omit<
  DropdownProps,
  "children" | "value" | "defaultValue" | "multiple" | "onChange"
> & {
  items: MultiSelectListItem[];
  values?: string[];
  defaultValues?: string[];
  hideThreshold?: number;
  onChange?: (values: string[]) => void;
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
  values,
  defaultValues,
  helper,
  error,
  message,
  messageType,
  description,
  moreButtonLabel,
  onMoreButtonClick,
  sideButtonLabel,
  onSideButtonClick,
  onChange,
  required,
  id: inputId,
  label,
  disabled,
  hideThreshold,
  MultiSelectListComponent,
  TagListComponent,
  TagComponent,
  ItemLabelComponent,
  ItemMessageComponent,
}: DropdownMultiSelectCommonProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [internalValues, setInternalValues] = useState<string[]>(
    () =>
      defaultValues ??
      items.filter((item) => item.checked).map((item) => item.id),
  );
  const generatedId = useId();
  const idMessage = useId();
  const fieldId = inputId ?? generatedId;
  const triggerId = `${fieldId}-trigger`;
  const panelId = `${fieldId}-panel`;
  const countId = `${fieldId}-count`;

  const componentClassName = getClassName({
    baseClassName: "af-form__dropdown-multi-select",
    modifiers: [disabled && "disabled"],
  });

  const hasError =
    (Boolean(message) && messageType === "error") || Boolean(error);
  const hasWarning = !hasError && Boolean(message) && messageType === "warning";
  const componentInputClassName = getClassName({
    baseClassName: "af-form__dropdown-input",
    modifiers: [hasError && "error", hasWarning && "warning"],
    className: "dropdown-multi-select__trigger",
  });

  const selectedValues = values ?? internalValues;
  const effectiveItems = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        checked: selectedValues.includes(item.id),
      })),
    [items, selectedValues],
  );
  const selectedItems = useMemo(
    () => items.filter((item) => selectedValues.includes(item.id)),
    [items, selectedValues],
  );

  const selectedSummary = useMemo(() => {
    if (selectedValues.length === 0) {
      return "Sélectionner";
    }

    return selectedValues.length === 1
      ? "1 élément sélectionné"
      : `${selectedValues.length} éléments sélectionnés`;
  }, [selectedValues.length]);

  const accessibleCount = useMemo(() => {
    const base =
      selectedValues.length === 0 ? "0 élément sélectionné" : selectedSummary;

    return `${base} sur ${items.length}`;
  }, [selectedSummary, selectedValues.length, items.length]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (rootRef.current?.contains(event.target as Node)) {
        return;
      }

      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className={componentClassName} id={fieldId} ref={rootRef}>
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
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-labelledby={`${fieldId}-label ${countId}`}
          disabled={disabled}
          data-empty={selectedValues.length === 0}
          onClick={() => setIsOpen((currentIsOpen) => !currentIsOpen)}
        >
          <span className="dropdown-multi-select__summary">
            {selectedSummary}
          </span>
          <span id={countId} className="dropdown-multi-select__sr-only">
            {accessibleCount}
          </span>
        </button>

        {isOpen && items.length > 0 ? (
          <div
            id={panelId}
            className="dropdown-multi-select__list"
            role="group"
            aria-labelledby={triggerId}
          >
            <MultiSelectListComponent
              items={effectiveItems}
              onChange={(id, checked) => {
                const nextValues = checked
                  ? [...selectedValues, id]
                  : selectedValues.filter((value) => value !== id);
                setInternalValues(nextValues);
                onChange?.(nextValues);
              }}
            />
          </div>
        ) : null}
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
        message={message || error}
        messageType={messageType || (error ? "error" : "success")}
      />
    </div>
  );
};

DropdownMultiSelectCommon.displayName = "DropdownMultiSelectCommon";
