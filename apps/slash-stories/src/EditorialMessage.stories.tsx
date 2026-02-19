import {
  EditorialMessage,
  EditorialMessageProps,
  type EditorialMessageType,
} from "@axa-fr/canopee-react/distributeur";

import accessibilityIcon from "@material-symbols/svg-700/outlined/accessibility_new-fill.svg";
import eco from "@material-symbols/svg-700/outlined/eco-fill.svg";
import promotionIcon from "@material-symbols/svg-700/outlined/percent-fill.svg";
import { Meta, StoryObj } from "@storybook/react";
import { InputType } from "storybook/internal/types";

const TYPES = ["green", "information", "promotion"] as EditorialMessageType[];
const iconNames = [
  "accessibility_new-fill",
  "eco-fill",
  "percent-fill",
] as const;

const typeInputType: InputType = {
  options: TYPES,
  control: {
    type: "inline-radio",
  },
  table: {
    type: {
      summary: "string",
    },
    category: "Style",
  },
  description:
    "Type of the editorial message. Used to determine the icon and style.",
};

/**
 * Visual component used to highlight information about accessibility, promotions, eco-design, etc.
 * Its display is not triggered by user interaction.
 */
const meta = {
  title: "Components/EditorialMessage",
  component: EditorialMessage,
  argTypes: {
    type: typeInputType,
    children: {
      control: { type: "text" },
      description:
        "Content of the editorial message. Either children or title must be provided.",
      table: {
        category: "Content",
        type: {
          summary: "string",
        },
      },
    },
    title: {
      control: { type: "text" },
      description:
        "Title of the message. Either title or children must be provided.",
      table: {
        category: "Content",
        type: {
          summary: "string",
        },
      },
    },
    icon: {
      control: { type: "inline-radio" },
      options: iconNames,
      description: "Icon displayed in the editorial message, as a URI.",
      table: {
        category: "Style",
      },
      mapping: {
        "accessibility_new-fill": accessibilityIcon,
        "eco-fill": eco,
        "percent-fill": promotionIcon,
      },
    },
  },
  render: (args) => <EditorialMessage {...args} icon={args.icon} />,
} satisfies Meta<EditorialMessageProps>;

export default meta;

type Story = StoryObj<EditorialMessageProps>;

export const Green: Story = {
  args: {
    type: "green",
    title: "Eco-conception",
    icon: "eco-fill",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};

export const Information: Story = {
  args: {
    type: "information",
    title: "Accessibility",
    icon: "accessibility_new-fill",
    children:
      "This service is designed to be accessible to everyone, including people with disabilities.",
  },
};

export const Promotion: Story = {
  args: {
    type: "promotion",
    title: "Promotion",
    icon: "percent-fill",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};

export const NoContent: Story = {
  name: "No content (title only)",
  args: {
    type: "green",
    title: "This application was built with eco-design in mind.",
    icon: "eco-fill",
  },
  argTypes: {
    children: { control: false },
  },
};

export const NoTitle: Story = {
  name: "No Title (content only)",
  args: {
    type: "green",
    children: (
      <>
        <p>
          This application was built following eco-design best practices,
          minimizing its environmental impact through optimized code, reduced
          resource consumption, and sustainable development principles.
        </p>
        <p>
          We prioritize energy efficiency, limit data transfers, and implement
          green hosting solutions to ensure our digital footprint remains as
          small as possible while delivering exceptional user experience.
        </p>
      </>
    ),
    icon: "eco-fill",
  },
  argTypes: {
    children: { control: false },
    title: { control: false },
  },
};
