import { Meta, StoryObj } from "@storybook/react";
import { Tag } from "@axa-fr/design-system-slash-react";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
};
export default meta;

export const Default: StoryObj<typeof Tag> = {
  name: "Tag",
  args: {
    children: "Lorem ipsum",
    classModifier: "success",
    disabled: false,
  },
  argTypes: {
    classModifier: {
      options: [
        "success",
        "info",
        "warning",
        "error",
        "axa",
        "black",
        "purple",
        "gray",
      ],
      control: { type: "select" },
      defaultValue: "success",
    },
  },
};
export const BadgeIconStory: StoryObj<typeof Tag> = {
  name: "Tag With Icon",
  args: {
    children: (
      <>
        <i className="glyphicon glyphicon-bell" /> success
      </>
    ),
    classModifier: "success",
    disabled: false,
  },
  argTypes: {
    classModifier: {
      options: [
        "success",
        "info",
        "warning",
        "error",
        "axa",
        "black",
        "purple",
        "gray",
      ],
      control: { type: "select" },
      defaultValue: "error",
    },
  },
};

export const MultiExamples: StoryObj<typeof Tag> = {
  name: "Tag with modifiers",
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
          <Tag disabled={args.disabled} classModifier="success">
            Tag Success
          </Tag>
          <Tag disabled={args.disabled} classModifier="warning">
            Tag Warning
          </Tag>
          <Tag disabled={args.disabled} classModifier="info">
            Tag Info
          </Tag>
          <Tag disabled={args.disabled} classModifier="error">
            Tag Error
          </Tag>
          <Tag disabled={args.disabled} classModifier="axa">
            Tag Axa
          </Tag>
          <Tag disabled={args.disabled} classModifier="black">
            Tag Black
          </Tag>
          <Tag disabled={args.disabled} classModifier="purple">
            Tag Purple
          </Tag>
          <Tag disabled={args.disabled} classModifier="gray">
            Tag Gray
          </Tag>
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
          <Tag disabled={args.disabled} classModifier="success">
            <i className="glyphicon glyphicon-bell" />
            Tag Success
          </Tag>
          <Tag disabled={args.disabled} classModifier="warning">
            <i className="glyphicon glyphicon-bell" />
            Tag Warning
          </Tag>
          <Tag disabled={args.disabled} classModifier="info">
            <i className="glyphicon glyphicon-bell" />
            Tag Info
          </Tag>
          <Tag disabled={args.disabled} classModifier="error">
            <i className="glyphicon glyphicon-bell" />
            Tag Error
          </Tag>
          <Tag disabled={args.disabled} classModifier="axa">
            <i className="glyphicon glyphicon-bell" />
            Tag Axa
          </Tag>
          <Tag disabled={args.disabled} classModifier="black">
            <i className="glyphicon glyphicon-bell" />
            Tag Black
          </Tag>
          <Tag disabled={args.disabled} classModifier="purple">
            <i className="glyphicon glyphicon-bell" />
            Tag Purple
          </Tag>
          <Tag disabled={args.disabled} classModifier="gray">
            <i className="glyphicon glyphicon-bell" />
            Tag Gray
          </Tag>
        </div>
      </div>
    );
  },
  args: {
    disabled: false,
  },
};
