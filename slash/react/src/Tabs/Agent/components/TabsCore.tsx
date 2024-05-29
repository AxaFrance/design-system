import React, { useState } from "react";
import { TabsStateless, TabsStatelessProps } from "./TabsStateless";

const DEFAULT_ACTIVE_INDEX = "0";

type Tabs = {
  onChange?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  activeIndex?: string;
};

export type TabsCoreProps = Tabs & Omit<TabsStatelessProps, "activeIndex">;

export const onChangeEvent =
  (onChange?: (event: React.MouseEvent<HTMLButtonElement>) => void) =>
  (setState: (newValue: string) => void) =>
  (event: React.MouseEvent<HTMLButtonElement>, index: string) => {
    if (onChange) {
      onChange(event);
    }
    if (index) {
      setState(index);
    }
  };

const TabsCore: React.FunctionComponent<TabsCoreProps> = ({
  activeIndex = DEFAULT_ACTIVE_INDEX,
  onChange,
  ...otherProps
}) => {
  const [stateActiveIndex, setActiveIndex] = useState<string>(activeIndex);

  return (
    <TabsStateless
      activeIndex={stateActiveIndex}
      {...otherProps}
      onChange={onChangeEvent(onChange)(setActiveIndex)}
    />
  );
};

export { TabsCore };
