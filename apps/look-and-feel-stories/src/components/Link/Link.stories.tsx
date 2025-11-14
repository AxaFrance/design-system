import { Link, Svg } from "@axa-fr/design-system-look-and-feel-react";
import arrowLeftAlt from "@material-symbols/svg-400/outlined/arrow_left_alt.svg";
import personFill from "@material-symbols/svg-400/rounded/person-fill.svg";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
};
export default meta;

export const Default: StoryObj<typeof Link> = {
  args: {
    href: "https://fakelink.com",
    children: "My link",
    openInNewTab: true,
  },
};

export const LinkWithCustomIcons: StoryObj<typeof Link> = {
  args: {
    href: "https://fakelink.com",
    children: "My link",
    openInNewTab: true,
    leftIcon: <Svg src={arrowLeftAlt} />,
    rightIcon: <Svg src={personFill} />,
  },
};
