import { Spinner } from "@axa-fr/canopee-react/distributeur";
import preview from "../.storybook/preview";

const meta = preview.meta({
  component: Spinner,
  title: "Components/Spinner",
  parameters: {
    layout: "fullscreen",
  },
});
export default meta;

export const Default = meta.story({
  name: "Spinner",
  render: ({ ...args }) => (
    <div style={{ height: "100vh" }}>
      <Spinner {...args} />
    </div>
  ),
  args: {
    variant: "inline",
    text: "Recherche en cours",
  },
});
