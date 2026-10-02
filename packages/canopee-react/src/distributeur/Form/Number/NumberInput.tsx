import { type ComponentPropsWithRef } from "react";
import { type ConsumerFieldProps, Field } from "../core";

import { Number } from "./Number";

type Props = ConsumerFieldProps & ComponentPropsWithRef<typeof Number>;

export const NumberInput = ({ children, ...props }: Props) => {
  return (
    <Field
      {...props}
      renderInput={({
        id,
        inputClassName,
        ariaInvalid,
        errorId,
        ...inputProps
      }) => (
        <>
          <Number
            id={id}
            className={inputClassName}
            aria-describedby={errorId}
            aria-invalid={ariaInvalid}
            {...inputProps}
          />
          {children}
        </>
      )}
    />
  );
};
