import {
  Svg,
  InputText,
  itemMessageVariants,
} from "@axa-fr/design-system-apollo-react";
import euroSymbolIcon from "@material-symbols/svg-400/outlined/euro_symbol.svg";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InputText> = {
  component: InputText,
  title: "Components/Form/Input/InputText",
  args: {
    value: "John Doe",
    label: "Label",
    placeholder: "Placeholder",
    helper: "Informations complémentaires",
    name: "name",
    id: "nameid",
    disabled: false,
    required: false,
    unit: <Svg src={euroSymbolIcon} aria-label="en euros" />,
    description: "Description",
    buttonLabel: "En savoir plus",
    sideButtonLabel: "Modifier",
    error: "Error Message",
    message: "",
  },
  argTypes: {
    onChange: { action: "onChange" },
    messageType: {
      options: Object.values(itemMessageVariants),
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputText>;

const render = ({
  onChange,
  ...args
}: React.ComponentProps<typeof InputText>) => (
  <InputText onChange={onChange} {...args} />
);

export const InputTextPlaygroundStory: Story = {
  name: "Playground",
  render,
};
