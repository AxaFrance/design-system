import React, {
  type ComponentProps,
  ComponentPropsWithRef,
  type ComponentType,
  type ReactNode,
  useId,
} from "react";
import { CheckboxProps } from "../Checkbox/CheckboxCommon";
import { ItemMessage } from "../../Form/ItemMessage/ItemMessageCommon";
import { getComponentClassName } from "../../utilities/getComponentClassName";

type CheckboxComponent = {
  CheckboxComponent: ComponentType<CheckboxProps>;
};

type ItemMessageComponent = {
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
};

export type CheckboxCardProps = ComponentPropsWithRef<"input"> & {
  type: "vertical" | "horizontal";
  labelGroup?: string;
  descriptionGroup?: string;
  isRequired?: boolean;
  options: ({
    label: ReactNode;
    subtitle?: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
  } & React.InputHTMLAttributes<HTMLInputElement>)[];
  errorMessage?: string;
  onChange?: React.ChangeEventHandler;
};

export type CheckboxCardCommonProps = CheckboxCardProps &
  CheckboxComponent &
  ItemMessageComponent;

const CheckboxCardCommon = ({
  className,
  labelGroup,
  descriptionGroup,
  CheckboxComponent,
  ItemMessageComponent,
  isRequired,
  options,
  errorMessage,
  onChange,
  type = "vertical",
}: CheckboxCardCommonProps) => {
  const componentClassName = getComponentClassName(
    "af-checkbox__container",
    className,
  );
  const checkboxGroupClassName = getComponentClassName(
    `af-checkbox af-checkbox-select af-checkbox-select--${type}`,
    className,
  );
  const optionId = useId();
  return (
    <div className={componentClassName}>
      <div className="af-checkbox__label-container">
        {labelGroup && (
          <span className="af-checkbox__label" id={optionId}>
            {labelGroup}
            {isRequired && <span aria-hidden="true">&nbsp;*</span>}
          </span>
        )}
        {descriptionGroup && (
          <span className="af-checkbox__description">{descriptionGroup}</span>
        )}
      </div>
      <div role="group" className={checkboxGroupClassName}>
        {options.map(
          ({ label, description, subtitle, icon, ...inputProps }) => (
            <label key={inputProps.name} htmlFor={`id-${inputProps.name}`}>
              <CheckboxComponent
                inputProps={inputProps}
                inputId={`id-${inputProps.name}`}
                aria-invalid={Boolean(errorMessage)}
                onChange={onChange}
              />
              <div className="af-checkbox__content">
                {icon}
                <div className="af-checkbox__content-description">
                  <span>{label}</span>
                  {description && <span>{description}</span>}
                  {subtitle && <span>{subtitle}</span>}
                </div>
              </div>
            </label>
          ),
        )}
      </div>
      <ItemMessageComponent message={errorMessage} />
    </div>
  );
};
CheckboxCardCommon.displayName = "CheckboxCardCommon";
export { CheckboxCardCommon };
