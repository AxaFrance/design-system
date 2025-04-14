import { ComponentProps, forwardRef, ReactNode } from "react";
import { ConsumerFieldProps, Field } from "../core";
import { Date } from "./Date";

type Props = Omit<
  ConsumerFieldProps &
    ComponentProps<typeof Date> & {
      helpMessage?: ReactNode;
    },
  "renderInput"
>;

const DateInput = forwardRef<HTMLInputElement, Props>(
  ({ children, ...otherProps }, inputRef) => {
    return (
      <Field
        {...otherProps}
        renderInput={({ id, classModifier, ariaInvalid, errorId }) => (
          <Date
            id={id}
            classModifier={classModifier}
            ref={inputRef}
            aria-describedby={errorId}
            aria-invalid={ariaInvalid}
            {...otherProps}
          />
        )}
      >
        {children}
      </Field>
    );
  },
);

DateInput.displayName = "DateInput";

export { DateInput };
