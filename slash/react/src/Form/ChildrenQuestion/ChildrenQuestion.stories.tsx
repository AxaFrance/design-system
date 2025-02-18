import type { Meta, StoryObj } from "@storybook/react";
import { ChildrenQuestion } from "./ChildrenQuestion";
import { TextInput } from "../Text";

const meta: Meta<typeof ChildrenQuestion> = {
  component: ChildrenQuestion,
  title: "Components/Form/ChildrenQuestion",
  args: { content: <TextInput label="Champ texte" /> },
};

export default meta;

type StoryProps = React.ComponentProps<typeof ChildrenQuestion>;
type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  name: "ChildrenQuestion",
  render: ({ content }) => <ChildrenQuestion content={content} />,
  args: {
    content: <TextInput label="Champ texte" />,
  },
};
