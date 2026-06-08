import "@axa-fr/canopee-css/distributeur/Form/Experimental/Radio.css";

export type RadioButtonProps = {
  id: string;
  name: string;
  value: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const RadioButton = ({
  id,
  name,
  value,
  disabled,
  checked,
  label,
  onChange,
  ...props
}: RadioButtonProps) => {
  return (
    <label className="af-radio__button" htmlFor={id}>
      {label}
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        {...props}
      />
    </label>
  );
};
