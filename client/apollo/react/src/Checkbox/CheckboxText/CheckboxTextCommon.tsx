import React, {
  ReactNode,
  useId,
  type ComponentType,
  type ComponentProps,
} from "react";
import { CheckboxProps } from "../Checkbox/CheckboxCommon";
import { ItemMessage } from "../../Form/ItemMessage/ItemMessageCommon";

type CheckboxComponent = {
  CheckboxComponent: ComponentType<CheckboxProps>;
};

type ItemMessageComponen = {
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
};

export type CheckboxTextProps = {
  label: string | ReactNode;
  errorMessage?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

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
  const idError = useId();
  let inputId = useId();
  inputId = inputProps.id || inputId;

  return (
    <div className="af-checkbox-text">
      <label key={inputProps.name} htmlFor={inputId}>
        <CheckboxComponent
          inputProps={inputProps}
          inputId={inputId}
          idError={idError}
          errorMessage={errorMessage}
        />
        <span>{label}</span>
      </label>
      <ItemMessageComponent message={errorMessage} />
    </div>
  );
};

CheckboxTextCommon.displayName = "CheckboxTextCommon";
export { CheckboxTextCommon };
