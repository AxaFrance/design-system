import "@axa-fr/design-system-apollo-css/dist/Grid/DebugGrid.scss";
import type { ComponentProps, ComponentType } from "react";
import type { CardCheckboxCommon } from "../Form/Checkbox/CardCheckbox/CardCheckboxCommon";

export type DebugGridCommonProps<P = object> = P & {
  cols?: number;
  isCheckedByDefault?: boolean;
  CardCheckbox: ComponentType<
    Partial<ComponentProps<typeof CardCheckboxCommon>>
  >;
};

export const DebugGridCommon = <P = object,>({
  cols = 12,
  isCheckedByDefault = false,
  CardCheckbox,
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
      <CardCheckbox
        type="horizontal"
        options={[
          {
            name: "debuggrid",
            label: "Grid",
            defaultChecked: isCheckedByDefault,
          },
        ]}
      />

      <div className="debug-grid">
        <div className="grid">
          {[...Array(cols).keys()].map((col: number) => (
            <div key={col} className="cols" />
          ))}
        </div>
      </div>
    </>
  );
};
