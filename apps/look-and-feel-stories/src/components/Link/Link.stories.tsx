import { Link, Icon } from "@axa-fr/canopee-react/client";
import arrowLeftAlt from "@material-symbols/svg-400/outlined/arrow_left_alt.svg";
import personFill from "@material-symbols/svg-400/rounded/person-fill.svg";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

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
  },
};

export const LinkWithIcons: StoryObj<typeof Link> = {
  args: {
    href: "https://fakelink.com",
    children: "My link",
    leftIcon: <Icon src={arrowLeftAlt} />,
    rightIcon: <Icon src={personFill} />,
  },
};

type LinkStoryProps = ComponentProps<typeof Link> & {
  classNameButton: "" | "secondary" | "tertiary";
};

const LinkButton = ({ classNameButton, ...args }: LinkStoryProps) => (
  <Link
    {...args}
    className={`af-btn-client ${classNameButton ? `af-btn-client--${classNameButton}` : ""}`}
  />
);
export const LinkButtonStory: StoryObj<LinkStoryProps> = {
  name: "Link button 🚧",
  render: LinkButton,
  args: {
    href: "https://fakelink.com",
    children: "LinkButton",
    leftIcon: <Icon src={arrowLeftAlt} />,
  },
  argTypes: {
    classNameButton: {
      options: ["", "secondary", "tertiary"],
      control: { type: "multi-select" },
    },
  },
};
