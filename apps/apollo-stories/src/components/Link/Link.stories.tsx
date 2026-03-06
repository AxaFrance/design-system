import { Link, Svg } from "@axa-fr/canopee-react/prospect";

import arrowLeftAlt from "@material-symbols/svg-400/outlined/arrow_left_alt.svg";
import personFill from "@material-symbols/svg-400/rounded/person-fill.svg";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Link> = {
  title: "Components/Link 🚧",
  component: Link,
};
export default meta;

export const Playground: StoryObj<typeof Link> = {
  args: {
    href: "https://fakelink.com",
    children: "My link",
  },
};

export const LinkInverse: StoryObj<typeof Link> = {
  args: {
    href: "https://fakelink.com",
    children: "My link",
    variant: "inverse",
  },
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "var(--blue-1000)" }],
    },
  },
};

export const LinkOpenInNewTab: StoryObj<typeof Link> = {
  args: {
    href: "https://fakelink.com",
    children: "My link",
    openInNewTab: true,
    rightIcon: <Svg src={personFill} />,
  },
};

export const LinkWithIcons: StoryObj<typeof Link> = {
  args: {
    href: "https://fakelink.com",
    children: "My link",
    leftIcon: <Svg src={arrowLeftAlt} />,
    rightIcon: <Svg src={personFill} />,
  },
};

export const LinkButton: StoryObj<typeof Link> = {
  name: "Link button 🚧",
  args: {
    href: "https://fakelink.com",
    children: "LinkButton",
    leftIcon: <Svg src={arrowLeftAlt} />,
    className: "af-btn-client",
  },
};
