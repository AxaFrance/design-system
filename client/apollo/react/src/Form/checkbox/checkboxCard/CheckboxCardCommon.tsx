import React, { ComponentPropsWithRef, useId } from "react";
import { BREAKPOINT } from "../../../utilities/constants";
import { getComponentClassName } from "../../../utilities/getComponentClassName";
import { generateId } from "../../../utilities/helpers/generateId";
import { useIsSmallScreen } from "../../../utilities/hook/useIsSmallScreen";
import { CheckboxCardItem, type TCheckboxCardItem } from "./CheckboxCardItem";
import type { CheckboxComponent, IconComponent } from "./types";

export type CheckboxCardProps = ComponentPropsWithRef<"input"> & {
  type: "vertical" | "horizontal";
  labelGroup?: string;
  descriptionGroup?: string;
  isRequired?: boolean;
  options: TCheckboxCardItem[];
  onChange?: React.ChangeEventHandler;
};

type CheckboxCardCommonProps = CheckboxCardProps &
  CheckboxComponent &
  IconComponent;

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
      <ul className={checkboxGroupClassName}>
        {options.map((inputProps) => (
          <li key={`checkbox-card-item_${generateId(inputProps)}`}>
            <CheckboxCardItem
              size={size}
              errorId={errorId}
              onChange={onChange}
              CheckboxComponent={CheckboxComponent}
              IconComponent={IconComponent}
              {...inputProps}
            />
          </li>
        ))}
      </ul>
    </fieldset>
  );
};

CheckboxCardCommon.displayName = "CheckboxCardCommon";
