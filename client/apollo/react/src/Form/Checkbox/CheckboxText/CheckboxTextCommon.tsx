import React, {
  type ReactNode,
  useId,
  type ComponentProps,
  type ComponentType,
  forwardRef,
} from "react";
import { ItemMessage } from "../../ItemMessage/ItemMessageCommon";
import { Checkbox } from "../Checkbox/CheckboxCommon";

export type CheckboxTextProps = {
  label: string | ReactNode;
  errorMessage?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "disabled">;

export type CheckboxTextCommonProps = CheckboxTextProps & {
  CheckboxComponent: ComponentType<
    Omit<ComponentProps<typeof Checkbox>, "checkBoxIcon">
  >;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
};

const CheckboxTextCommon = forwardRef<
  HTMLInputElement,
  CheckboxTextCommonProps
>(
  (
    {
      label,
      errorMessage,
      CheckboxComponent,
      ItemMessageComponent,
      ...inputProps
    },
    ref,
  ) => {
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
          ref={ref}
        />

        <label key={inputProps.name} htmlFor={inputId}>
          <span>{label}</span>
        </label>

        <ItemMessageComponent message={errorMessage} />
      </div>
    );
  },
);

CheckboxTextCommon.displayName = "CheckboxTextCommon";
export { CheckboxTextCommon };
