import React, { type CSSProperties } from "react";
import {
  components,
  type GroupBase,
  type ValueContainerProps,
  type MultiValueProps,
} from "react-select";
import { Option } from "./MultiSelect";

const ValueContainer = ({
  children,
  ...props
}: ValueContainerProps<Option, boolean, GroupBase<Option>>) => {
  const { selectProps, getStyles, innerProps } = props;
  const {
    selectedLimit,
    selectedLimitLabel,
    value: selectedOptions,
    isMulti,
  } = selectProps;

  if (!isMulti) {
    return (
      <components.ValueContainer {...props}>
        {children}
      </components.ValueContainer>
    );
  }

  const [values, input] = children as [React.ReactNode[], React.ReactNode];
  const visibleOptions = React.Children.toArray(values).slice(0, selectedLimit);
  const extraCount =
    Array.isArray(selectedOptions) && selectedLimit !== undefined
      ? selectedOptions.length - selectedLimit
      : 0;

  const multiValueLabelStyles = {
    ...(getStyles(
      "multiValueLabel",
      props as MultiValueProps<Option, boolean, GroupBase<Option>>,
    ) as CSSProperties),
  };

  return (
    <components.ValueContainer {...props}>
      {extraCount > 0 ? (
        <>
          {visibleOptions}
          <div
            {...innerProps}
            style={multiValueLabelStyles}
            className="multi-value-limit"
          >
            + {extraCount} {selectedLimitLabel || ""}
          </div>
        </>
      ) : (
        values
      )}
      {input}
    </components.ValueContainer>
  );
};

export { ValueContainer };
