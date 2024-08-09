import RcSlider from "rc-slider";
import {
  useCallback,
  useMemo,
  type ComponentProps,
  type ReactNode,
} from "react";
import { getComponentClassName } from "../../utilities";

type RcSliderProps = ComponentProps<typeof RcSlider>;
type Marks = RcSliderProps["marks"];

type Props = Omit<RcSliderProps, "marks" | "onChange" | "onChangeComplete"> & {
  classModifier?: string;
  options: { value: number; label?: string | ReactNode }[];
  id: string;
  name: string;
  onChange?: (selectedValue: {
    id: string;
    name: string;
    value: number;
  }) => void;
  onChangeComplete?: (selectedValue: {
    id: string;
    name: string;
    value: number;
  }) => void;
};

const Slider = ({
  options,
  value,
  defaultValue,
  className,
  classModifier,
  ...otherProps
}: Props) => {
  const defaultValueIndex = useMemo(() => {
    const newDefaultValueIndex = options.findIndex(
      (opt) => opt.value === (defaultValue || value),
    );
    return newDefaultValueIndex !== -1 ? newDefaultValueIndex : undefined;
  }, [defaultValue, options, value]);

  const valueIndex = useMemo(() => {
    const newValueIndex = options.findIndex((opt) => opt.value === value);
    return newValueIndex !== -1 ? newValueIndex : undefined;
  }, [value, options]);

  const marks = useMemo(
    () =>
      [...options]
        .sort((optA, optB) => optA.value - optB.value)
        .reduce((prevMarks, { value: optValue, label: optLabel }, index) => {
          const newMarks = { ...prevMarks };
          newMarks[index] = optLabel || optValue;
          return newMarks;
        }, {} as Marks),
    [options],
  );

  const componentClassName = useMemo(
    () => getComponentClassName(className, classModifier),
    [className, classModifier],
  );

  const formatOnChange = useCallback(
    (
      newValueIndex: number | number[],
      onChange?: (selectedValue: {
        id: string;
        name: string;
        value: number;
      }) => void,
    ): void => {
      if (onChange && !Array.isArray(newValueIndex)) {
        onChange({
          id: otherProps.id,
          name: otherProps.name,
          value: options[newValueIndex].value,
        });
      }
    },
    [options, otherProps.id, otherProps.name],
  );

  return (
    <RcSlider
      {...otherProps}
      min={0}
      max={options.length - 1}
      onChange={(newValueIndex) =>
        formatOnChange(newValueIndex, otherProps.onChange)
      }
      onChangeComplete={(newValueIndex) =>
        formatOnChange(newValueIndex, otherProps.onChangeComplete)
      }
      marks={marks}
      step={null}
      className={componentClassName}
      defaultValue={defaultValueIndex}
      value={valueIndex}
      disabled={otherProps.disabled || classModifier?.includes("disabled")}
      aria-required={classModifier?.includes("required")}
    />
  );
};

export { Slider };
