import { type ReactNode, useId, type ComponentType, forwardRef } from "react";
import type { ItemMessageProps } from "../../ItemMessage/ItemMessageCommon";
import type { CheckboxProps } from "../Checkbox/CheckboxCommon";

export type CheckboxTextProps = {
  label: string | ReactNode;
  /**
   * @deprecated Use `message` and messageType instead.
   */
  errorMessage?: string;
} & Omit<CheckboxProps, "aria-errormessage" | "aria-invalid"> &
  Partial<ItemMessageProps>;

export type CheckboxTextCommonProps = CheckboxTextProps & {
  CheckboxComponent: ComponentType<Omit<CheckboxProps, "checkBoxIcon">>;
  ItemMessageComponent: ComponentType<ItemMessageProps>;
};

const CheckboxTextCommon = forwardRef<
  HTMLInputElement,
  CheckboxTextCommonProps
>(
  (
    {
      label,
      errorMessage,
      id,
      message,
      messageType,
      CheckboxComponent,
      ItemMessageComponent,
      ...inputProps
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const messageId = `${inputId}-error`;

    const hasError =
      (Boolean(message) && messageType === "error") || Boolean(errorMessage);

    return (
      <div className="af-checkbox-text">
        <label htmlFor={inputId}>
          <CheckboxComponent
            id={inputId}
            {...inputProps}
            aria-errormessage={hasError ? messageId : undefined}
            aria-invalid={hasError || undefined}
            ref={ref}
          />
          <span className="af-checkbox-text__label-content">{label}</span>
        </label>
        <ItemMessageComponent
          message={message || errorMessage}
          id={messageId}
          messageType={messageType}
        />
      </div>
    );
  },
);

CheckboxTextCommon.displayName = "CheckboxTextCommon";

export { CheckboxTextCommon };
