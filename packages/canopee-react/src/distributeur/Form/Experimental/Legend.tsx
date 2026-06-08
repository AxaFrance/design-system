import "@axa-fr/canopee-css/distributeur/Form/Experimental/Label.css";
import type { ComponentProps } from "react";

export type LegendProps = ComponentProps<"legend"> & {
  /**
   * Whether the label is required or not.
   * This will add a `*` after the label text.
   * This is purely presentational and does not enforce any validation logic.
   * @default false
   */
  required?: boolean;
};

export const Legend = ({
  children,
  required = false,
  ...props
}: LegendProps) => (
  <span className="af-label" {...props}>
    {children}
    {required ? (
      <span className="af-label__required" aria-hidden>
        *
      </span>
    ) : null}
  </span>
);
