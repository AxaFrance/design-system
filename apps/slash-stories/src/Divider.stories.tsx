import { Divider } from "@axa-fr/canopee-react/distributeur";
import preview from "../.storybook/preview";

const meta = preview.meta({
  title: "Components/Divider",
  component: Divider,
  args: {},
});
export default meta;

export const Default = meta.story({
  name: "Divider",
  render: ({ mode, ...args }) => (
    <div
      style={{
        display: "flex",
        flexDirection:
          mode === "horizontal" || mode === undefined ? "column" : "row",
        gap: "1rem",
      }}
    >
      <div>
        <span>Contenu 1</span>
      </div>
      <Divider mode={mode} {...args} />
      <div>
        <span>Contenu 2</span>
      </div>
    </div>
  ),
  args: {
    mode: "horizontal",
  },
});
