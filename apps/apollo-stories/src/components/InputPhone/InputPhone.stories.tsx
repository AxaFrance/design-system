import type { Meta, StoryObj } from "@storybook/react";
import { InputPhone } from "@axa-fr/design-system-apollo-react";

const meta: Meta<typeof InputPhone> = {
  component: InputPhone,
  title: "Components/Form/Input/InputPhone",
  args: {
    value: "John Doe",
    label: "Label",
    helper: "Informations complémentaires",
    name: "name",
    id: "nameid",
    disabled: false,
    required: true,
    showSelect: false,
    className: "",
    type: "text",
    buttonLabel: "Hello",
    sideButtonLabel: "Modifier",
    description: "Description",
    unit: undefined,
    pattern: "[0-9]{10}",
    classModifier: "error",
    error: "Titre du Message",
  },
  argTypes: {
    onChange: { action: "onChange" },
  },
};

export default meta;

type Story = StoryObj<typeof InputPhone>;

const render = ({
  onChange,
  ...args
}: React.ComponentProps<typeof InputPhone>) => (
  <InputPhone onChange={onChange} {...args} />
);

export const InputPhonePlaceholderStory: Story = {
  name: "Text placeholder",
  render,
  args: {
    value: "",
  },
};
