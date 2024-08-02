import React, { useMemo } from "react";
import { components, OptionProps } from "react-select";

const CustomOption: React.FC<OptionProps> = ({ getValue, ...otherProps }) => {
  const value = useMemo(() => getValue(), [getValue]);
  return (
    <components.Option {...otherProps} getValue={getValue} data-value={value} />
  );
};

export { CustomOption };
