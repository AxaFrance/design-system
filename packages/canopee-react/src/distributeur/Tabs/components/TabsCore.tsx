import { type FormEvent, useState } from "react";
import { TabsStateless, type TabsStatelessProps } from "./TabsStateless";

const DEFAULT_ACTIVE_INDEX = "0";

type Tabs = {
  onChange?: (event: FormEvent<HTMLButtonElement>) => void;
  activeIndex?: string;
};

export type TabsCoreProps = Tabs & Omit<TabsStatelessProps, "activeIndex">;

const TabsCore = ({
  activeIndex: activeIndexProp = DEFAULT_ACTIVE_INDEX,
  onChange,
  ...otherProps
}: TabsCoreProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(
    Number(activeIndexProp),
  );
  const [previousActiveIndexProp, setPreviousActiveIndexProp] =
    useState(activeIndexProp);

  // Keep the internal state in sync when the prop changes.
  if (activeIndexProp !== previousActiveIndexProp) {
    setPreviousActiveIndexProp(activeIndexProp);
    setActiveIndex(Number(activeIndexProp));
  }

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
