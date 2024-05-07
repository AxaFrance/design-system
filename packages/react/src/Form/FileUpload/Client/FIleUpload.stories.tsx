import type { Meta, StoryObj } from "@storybook/react";
import { FileUpload } from "./FileUpload";

const meta: Meta<typeof Text> = {
  title: "Client/Components/Form/Input/FileUpload",
};

export default meta;

type Story = StoryObj<typeof FileUpload>;

export const FileUploadStory: Story = {
  name: "FileUpload",
  render: ({ onChange, onView, onDelete, ...args }) => (
    <FileUpload
      onChange={onChange}
      onView={onView}
      onDelete={onDelete}
      {...args}
    />
  ),
  args: {
    id: "file-input",
    className: "",
    label: "Label",
    files: [
      {
        id: "1",
        name: " IMG_8904587880.jpg",
        size: 1024,
        isLoading: false,
      },
      {
        id: "2",
        name: " IMG_465510680.jpg",
        size: 10254,
        isLoading: true,
      },
      {
        id: "3",
        name: " IMG_8904587880.jpg",
        size: 85023,
        isLoading: true,
      },
    ],
    errors: [
      {
        id: "3",
        message: "Votre fichier fait plus de 19 Mo.",
      },
    ],
    accept: "image/jpeg, image/png, application/*",
    buttonLabel: "Importer fichier",
    instructions:
      "2 fichiers max. / pdf, png, jpg, jpeg, gif / 19 Mo par fichier",
    dropzoneDescription: "Glissez/déposez vos fichiers",
    required: false,
    isMobile: false,
  },
  argTypes: {
    onChange: { action: "onChange" },
    onView: { action: "onView" },
    onDelete: { action: "onDelete" },
  },
};
