import React, { type FormEvent, useEffect, useState } from "react";
import { TabsStateless, type TabsStatelessProps } from "./TabsStateless";

const DEFAULT_ACTIVE_INDEX = "0";

type Tabs = {
  onChange?: (event: FormEvent<HTMLButtonElement>) => void;
  activeIndex?: string;
};

export type TabsCoreProps = Tabs & Omit<TabsStatelessProps, "activeIndex">;

const TabsCore: React.FunctionComponent<TabsCoreProps> = ({
  activeIndex: activeIndexProp = DEFAULT_ACTIVE_INDEX,
  onChange,
  ...otherProps
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(
    Number(activeIndexProp),
  );

  // Allow to update activeIndex from props
  useEffect(() => {
    setActiveIndex(Number(activeIndexProp));
  }, [activeIndexProp]);

  return (
    <TabsStateless
      activeIndex={activeIndex}
      {...otherProps}
      onChange={(e, index) => {
        if (onChange) {
          onChange(e);
        }
        if (index >= 0) {
          setActiveIndex(index);
        }
      }}
    />
  );
};

export { TabsCore };
