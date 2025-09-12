import "@axa-fr/design-system-slash-css/dist/common/grid.scss";
import "@axa-fr/design-system-slash-css/dist/common/reboot.scss";
import "@axa-fr/design-system-slash-css/dist/Form/core/FormCore.scss";
import { ComponentPropsWithRef } from "react";
import { type ConsumerFieldProps, Field } from "../core";

import { Number } from "./Number";

type Props = ConsumerFieldProps & ComponentPropsWithRef<typeof Number>;

export const NumberInput = ({ children, ...props }: Props) => {
  return (
    <Field
      {...props}
      renderInput={({
        id,
        classModifier,
        ariaInvalid,
        errorId,
        ...inputProps
      }) => (
        <>
          <Number
            id={id}
            classModifier={classModifier}
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
