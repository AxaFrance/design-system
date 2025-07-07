import { Link, Svg, type LinkProps } from "@axa-fr/design-system-slash-react";
import editIcons from "@material-symbols/svg-400/outlined/edit.svg";
import saveIcons from "@material-symbols/svg-400/outlined/save.svg";
import { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

const CssIcons = {
  "(none)": "none",
  "/public/save.svg": saveIcons,
  "/public/edit.svg": editIcons,
} as const;

const meta: Meta<LinkProps> = {
  title: "Components/Link",
  component: Link,
  args: {
    onClick: fn(),
  },
};

export default meta;

type AnchorStoryType = {
  leftIcon: keyof typeof CssIcons;
  rightIcon: keyof typeof CssIcons;
  disabled: boolean;
  children: string;
  href: string;
  className: string;
};

export const LinkAsAnchorStory: StoryObj<AnchorStoryType> = {
  name: "Link",
  render: ({ rightIcon, leftIcon, ...args }) => {
    const getIcon = (type: keyof typeof CssIcons) => {
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
  },
};

export const CustomLinkStory: StoryObj<LinkProps> = {
  name: "Custom Link, using a button",
  render: () => (
    <Link
      render={({ className }) => (
        <button
          type="button"
          className={className}
          // eslint-disable-next-line no-alert
          onClick={() => alert("Button clicked!")}
        >
          This link is actually a button 🤯
        </button>
      )}
    />
  ),
  args: {},
  argTypes: {},
};
