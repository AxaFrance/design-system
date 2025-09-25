import "@axa-fr/design-system-apollo-css/dist/Grid/DebugGrid.css";
import type { ComponentType } from "react";
import type { CardCheckboxOptionProps } from "../Form/Checkbox/CardCheckboxOption/CardCheckboxOptionCommon";

export type DebugGridProps<P = object> = P & {
  cols?: number;
  isCheckedByDefault?: boolean;
};

export type DebugGridCommonProps<P = object> = DebugGridProps<P> & {
  CardCheckboxOption: ComponentType<CardCheckboxOptionProps>;
};

export const DebugGridCommon = <P = object,>({
  cols = 12,
  isCheckedByDefault = false,
  CardCheckboxOption,
  ...props
}: DebugGridCommonProps<P>) => {
  // The forceVisible prop is a hidden prop to force the component's visibility when building the storybook
  const forceVisible =
    (props as { forceVisible?: boolean })?.forceVisible || false;
  if (process.env.NODE_ENV === "production" && !forceVisible) {
    return null;
  }

  return (
    <>
      <CardCheckboxOption
        type="horizontal"
        name="debuggrid"
        label="Grid"
        defaultChecked={isCheckedByDefault}
      />

      <div className="debug-grid" role="presentation">
        <div className="grid">
          {[...Array(cols).keys()].map((col: number) => (
            <div key={col} className="cols" />
          ))}
        </div>
      </div>
    </>
  );
};
