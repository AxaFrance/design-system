import { NestedQuestion, TextInput } from "@axa-fr/canopee-react/distributeur";
import preview from "../../.storybook/preview";

const meta = preview.meta({
  component: NestedQuestion,
  title: "Components/Form/NestedQuestion",
  args: { children: <TextInput label="Champ texte" /> },
});

export default meta;

export const Playground = meta.story({
  name: "NestedQuestion",
  render: ({ ...args }) => <NestedQuestion {...args} />,
  args: {
    children: <TextInput label="Champ texte" />,
  },
});
