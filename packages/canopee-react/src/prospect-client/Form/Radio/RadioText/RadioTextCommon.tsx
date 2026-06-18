import { type ComponentType, forwardRef, type ReactNode } from "react";
import type { GridContainerProps } from "../../../utilities/types/GridContainerProps";
import type { RadioProps } from "../Radio/RadioCommon";

export type RadioTextProps = {
  label: string | ReactNode;
  labelProps?: GridContainerProps<"label">;
} & RadioProps;

export type RadioTextCommonProps = RadioTextProps & {
  RadioComponent: ComponentType<RadioProps>;
};

const RadioTextCommon = forwardRef<HTMLInputElement, RadioTextCommonProps>(
  ({ label, labelProps, RadioComponent, ...inputProps }, ref) => (
    <label className="af-radio-text" {...labelProps}>
      <RadioComponent {...inputProps} ref={ref} />
      <span className="af-radio-text__label-content">{label}</span>
    </label>
  ),
);

RadioTextCommon.displayName = "RadioTextCommon";

export { RadioTextCommon };
