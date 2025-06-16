import React, {
  ComponentPropsWithRef,
  useId,
  type ComponentProps,
  type ComponentType,
} from "react";
import { BREAKPOINT } from "../../../utilities/constants";
import { getComponentClassName } from "../../../utilities/getComponentClassName";
import { useIsSmallScreen } from "../../../utilities/hook/useIsSmallScreen";
import { ItemMessage } from "../../ItemMessage/ItemMessageLF";
import { CardCheckboxItem, type TCardCheckboxItem } from "./CardCheckboxItem";
import type { CheckboxComponent, IconComponent } from "./types";

export type CardCheckboxProps = ComponentPropsWithRef<"input"> & {
  type: "vertical" | "horizontal";
  labelGroup?: string;
  descriptionGroup?: string;
  isRequired?: boolean;
  options: TCardCheckboxItem[];
  onChange?: React.ChangeEventHandler;
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
      <div className="af-card-checkbox__label-container">
        {labelGroup && (
          <div className="af-card-checkbox__legend">
            {labelGroup}
            {isRequired && <span aria-hidden>&nbsp;*</span>}
            {descriptionGroup && (
              <p className="af-card-checkbox__description">
                {descriptionGroup}
              </p>
            )}
          </div>
        )}
      </div>
      <div className="af-card-checkbox__choices">
        <ul className={checkboxGroupClassName}>
          {options.map(({ hasError, ...inputProps }) => (
            <li key={crypto.randomUUID()}>
              <CardCheckboxItem
                size={size}
                errorId={errorId}
                onChange={onChange}
                CheckboxComponent={CheckboxComponent}
                IconComponent={IconComponent}
                hasError={Boolean(error) || hasError}
                {...inputProps}
              />
            </li>
          ))}
        </ul>
        {error && (
          <ItemMessageComponent
            id={errorId}
            message={error}
            messageType="error"
          />
        )}
      </div>
    </fieldset>
  );
};

CardCheckboxCommon.displayName = "CardCheckboxCommon";
