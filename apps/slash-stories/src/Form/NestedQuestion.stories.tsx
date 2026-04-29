import { NestedQuestion, TextInput } from "@axa-fr/canopee-react/distributeur";
import preview from "../../.storybook/preview";

const meta = preview.meta({
  component: NestedQuestion,
  title: "Components/Form/NestedQuestion",
  args: { children: <TextInput label="Champ texte" /> },
});

export const Playground = meta.story({
  name: "NestedQuestion",
  render: ({ children }) => <NestedQuestion>{children}</NestedQuestion>,
  args: {
    children: <TextInput label="Champ texte" />,
  },
});
