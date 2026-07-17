import {
  type ComponentProps,
  type ComponentType,
  type FC,
  type ReactNode,
} from "react";
import { getClassName } from "../../utilities/getClassName";

export type ItemMultiSelectVariant = "primary" | "secondary";

export type ItemMultiSelectCommonProps = Omit<
  ComponentProps<"input">,
  "type"
> & {
  label: ReactNode;
  variant?: ItemMultiSelectVariant;
  Checkbox: ComponentType<ComponentProps<"input">>;
};

export const ItemMultiSelectCommon: FC<ItemMultiSelectCommonProps> = ({
  label,
  variant = "primary",
  className = "",
  id,
  Checkbox,
  ...inputProps
}) => (
  <label
    className={getClassName({
      baseClassName: "af-item-multi-select",
      modifiers: [variant],
      className: className ?? "",
    })}
    htmlFor={id}
  >
    <span className="af-item-multi-select__checkbox">
      <Checkbox id={id} {...inputProps} />
    </span>
    <span className="af-item-multi-select__label">{label}</span>
  </label>
);

ItemMultiSelectCommon.displayName = "ItemMultiSelectCommon";
