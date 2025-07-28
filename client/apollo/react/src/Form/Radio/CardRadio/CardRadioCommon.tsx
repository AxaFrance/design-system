import { type ComponentProps, type ComponentType, useId } from "react";
import { BREAKPOINT } from "../../../utilities/constants";
import { getComponentClassName } from "../../../utilities/getComponentClassName";
import { useIsSmallScreen } from "../../../utilities/hook/useIsSmallScreen";
import { ItemMessage } from "../../ItemMessage/ItemMessageLF";
import type { Radio } from "../Radio/RadioCommon";
import { CardRadioItem } from "./CardRadioItem";
import type {
  IconComponent,
  RadioComponent,
  TCardRadioItemOption,
} from "./types";

export type CardRadioProps = Omit<ComponentProps<typeof Radio>, "size"> & {
  type: "vertical" | "horizontal";
  labelGroup?: string;
  descriptionGroup?: string;
  isRequired?: boolean;
  value?: number | string;
  options: TCardRadioItemOption[];
  error?: string;
};

export type CardRadioCommonProps = CardRadioProps &
  RadioComponent &
  IconComponent & {
    ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
  };

const CardRadioCommon = ({
  className,
  labelGroup,
  descriptionGroup,
  RadioComponent,
  IconComponent,
  isRequired,
  options,
  type = "vertical",
  error,
  name,
  value,
  onChange,
  ItemMessageComponent,
  ...inputProps
}: CardRadioCommonProps) => {
  const componentClassName = getComponentClassName(
    "af-card-radio__container",
    className,
  );
  const RadioGroupClassName = getComponentClassName(
    "af-card-radio-group",
    className,
    type,
  );

  const cardRadioId = useId();
  const errorId = `${cardRadioId}:error`;

  const isMobile = useIsSmallScreen(BREAKPOINT.SM);
  const size: ComponentProps<typeof CardRadioItem>["size"] = isMobile
    ? "M"
    : "L";

  return (
    <fieldset
      className={componentClassName}
      aria-invalid={Boolean(error)}
      aria-errormessage={error ? errorId : undefined}
    >
      {labelGroup && (
        <legend className="af-card-radio__legend">
          <p>
            {labelGroup}
            {isRequired && <span aria-hidden>&nbsp;*</span>}
          </p>

          {descriptionGroup && (
            <p className="af-card-radio__description">{descriptionGroup}</p>
          )}
        </legend>
      )}
      <div className={RadioGroupClassName}>
        {options.map((cardRadioItemProps) => (
          <CardRadioItem
            key={`${name ?? cardRadioId}-${cardRadioItemProps.label}`}
            name={name}
            onChange={onChange}
            size={size}
            RadioComponent={RadioComponent}
            IconComponent={IconComponent}
            isInvalid={Boolean(error)}
            checked={
              value !== undefined
                ? value === cardRadioItemProps.value
                : undefined
            }
            {...inputProps}
            {...cardRadioItemProps}
          />
        ))}
      </div>
      <ItemMessageComponent id={errorId} message={error} messageType="error" />
    </fieldset>
  );
};
CardRadioCommon.displayName = "CardRadioCommon";
export { CardRadioCommon };
