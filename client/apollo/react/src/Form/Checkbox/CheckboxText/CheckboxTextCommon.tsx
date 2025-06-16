import React, {
  type ReactNode,
  useId,
  type ComponentProps,
  type ComponentType,
} from "react";
import { ItemMessage } from "../../ItemMessage/ItemMessageCommon";
import { CheckboxProps } from "../Checkbox/CheckboxCommon";

type CheckboxComponent = {
  CheckboxComponent: ComponentType<CheckboxProps>;
};

type ItemMessageComponen = {
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
};

export type CheckboxTextProps = {
  label: string | ReactNode;
  errorMessage?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "disabled">;

export type CheckboxTextCommonProps = CheckboxTextProps &
  CheckboxComponent &
  ItemMessageComponen;

const CheckboxTextCommon = ({
  label,
  errorMessage,
  CheckboxComponent,
  ItemMessageComponent,
  ...inputProps
}: CheckboxTextCommonProps) => {
  const errorId = useId();
  let inputId = useId();
  inputId = inputProps.id || inputId;

  return (
    <div className="af-checkbox-text">
      <CheckboxComponent
        id={inputId}
        errorId={errorId}
        hasError={Boolean(errorMessage)}
        {...inputProps}
      />

      <label key={inputProps.name} htmlFor={inputId}>
        <span>{label}</span>
      </label>

      <ItemMessageComponent message={errorMessage} />
    </div>
  );
};

CheckboxTextCommon.displayName = "CheckboxTextCommon";
export { CheckboxTextCommon };
