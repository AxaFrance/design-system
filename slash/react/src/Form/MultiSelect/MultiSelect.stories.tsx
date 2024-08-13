import type { Meta, StoryObj } from "@storybook/react";
import { useState, type ComponentPropsWithoutRef } from "react";
import { MessageTypes } from "../core";
import { MultiSelect } from "./MultiSelect";
import { MultiSelectInput } from "./MultiSelectInput";

const meta: Meta = {
  title: "Slash/Components/Form/Input/MultiSelect",
  component: MultiSelect,
  argTypes: {
    onChange: { action: "onChange" },
  },
};

export default meta;

const options = [
  { value: "fun", label: "For fun", clearableValue: false },
  { value: "work", label: "For work" },
  { value: "drink", label: "For drink" },
  { value: "sleep", label: "For sleep" },
  { value: "swim", label: "For swim" },
];
const selectedValues = ["work", "drink"];

type Story = StoryObj<ComponentPropsWithoutRef<typeof MultiSelect>>;

const commonArgs = {
  name: "multiSelectName",
  options,
  disabled: false,
  className: "",
  placeholder: "Select",
};

export const MultiSelectStory: Story = {
  name: "MultiSelect",
  render: ({ values, onChange = () => {}, ...args }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [newValues, setNewValues] = useState(values);

    return (
      <form className="af-form" name="myform">
        <MultiSelect
          values={newValues}
          onChange={(data) => {
            setNewValues(data.values);
            onChange(data);
          }}
          {...args}
        />
      </form>
    );
  },
  args: {
    ...commonArgs,
    values: selectedValues,
  },
  argTypes: {
    onChange: { action: "onChange" },
  },
};

export const MultiSelectOneValueStory: Story = {
  name: "MultiSelect with one value",
  render: ({ value, onChange = () => {}, ...args }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [newValue, setNewValue] = useState(value);

    return (
      <form className="af-form" name="myform">
        <MultiSelect
          value={newValue}
          onChange={(data) => {
            setNewValue(data.value);
            onChange(data);
          }}
          {...args}
        />
      </form>
    );
  },
  args: {
    ...commonArgs,
    value: selectedValues[0],
  },
  argTypes: {
    onChange: { action: "onChange" },
  },
};

export const MultiSelectInputStory: StoryObj<
  ComponentPropsWithoutRef<typeof MultiSelectInput>
> = {
  name: "MultiSelectInput",
  render: ({ values, onChange = () => {}, ...args }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [newValues, setNewValues] = useState(values);

    return (
      <form className="af-form" name="myform">
        <MultiSelectInput
          values={newValues}
          onChange={(data) => {
            setNewValues(data.values);
            onChange(data);
          }}
          {...args}
        />
      </form>
    );
  },
  args: {
    ...commonArgs,
    values: selectedValues,
    id: "uniqueid",
    label: "Place type",
    helpMessage: "Enter the place type",
    message: "",
    messageType: MessageTypes.error,
    forceDisplayMessage: false,
    isVisible: true,
    classModifier: "",
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10",
  },
  argTypes: {
    onChange: { action: "onChange" },
  },
};
