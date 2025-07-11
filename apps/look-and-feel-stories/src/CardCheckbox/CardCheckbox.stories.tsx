import { CardCheckbox } from "@axa-fr/design-system-apollo-react/lf";
import homeIcons from "@material-symbols/svg-400/outlined/home.svg";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps, useEffect, useRef } from "react";

const argTypesDefault = {
  type: {
    control: { type: "inline-radio" },
    options: ["vertical", "horizontal"],
  },
  options: {
    control: { type: "object" },
  },
  onChange: { action: "onChange" },
} as const;

const optionsDefault = [
  {
    label: "Titre",
    description: "Sous-titre 1",
    subtitle: "Sous-titre 2",
    name: "paris",
    value: "paris",
    icon: homeIcons,
  },
  {
    label: "Titre",
    description: "Sous-titre 1",
    subtitle: "Sous-titre 2",
    name: "bruxelles",
    value: "bruxelles",
    icon: homeIcons,
  },
  {
    label: "Titre",
    description: "Sous-titre 1",
    subtitle: "Sous-titre 2",
    name: "lille",
    value: "lille",
    icon: homeIcons,
  },
];

const argsDefault = {
  type: "vertical",
  isRequired: true,
  error: "",
  options: optionsDefault,
} as const;

const meta: Meta = {
  title: "Components/Form/Checkbox/CardCheckbox",
  component: CardCheckbox,
  argTypes: argTypesDefault,
  args: argsDefault,
};

export default meta;

const renderFocus = ({
  options,
  ...args
}: ComponentProps<typeof CardCheckbox>) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref?.current?.focus?.();
  }, []);

  const mappedOptionsWithFocus = [
    { ...options[0], ref },
    options[1],
    options[2],
  ];

  return <CardCheckbox {...args} options={mappedOptionsWithFocus} />;
};

export const CardCheckboxStory: StoryObj<ComponentProps<typeof CardCheckbox>> =
  { name: "CardCheckbox" };

export const CardCheckboxFocus: StoryObj<ComponentProps<typeof CardCheckbox>> =
  { name: "CardCheckboxFocus", render: renderFocus };

export const CardCheckboxStoryChecked: StoryObj<
  ComponentProps<typeof CardCheckbox>
> = {
  name: "CardCheckbox checked",
  args: {
    ...argsDefault,
    options: optionsDefault.map((option) => ({ ...option, checked: true })),
  },
};

export const CardCheckboxWithLabel: StoryObj<
  ComponentProps<typeof CardCheckbox>
> = {
  name: "CardCheckboxWithLabel",
  args: {
    ...argsDefault,
    labelGroup: "Quelle ville ?",
    descriptionGroup: "Choisissez une ville",
  },
};

export const CardCheckboxWithError: StoryObj<
  ComponentProps<typeof CardCheckbox>
> = {
  name: "CardCheckboxWithError",
  args: {
    ...argsDefault,
    labelGroup: "Quelle ville ?",
    descriptionGroup: "Choisissez une ville",
    error: "There is an error",
    options: optionsDefault.map((option) => ({
      ...option,
      "aria-invalid": true,
    })),
  },
};

export const CardCheckboxWithErrorFocus: StoryObj<
  ComponentProps<typeof CardCheckbox>
> = {
  name: "CardCheckboxWithErrorFocus",
  render: renderFocus,
  args: {
    ...argsDefault,
    labelGroup: "Quelle ville ?",
    descriptionGroup: "Choisissez une ville",
    error: "There is an error",
    options: optionsDefault.map((option) => ({
      ...option,
      "aria-invalid": true,
    })),
  },
};
