import {
  File,
  FileInput,
  type FilePreview,
  FileTable,
  HelpMessage,
  MessageTypes,
} from "@axa-fr/canopee-react/distributeur";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FileRejection } from "react-dropzone";

const values = [
  {
    id: "000003",
    file: {
      name: "error-file.jpg",
      size: 100,
      preview: "https://via.placeholder.com/150Cx50",
      type: "image",
    } as FilePreview,
  },
  {
    id: "000004",
    file: {
      name: "fichier.png",
      size: 100,
      preview: "https://via.placeholder.com/150Cx50",
      type: "image",
    } as FilePreview,
  },
  {
    id: "000005",
    file: {
      name: "fichier.csv",
      preview: "https://via.placeholder.com/150Cx50",
      size: 100,
    } as FilePreview,
  },
];

const meta: Meta<typeof FileInput> = {
  component: FileInput,
  title: "Components/Form/Input/File",
  argTypes: {
    onChange: { action: "onChange" },
  },
  args: { onChange: fn() },
};

export default meta;

type Story = StoryObj<typeof FileInput>;

export const FileInputStory: Story = {
  name: "FileInput",
  render: ({ onChange, ...args }) => (
    <FileInput onChange={onChange} {...args} />
  ),
  args: {
    required: true,
    label: "Image",
    fileLabel: "Browse",
    name: "placeImage",
    id: "inputuniqueid",
    accept: "image/jpeg, image/png, application/*",
    helpMessage: "Take a photo af a place",
    messageType: MessageTypes.error,
    multiple: true,
    isVisible: true,
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10",
    values,
  },
};

export const FileStory: Story = {
  name: "File",
  render: ({ onChange, ...args }) => <File onChange={onChange} {...args} />,
  args: {
    label: "Image",
    name: "placeImage",
    id: "inputuniqueid",
    accept: "image/jpeg, image/png, application/*",
    multiple: true,
    isVisible: true,
    icon: "open",
  },
};

const errors = [
  {
    file: {
      name: "refused-extension-file.svg",
      preview: "",
      size: 100,
    },
  },
  {
    file: {
      name: "too-big-file.jpg",
      size: 100,
    },
    errors: {},
  },
  {
    file: {
      name: "error-file.jpg",
      preview: "",
      size: 100,
    },
  },
] as FileRejection[];

export const FileWithValuesStory: Story = {
  name: "File with values",
  render: ({ onChange, ...args }) => (
    <>
      <File onChange={onChange} {...args} />
      <HelpMessage message="Enter the place name, ex : Webcenter" />
      <FileTable
        errors={[]}
        values={values}
        onClick={() => {}}
        classModifier=""
      />
    </>
  ),
};

export const FileWithErrorsStory: Story = {
  name: "File with errors",
  render: ({ onChange, ...args }) => (
    <>
      <File onChange={onChange} {...args} />
      <HelpMessage message="Enter the place name, ex : Webcenter" />
      <FileTable
        errors={errors}
        values={values}
        onClick={() => {}}
        classModifier=""
      />
    </>
  ),
};
