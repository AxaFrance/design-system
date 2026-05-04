import { Action, ToggleButton } from "@axa-fr/canopee-react/distributeur";
import preview from "../../../.storybook/preview";

const meta = preview.meta({
  component: ToggleButton,
  title: "Components/Header/ToggleButton",
});
export default meta;

const actionToggle = {
  icon: "menu-hamburger",
  title: "Toggle",
};

export const Default = meta.story({
  args: {
    children: (
      <Action
        icon={actionToggle.icon}
        id="togglemenu"
        onClick={() => {}}
        title={actionToggle.title}
      />
    ),
    idControl: "mainmenu",
  },
  render: (args) => (
    <ToggleButton idControl={args.idControl}>{args.children}</ToggleButton>
  ),
});
