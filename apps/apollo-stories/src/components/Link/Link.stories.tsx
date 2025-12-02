import { Link, Svg, linkVariants } from "@axa-fr/canopee-react/prospect";
import arrowLeftAlt from "@material-symbols/svg-400/outlined/arrow_left_alt.svg";
import personFill from "@material-symbols/svg-400/rounded/person-fill.svg";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
};
export default meta;

export const Default: StoryObj<typeof Link> = {
  render: ({ ...args }) => (
    <div>
      <Link {...args} />
    </div>
  ),
  args: {
    href: "https://fakelink.com",
    children: "My link",
    openInNewTab: true,
  },
  argTypes: {
    variant: {
      options: Object.values(linkVariants),
      control: { type: "select" },
    },
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
