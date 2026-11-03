import type { CheckboxTextProps } from "@axa-fr/canopee-react/distributeur/experimental";

export const checkboxStates = [
  { value: "default", label: "Default" },
  { value: "selected", label: "Selected", defaultChecked: true },
  { value: "disabled", label: "Disabled", disabled: true },
  {
    value: "selected-disabled",
    label: "Selected disabled",
    defaultChecked: true,
    disabled: true,
  },
  { value: "error", label: "Error", "aria-invalid": true },
  {
    value: "selected-error",
    label: "Selected error",
    defaultChecked: true,
    "aria-invalid": true,
  },
] satisfies Omit<CheckboxTextProps, "name">[];
