import {
  HelpButton,
  MessageTypes,
  MultiSelect,
  MultiSelectInput,
} from "@axa-fr/canopee-react/distributeur";
import { useState } from "react";
import { fn } from "storybook/test";
import preview from "../../.storybook/preview";

const meta = preview.meta({
  title: "Components/Form/Input/MultiSelect",
  component: MultiSelect,
  argTypes: {
    onChange: { action: "onChange" },
  },
  args: { onChange: fn() },
});

export default meta;

const options = [
  { value: "fun", label: "For fun", clearableValue: false },
  { value: "work", label: "For work" },
  { value: "drink", label: "For drink" },
  { value: "sleep", label: "For sleep" },
  { value: "swim", label: "For swim" },
];
const selectedValues = ["work", "drink"];

const commonArgs = {
  name: "multiSelectName",
  options,
  disabled: false,
  required: true,
  placeholder: "- Sélectionner -",
};

export const MultiSelectStory = meta.story({
  name: "MultiSelect",
  render: ({ values, onChange = () => {}, ...args }) => {
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
    menuPortalTarget: document.body,
  },
  argTypes: {
    onChange: { action: "onChange" },
  },
});

export const MultiSelectOneValueStory = meta.story({
  name: "MultiSelect with one value",
  render: ({ value, onChange = () => {}, ...args }) => {
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
    value: "",
    menuPortalTarget: document.body,
  },
  argTypes: {
    onChange: { action: "onChange" },
  },
});

export const MultiSelectInputStory = meta.story({
  name: "MultiSelectInput",
  render: ({ values, onChange = () => {}, ...args }) => {
    const [newValues, setNewValues] = useState(values);

    return (
      <form className="af-form" name="myform">
        <MultiSelectInput
          label="Place type"
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
    messageType: MessageTypes.error,
    forceDisplayMessage: false,
    message: "",
    isVisible: true,
    classModifier: "",
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10",
    selectedLimit: 3,
    selectedLimitLabel: "",
    menuPortalTarget: document.body,
  },
  argTypes: {
    onChange: { action: "onChange" },
  },
});

export const MultiSelectInputWithChildrenStory = meta.story({
  name: "MultiSelectInput with help button",
  render: ({ values, onChange = () => {}, ...args }) => {
    const [newValues, setNewValues] = useState(values);

    return (
      <form className="af-form" name="myform">
        <MultiSelectInput
          label="Place type"
          values={newValues}
          onChange={(data) => {
            setNewValues(data.values);
            onChange(data);
          }}
          {...args}
        >
          <HelpButton mode="hover">Help</HelpButton>
        </MultiSelectInput>
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
    isVisible: true,
    classModifier: "",
    selectedLimit: 3,
    selectedLimitLabel: "",
    menuPortalTarget: document.body,
  },
  argTypes: {
    onChange: { action: "onChange" },
  },
});
