import { type ComponentProps, type ReactNode } from "react";
import { type ConsumerFieldProps, Field } from "../core";
import { Date } from "./Date";

type Props = ConsumerFieldProps &
  ComponentProps<typeof Date> & {
    helpMessage?: ReactNode;
  };

const DateInput = ({ children, ...otherProps }: Props) => (
  <Field
    fieldClassNameSuffix="date"
    {...otherProps}
    renderInput={({ id, inputClassName, ariaInvalid, errorId, ...props }) => (
      <>
        <Date
          id={id}
          className={inputClassName}
          aria-describedby={errorId}
          aria-invalid={ariaInvalid}
          {...props}
        />
        {children}
      </>
    )}
  />
);

DateInput.displayName = "DateInput";

export { DateInput };
