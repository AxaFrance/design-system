import { Link, Svg, type LinkProps } from "@axa-fr/design-system-slash-react";
import editIcons from "@material-symbols/svg-400/outlined/edit.svg";
import saveIcons from "@material-symbols/svg-400/outlined/save.svg";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const CssIcons: Record<string, string> = {
  "(none)": "none",
  "/public/save.svg": saveIcons,
  "/public/edit.svg": editIcons,
};

const meta: Meta<LinkProps<"a">> = {
  title: "Components/Link",
  component: Link,
  args: {
    onClick: fn(),
  },
};

export default meta;

export const LinkStory: StoryObj<typeof Link> = {
  name: "Link",
  render: ({ rightIcon, leftIcon, ...args }) => {
    const getIcon = (type: string) => {
      if (type === "/public/save.svg") {
        return <Svg src={saveIcons} />;
      }
      if (type === "/public/edit.svg") {
        return <Svg src={editIcons} />;
      }
      return undefined;
    };

    const leftIconProps = getIcon(leftIcon);
    const rightIconProps = getIcon(rightIcon);

    return (
      <Link
        {...args}
        target="_blank"
        leftIcon={leftIconProps}
        rightIcon={rightIconProps}
      />
    );
  },
  args: {
    href: "https://www.axa.fr",
    children: "axa.fr",
    leftIcon: "(none)",
    rightIcon: "(none)",
    disabled: false,
  },
  argTypes: {
    leftIcon: {
      options: Object.keys(CssIcons),
      control: { type: "select" },
    },
    rightIcon: {
      options: Object.keys(CssIcons),
      control: { type: "select" },
    },
    className: {
      table: {
        disable: true,
      },
    },
    component: {
      table: {
        disable: true,
      },
    },
  },
};
