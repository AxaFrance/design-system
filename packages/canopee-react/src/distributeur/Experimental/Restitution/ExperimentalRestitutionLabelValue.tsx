import type { ComponentProps, ReactNode } from "react";
import { ExperimentalRestitutionLabel } from "./ExperimentalRestitutionLabel";
import { ExperimentalRestitutionValue } from "./ExperimentalRestitutionValue";

export type ExperimentalRestitutionLabelValueProps = {
  label: ReactNode;
  value: ReactNode;
  labelProps?: ComponentProps<"dt">;
  valueProps?: ComponentProps<"dd">;
};

export const ExperimentalRestitutionLabelValue = ({
  label,
  value,
  labelProps,
  valueProps,
}: ExperimentalRestitutionLabelValueProps) => (
  <>
    <ExperimentalRestitutionLabel {...labelProps}>
      {label}
    </ExperimentalRestitutionLabel>
    <ExperimentalRestitutionValue {...valueProps}>
      {value}
    </ExperimentalRestitutionValue>
  </>
);
