import { useId, type ComponentProps, type ReactNode } from "react";

type ItemProgressBarProps = ComponentProps<"progress"> & {
  label?: ReactNode;
};

export const ItemProgressBar = ({
  id,
  label,
  className,
  ...props
}: ItemProgressBarProps) => {
  let inputId = useId();
  inputId = id || inputId;

  return (
    <>
      {Boolean(label) && (
        <label className="af-item-progress-bar__label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <progress
        id={inputId}
        className={["af-item-progress-bar", className]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    </>
  );
};

ItemProgressBar.displayName = "ItemProgressBar";
