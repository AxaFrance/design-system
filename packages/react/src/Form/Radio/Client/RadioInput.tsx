import { ComponentProps, ReactNode } from "react";
import errorOutline from "@material-design-icons/svg/outlined/error_outline.svg";
import { Radio } from "./Radio";
import { Svg } from "../../../Svg";

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
        <Svg src={errorOutline} />
        {errorLabel}
      </div>
    )}
  </div>
);

export { RadioInput };
