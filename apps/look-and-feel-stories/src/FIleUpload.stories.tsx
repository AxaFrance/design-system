import { FileUpload } from "@axa-fr/design-system-look-and-feel-react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Text> = {
  title: "Components/Form/Input/FileUpload",
};

export default meta;

type Story = StoryObj<typeof FileUpload>;

const render = ({ ...args }: React.ComponentProps<typeof FileUpload>) => (
  <FileUpload {...args} />
);

export const FileUploadStory: Story = {
  name: "FileUpload",
  render,
  args: {
    id: "file-input",
    className: "",
    label: "Label",
    files: [
      {
        id: "1",
        name: " IMG_8904587880.jpg",
        size: 109936,
        isLoading: false,
      },
      {
        id: "2",
        name: " IMG_465510680.jpg",
        size: 5010,
        isLoading: true,
      },
      {
        id: "3",
        name: " IMG_8904587880.jpg",
        size: 23000000,
        isLoading: true,
      },
    ],
    globalError: "Erreur",
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
    multiple: false,
  },
  argTypes: {
    onChange: { action: "onChange" },
    onView: { action: "onView" },
    onDelete: { action: "onDelete" },
  },
};

export const FileUploadWithPaddingAndWithoutDescription: Story = {
  name: "FileUpload without drag&drop description and with padding",
  render,
  args: { buttonLabel: "Importer fichier", withPadding: true, files: [] },
};
