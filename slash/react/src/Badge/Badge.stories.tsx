import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Slash/Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
};
export default meta;

export const Default: StoryObj<typeof Badge> = {
  name: "Badge",
  args: {
    children: "Lorem ipsum",
    classModifier: "success",
    disabled: false,
  },
  argTypes: {
    classModifier: {
      options: ["success", "info", "danger", "error"],
      control: { type: "select" },
      defaultValue: "succes",
    },
  },
};
export const BadgeIconStory: StoryObj<typeof Badge> = {
  name: "Badge With Icon",
  args: {
    children: <i className="glyphicon glyphicon-bell" />,
    classModifier: "error",
    disabled: false,
  },
  argTypes: {
    classModifier: {
      options: ["success", "info", "danger", "error"],
      control: { type: "select" },
      defaultValue: "error",
    },
  },
};

export const MultiExamples: StoryObj<typeof Badge> = {
  name: "Badge with modifiers",
  render: (args) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: "2rem",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <Badge disabled={args.disabled} classModifier="success">
            Badge Success
          </Badge>
          <Badge disabled={args.disabled} classModifier="danger">
            Badge Danger
          </Badge>
          <Badge disabled={args.disabled} classModifier="info">
            Badge Info
          </Badge>
          <Badge disabled={args.disabled} classModifier="error">
            Badge Error
          </Badge>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: "2rem",
            flexWrap: "wrap",
            gap: "5rem",
          }}
        >
          <Badge disabled={args.disabled} classModifier="success">
            <i className="glyphicon glyphicon-bell" />
          </Badge>
          <Badge disabled={args.disabled} classModifier="danger">
            <i className="glyphicon glyphicon-bell" />
          </Badge>
          <Badge disabled={args.disabled} classModifier="info">
            <i className="glyphicon glyphicon-bell" />
          </Badge>
          <Badge disabled={args.disabled} classModifier="error">
            <i className="glyphicon glyphicon-bell" />
          </Badge>
        </div>
      </div>
    );
  },
  args: {
    disabled: false,
  },
};
