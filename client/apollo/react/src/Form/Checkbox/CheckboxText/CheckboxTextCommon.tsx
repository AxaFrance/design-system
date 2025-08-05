import { type ReactNode, useId, type ComponentType, forwardRef } from "react";
import type { ItemMessageProps } from "../../ItemMessage/ItemMessageCommon";
import type { CheckboxProps } from "../Checkbox/CheckboxCommon";

export type CheckboxTextProps = {
  label: string | ReactNode;
  errorMessage?: string;
} & Omit<CheckboxProps, "aria-errormessage" | "aria-invalid">;

export type CheckboxTextCommonProps = CheckboxTextProps & {
  CheckboxComponent: ComponentType<Omit<CheckboxProps, "checkBoxIcon">>;
  ItemMessageComponent: ComponentType<ItemMessageProps>;
};

export const CheckboxTextCommon = forwardRef<
  HTMLInputElement,
  CheckboxTextCommonProps
>(
  (
    {
      label,
      errorMessage,
      id,
      CheckboxComponent,
      ItemMessageComponent,
      ...inputProps
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;

    return (
      <div className="af-checkbox-text">
        <label htmlFor={inputId}>
          <CheckboxComponent
            id={inputId}
            {...inputProps}
            aria-errormessage={errorMessage ? errorId : undefined}
            aria-invalid={errorMessage ? true : undefined}
            ref={ref}
          />
          <span className="af-checkbox-text__label-content">{label}</span>
        </label>
        <ItemMessageComponent message={errorMessage} id={errorId} />
      </div>
    );
  },
);

CheckboxTextCommon.displayName = "CheckboxTextCommon";
