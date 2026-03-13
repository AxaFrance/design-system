import "@axa-fr/canopee-css/distributeur/Form/Experimental/Label.css";
import type { ComponentProps } from "react";

type LabelProps = ComponentProps<"label"> & {
  /**
   * Whether the label is required or not.
   * This will add a `*` after the label text.
   * This is purely presentational and does not enforce any validation logic.
   * @default false
   */
  required?: boolean;
};
export const Label = ({ children, required = false, ...props }: LabelProps) => (
  <label className="af-label" {...props}>
    {children}
    {required ? (
      <span className="af-label__required" aria-hidden>
        *
      </span>
    ) : null}
  </label>
);
