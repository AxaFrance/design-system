import { ItemFile } from "@axa-fr/canopee-react/client";
import { fn } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<Omit<typeof ItemFile, "file"> & { file: string }>;

const fileLists = [
  new File([new Uint8Array(1_496)], "Wallpaper.jpg", { type: "image/jpg" }),
  new File([new Uint8Array(15_4896_756)], "Document.pdf", {
    type: "application/pdf",
  }),
  new File([new Uint8Array(5_741_256)], "Presentation.pptx", {
    type: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  }),
];

const meta: Meta<typeof ItemFile> = {
  title: "Components/Form/FileUpload/ItemFile",
  component: ItemFile,
  argTypes: {
    file: {
      control: { type: "select" },
      options: fileLists.map(({ name }) => name),
    },
    isLoading: { control: { type: "boolean" } },
    errorMessage: { control: { type: "text" } },
    onRemove: { table: { disable: true } },
    onPreview: { table: { disable: true } },
    previewProps: { control: { type: "object" } },
    removeProps: { control: { type: "object" } },
  },
};
export default meta;

export const Playground: Story = {
  args: {
    file: fileLists[0].name,
    isLoading: false,
    errorMessage: "",
    previewProps: { "aria-label": "Preview file" },
    removeProps: { "aria-label": "Remove file" },
    onRemove: fn(),
    onPreview: fn(),
  },
  render: ({ file, ...args }) => (
    <ItemFile
      {...args}
      file={fileLists.find(({ name }) => name === file) as File}
    />
  ),
};
