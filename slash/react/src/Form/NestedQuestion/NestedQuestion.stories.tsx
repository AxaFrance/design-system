import type { Meta, StoryObj } from "@storybook/react";
import { NestedQuestion } from "./NestedQuestion";
import { TextInput } from "../Text";

const meta: Meta<typeof NestedQuestion> = {
  component: NestedQuestion,
  title: "Components/Form/NestedQuestion",
  args: { children: <TextInput label="Champ texte" /> },
};

export default meta;

type StoryProps = React.ComponentProps<typeof NestedQuestion>;
type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  name: "NestedQuestion",
  render: ({ children }) => <NestedQuestion>{children}</NestedQuestion>,
  args: {
    children: <TextInput label="Champ texte" />,
  },
};
