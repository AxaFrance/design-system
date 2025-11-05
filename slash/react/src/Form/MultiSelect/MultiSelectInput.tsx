import "@axa-fr/design-system-slash-css/dist/Form/MultiSelect/MultiSelect.css";

import { type ComponentProps } from "react";
import { ConsumerFieldProps, Field } from "../core";
import { MultiSelect } from "./MultiSelect";

type Props = ConsumerFieldProps & ComponentProps<typeof MultiSelect>;

const MultiSelectInput = ({ label, children, ...multiSelectProps }: Props) => {
  return (
    <Field
      label={label}
      {...multiSelectProps}
      classNameSuffix="select"
      renderInput={({ id, ariaInvalid, errorId, ...props }) => {
        return (
          <>
            <MultiSelect
              id={id}
              aria-invalid={ariaInvalid}
              aria-describedby={errorId}
              {...props}
            />
            {children}
          </>
        );
      }}
    />
  );
};

export { MultiSelectInput };
