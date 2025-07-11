import { CheckboxText } from "@axa-fr/design-system-apollo-react";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps, useEffect, useRef } from "react";

const argTypesDefault = {
  label: {
    control: { type: "text" },
  },
  name: {
    control: { type: "text" },
  },
  value: {
    control: { type: "text" },
  },
  errorMessage: {
    control: { type: "text" },
  },
  checked: {
    control: { type: "boolean" },
  },
  onChange: { action: "onChange" },
} as const;

const argsDefault = {
  label:
    "J'accepte de fournir à AXA mes coordonnées ainsi que les données  relatives à mon projet et ma situation. Ces dernières seront transmises à mon conseiller AXA qui pourra  me contacter pour m'accompagner.",
  name: "option1",
  value: "option1",
};

const meta: Meta = {
  title: "Components/Form/Checkbox/CheckboxText",
  component: CheckboxText,
  argTypes: argTypesDefault,
  args: argsDefault,
};

export default meta;

const renderFocus = ({ ...args }: ComponentProps<typeof CheckboxText>) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref?.current?.focus?.();
  }, []);

  return <CheckboxText {...args} ref={ref} />;
};

export const CheckboxTextStory: StoryObj<ComponentProps<typeof CheckboxText>> =
  {
    name: "CheckboxText",
  };

export const CheckboxTextChecked: StoryObj<
  ComponentProps<typeof CheckboxText>
> = {
  name: "CheckboxTextChecked",
  args: {
    ...argsDefault,
    checked: true,
  },
};

export const CheckboxTextFocus: StoryObj<ComponentProps<typeof CheckboxText>> =
  {
    name: "CheckboxTextFocus",
    render: renderFocus,
  };

export const CheckboxTextWithErrorStory: StoryObj<
  ComponentProps<typeof CheckboxText>
> = {
  name: "CheckboxText With Error",
  args: {
    ...argsDefault,
    errorMessage: "There is an error",
  },
};

export const CheckboxTextWithErrorFocusStory: StoryObj<
  ComponentProps<typeof CheckboxText>
> = {
  name: "CheckboxText With Error focus",

  render: renderFocus,
  args: {
    ...argsDefault,
    errorMessage: "There is an error",
  },
};
