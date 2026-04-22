import { HelpButton } from "@axa-fr/canopee-react/distributeur";
import preview from "../.storybook/preview";
import "./HelpButton.stories.scss?inline";

const meta = preview.meta({
  title: "Components/HelpButton",
  component: HelpButton,
  args: {},
  argTypes: {
    placement: {
      options: [
        "auto",
        "auto-start",
        "auto-end",
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "right",
        "right-start",
        "right-end",
        "left",
        "left-start",
        "left-end",
      ],
      control: { type: "select" },
    },
    mode: {
      options: ["hover", "click"],
      control: { type: "inline-radio" },
    },
  },
  parameters: {
    layout: "centered",
  },
});

export const Default = meta.story({
  name: "HelpButton",
  render: ({ ...args }) => (
    <HelpButton {...args}>Lorem ipsum dolor sit amet</HelpButton>
  ),
  args: {
    mode: "hover",
  },
});

export const WithHtml = meta.story({
  name: "With HTML in the popover",
  render: ({ ...args }) => (
    <HelpButton {...args}>
      <div className="af-help-demo__container">
        <h3 className="af-help-demo__title">Profile</h3>
        <div className="af-help-demo__infos">
          <p className="af-help-demo__info">
            <span className="af-help-demo__info-title">Tweets</span>
            <span className="af-help-demo__info-number">1,337</span>
          </p>
          <p className="af-help-demo__info">
            <span className="af-help-demo__info-title">Following</span>
            <span className="af-help-demo__info-number">561</span>
          </p>
          <p className="af-help-demo__info">
            <span className="af-help-demo__info-title">Followers</span>
            <span className="af-help-demo__info-number">718</span>
          </p>
        </div>
      </div>
    </HelpButton>
  ),
  args: {
    mode: "hover",
    classModifier: "custom",
  },
});
