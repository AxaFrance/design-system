import "@axa-fr/canopee-css/distributeur/Form/Experimental/Radio.css";
import type { ChangeEvent, InputHTMLAttributes } from "react";

export type RadioButtonProps = {
  id: string;
  name: string;
  value: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const RadioButton = ({
  id,
  name,
  label,
  onChange,
  ...props
}: RadioButtonProps) => (
  <label className="af-radio__button" htmlFor={id}>
    {label}
    <input type="radio" id={id} name={name} onChange={onChange} {...props} />
  </label>
);
