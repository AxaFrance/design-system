import { Tag } from "@axa-fr/design-system-slash-react";
import { Meta, StoryObj } from "@storybook/react";

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
    variant: {
      options: [
        "success",
        "information",
        "warning",
        "error",
        "default",
        "dark",
        "purple",
        "gray",
      ],
      control: { type: "select" },
      defaultValue: "success",
    },
  },
};
export const TagIconStory: StoryObj<typeof Tag> = {
  name: "Tag with Icon",
  args: {
    children: (
      <>
        <i className="glyphicon glyphicon-bell" /> success
      </>
    ),
    variant: "success",
    disabled: false,
  },
  argTypes: {
    variant: {
      options: [
        "success",
        "information",
        "warning",
        "error",
        "default",
        "dark",
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
          <Tag disabled={args.disabled}>Tag Default</Tag>
          <Tag disabled={args.disabled} variant="success">
            Tag Success
          </Tag>
          <Tag disabled={args.disabled} variant="warning">
            Tag Warning
          </Tag>
          <Tag disabled={args.disabled} variant="information">
            Tag Info
          </Tag>
          <Tag disabled={args.disabled} variant="error">
            Tag Error
          </Tag>
          <Tag disabled={args.disabled} variant="dark">
            Tag Black
          </Tag>
          <Tag disabled={args.disabled} variant="purple">
            Tag Purple
          </Tag>
          <Tag disabled={args.disabled} variant="gray">
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
          <Tag disabled={args.disabled}>
            <i className="glyphicon glyphicon-bell" />
            Tag default
          </Tag>
          <Tag disabled={args.disabled} variant="success">
            <i className="glyphicon glyphicon-bell" />
            Tag Success
          </Tag>
          <Tag disabled={args.disabled} variant="warning">
            <i className="glyphicon glyphicon-bell" />
            Tag Warning
          </Tag>
          <Tag disabled={args.disabled} variant="information">
            <i className="glyphicon glyphicon-bell" />
            Tag Information
          </Tag>
          <Tag disabled={args.disabled} variant="error">
            <i className="glyphicon glyphicon-bell" />
            Tag Error
          </Tag>
          <Tag disabled={args.disabled} variant="dark">
            <i className="glyphicon glyphicon-bell" />
            Tag Dark
          </Tag>
          <Tag disabled={args.disabled} variant="purple">
            <i className="glyphicon glyphicon-bell" />
            Tag Purple
          </Tag>
          <Tag disabled={args.disabled} variant="gray">
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
