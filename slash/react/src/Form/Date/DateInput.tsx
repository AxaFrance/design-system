import { ComponentProps, forwardRef, ReactNode } from "react";
import { ConsumerFieldProps, Field } from "../core";
import { Date } from "./Date";

type Props = ConsumerFieldProps &
  ComponentProps<typeof Date> & {
    helpMessage?: ReactNode;
  };

const DateInput = forwardRef<HTMLInputElement, Props>(
  ({ children, ...otherProps }, inputRef) => {
    return (
      <Field
        classNameSuffix="date"
        {...otherProps}
        renderInput={({
          id,
          classModifier,
          ariaInvalid,
          errorId,
          ...props
        }) => (
          <>
            <Date
              id={id}
              classModifier={classModifier}
              ref={inputRef}
              aria-describedby={errorId}
              aria-invalid={ariaInvalid}
              {...props}
            />
            {children}
          </>
        )}
      />
    );
  },
);

DateInput.displayName = "DateInput";

export { DateInput };
