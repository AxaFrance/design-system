import { CardRadio } from "@axa-fr/design-system-apollo-react";
import homeIcon from "@material-symbols/svg-400/outlined/home.svg";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps, useEffect, useRef } from "react";

const optionsDefault = [
  {
    label: "Titre",
    description: "Sous-titre 1",
    subtitle: "Sous-titre 2",
    name: "city",
    value: "paris",
    icon: homeIcon,
  },
  {
    label: "Titre",
    description: "Sous-titre 1",
    subtitle: "Sous-titre 2",
    name: "city",
    value: "bruxelles",
    icon: homeIcon,
  },
  {
    label: "Titre",
    description: "Sous-titre 1",
    subtitle: "Sous-titre 2",
    name: "city",
    value: "lille",
    icon: homeIcon,
  },
];

const argsDefault = {
  type: "vertical",
  "aria-label": "Quelle ville ?",
  name: "cities",
  options: optionsDefault,
} as const;

const argTypesDefault = {
  type: {
    control: { type: "inline-radio" },
    options: ["vertical", "horizontal"],
  },
  includeIcons: {
    control: { type: "boolean" },
    description: "Toggle icon visibility",
  },
  options: {
    control: { type: "object" },
    description: "Radio card options",
  },
  onChange: { action: "onChange" },
  value: {
    control: { type: "select" },
    options: optionsDefault.map((option) => option.value),
  },
} as const;

const meta: Meta = {
  title: "Components/Form/Radio/CardRadio",
  component: CardRadio,
  argTypes: argTypesDefault,
  args: argsDefault,
};

export default meta;

const renderFocus = ({
  options,
  ...args
}: ComponentProps<typeof CardRadio>) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref?.current?.focus?.();
  }, []);

  const mappedOptionsWithFocus = [
    options[0],
    { ...options[1], ref },
    options[2],
  ];

  return <CardRadio {...args} options={mappedOptionsWithFocus} />;
};

export const CardRadioStory: StoryObj<ComponentProps<typeof CardRadio>> = {
  name: "CardRadio",
};

export const CardRadioWithIcon: StoryObj<ComponentProps<typeof CardRadio>> = {
  name: "CardRadio Without Icon",
  args: {
    ...argsDefault,
    options: optionsDefault.map((option) => ({ ...option, icon: undefined })),
  },
};

export const CardRadioFocus: StoryObj<ComponentProps<typeof CardRadio>> = {
  name: "CardRadio Focus",
  render: renderFocus,
};

export const CardRadioChecked: StoryObj<ComponentProps<typeof CardRadio>> = {
  name: "CardRadio Checked",
  args: {
    ...argsDefault,
    options: optionsDefault.map((option) => ({
      ...option,
      checked: true,
    })),
  },
};

export const CardRadioWithLabel: StoryObj<ComponentProps<typeof CardRadio>> = {
  name: "CardRadio With Label",
  args: {
    ...argsDefault,
    labelGroup: "Label du groupe",
    descriptionGroup: "Description du groupe",
  },
};

export const CardRadioWithError: StoryObj<ComponentProps<typeof CardRadio>> = {
  name: "CardRadio With Error",
  args: {
    ...argsDefault,
    labelGroup: "Label du groupe",
    descriptionGroup: "Description du groupe",
    error: "There is an error",
  },
};

export const CardRadioWithErrorFocus: StoryObj<
  ComponentProps<typeof CardRadio>
> = {
  name: "CardRadio With Error Focus",
  render: renderFocus,
  args: {
    ...argsDefault,
    labelGroup: "Label du groupe",
    descriptionGroup: "Description du groupe",
    error: "There is an error",
  },
};
