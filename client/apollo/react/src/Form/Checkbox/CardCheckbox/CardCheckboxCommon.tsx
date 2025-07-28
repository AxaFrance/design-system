import {
  useId,
  type ChangeEventHandler,
  type ComponentProps,
  type ComponentType,
} from "react";
import { BREAKPOINT } from "../../../utilities/constants";
import { getComponentClassName } from "../../../utilities/getComponentClassName";
import { useIsSmallScreen } from "../../../utilities/hook/useIsSmallScreen";
import { ItemMessage } from "../../ItemMessage/ItemMessageLF";
import { CardCheckboxItem, type TCardCheckboxItem } from "./CardCheckboxItem";
import type { CheckboxComponent, IconComponent } from "./types";

export type CardCheckboxProps = Partial<TCardCheckboxItem> & {
  type: "vertical" | "horizontal";
  labelGroup?: string;
  descriptionGroup?: string;
  isRequired?: boolean;
  options: TCardCheckboxItem[];
  onChange?: ChangeEventHandler;
  error?: string;
};

type CardCheckboxCommonProps = CardCheckboxProps &
  CheckboxComponent &
  IconComponent & {
    ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
  };

export const CardCheckboxCommon = ({
  className,
  labelGroup,
  descriptionGroup,
  CheckboxComponent,
  IconComponent,
  isRequired,
  options,
  onChange,
  type = "vertical",
  error,
  ItemMessageComponent,
  ...inputProps
}: CardCheckboxCommonProps) => {
  const componentClassName = getComponentClassName(
    "af-card-checkbox__container",
    className,
  );
  const checkboxGroupClassName = getComponentClassName(
    "af-card-checkbox-group",
    className,
    type,
  );
  const errorId = useId();

  const isMobile = useIsSmallScreen(BREAKPOINT.SM);
  const size = isMobile ? "M" : "L";

  return (
    <fieldset className={componentClassName}>
      {labelGroup && (
        <legend className="af-card-checkbox__legend">
          <p>
            {labelGroup}
            {isRequired && <span aria-hidden>&nbsp;*</span>}
          </p>
          {descriptionGroup && (
            <p className="af-card-checkbox__description">{descriptionGroup}</p>
          )}
        </legend>
      )}
      <div className="af-card-checkbox__choices">
        <ul className={checkboxGroupClassName}>
          {options.map(({ hasError, ...optionProps }) => (
            <li key={crypto.randomUUID()}>
              <CardCheckboxItem
                {...inputProps}
                size={size}
                errorId={errorId}
                onChange={onChange}
                CheckboxComponent={CheckboxComponent}
                IconComponent={IconComponent}
                hasError={Boolean(error) || hasError}
                {...optionProps}
              />
            </li>
          ))}
        </ul>

        <ItemMessageComponent
          id={errorId}
          message={error}
          messageType="error"
        />
      </div>
    </fieldset>
  );
};

CardCheckboxCommon.displayName = "CardCheckboxCommon";
