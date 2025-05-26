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
import { CheckboxCardItem, type TCheckboxCardItem } from "./CheckboxCardItem";
import type { CheckboxComponent, IconComponent } from "./types";

export type CheckboxCardProps = ComponentPropsWithRef<"input"> & {
  type: "vertical" | "horizontal";
  labelGroup?: string;
  descriptionGroup?: string;
  isRequired?: boolean;
  options: TCheckboxCardItem[];
  onChange?: React.ChangeEventHandler;
  error?: string;
};

type CheckboxCardCommonProps = CheckboxCardProps &
  CheckboxComponent &
  IconComponent & {
    ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
  };

export const CheckboxCardCommon = ({
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
}: CheckboxCardCommonProps) => {
  const componentClassName = getComponentClassName(
    "af-checkbox-card__container",
    className,
  );
  const checkboxGroupClassName = getComponentClassName(
    "af-checkbox-card-group",
    className,
    type,
  );
  const errorId = useId();

  const isMobile = useIsSmallScreen(BREAKPOINT.SM);
  const size = isMobile ? "M" : "L";

  return (
    <fieldset className={componentClassName}>
      <div className="af-checkbox-card__label-container">
        {labelGroup && (
          <legend className="af-checkbox-card__legend">
            {labelGroup}
            {isRequired && <span aria-hidden>&nbsp;*</span>}
            {descriptionGroup && (
              <p className="af-checkbox-card__description">
                {descriptionGroup}
              </p>
            )}
          </legend>
        )}
      </div>
      <div className="af-checkbox-card__choices">
        <ul className={checkboxGroupClassName}>
          {options.map(({ hasError, ...inputProps }) => (
            <li key={crypto.randomUUID()}>
              <CheckboxCardItem
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

CheckboxCardCommon.displayName = "CheckboxCardCommon";
