import React, {
  ReactNode,
  useId,
  type ComponentType,
  type ComponentProps,
} from "react";
import { CheckboxProps } from "../checkbox/CheckboxCommon";
import { ItemMessage } from "../../ItemMessage/ItemMessageCommon";

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
      <label key={inputProps.name} htmlFor={inputId}>
        <CheckboxComponent
          id={inputId}
          errorId={errorId}
          hasError={Boolean(errorMessage)}
          {...inputProps}
        />
        <span>{label}</span>
      </label>
      <div className="af-checkbox-text__error">
        <ItemMessageComponent message={errorMessage} />
      </div>
    </div>
  );
};

CheckboxTextCommon.displayName = "CheckboxTextCommon";
export { CheckboxTextCommon };
