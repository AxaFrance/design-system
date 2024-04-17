import ErrorOutline from "@mui/icons-material/ErrorOutline";
import { ComponentProps, ReactNode } from "react";
import { Radio } from "./Radio";

type Props = Omit<ComponentProps<typeof Radio>, "placeholder"> & {
  label?: ReactNode;
  description?: ReactNode;
  errorLabel?: ReactNode;
};

const baseClass = "af-form-client__radio-input";

const RadioInput = ({
  label,
  description,
  erroneous = false,
  errorLabel,
  ...radioProps
}: Props) => (
  <div>
    {label && <div className={`${baseClass}-label`}>{label}</div>}
    {description && (
      <div className={`${baseClass}-description`}>{description}</div>
    )}
    <Radio erroneous={erroneous} {...radioProps} />
    {erroneous && errorLabel && (
      <div className={`${baseClass}-errorlabel`}>
        <ErrorOutline />
        {errorLabel}
      </div>
    )}
  </div>
);

export { RadioInput };
