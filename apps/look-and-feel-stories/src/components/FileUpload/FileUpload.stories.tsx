import { FileUpload, ItemFile } from "@axa-fr/design-system-apollo-react/lf";
import { Meta, StoryObj } from "@storybook/react";
import type { ReactNode } from "react";

const meta: Meta<typeof FileUpload> = {
  title: "Components/Form/FileUpload/FileUpload",
  component: FileUpload,
  argTypes: {
    label: { control: "text" },
    description: { control: "text" },
    required: { control: "boolean" },
    helper: { control: "text" },
    message: { control: "text" },
    dropzoneLabels: { control: "object" },
    messageType: {
      control: "select",
      options: ["error", "success", "warning"],
    },
    moreButtonLabel: { table: { disable: true } },
    sideButtonLabel: { table: { disable: true } },
    onSideButtonClick: { table: { disable: true } },
    onMoreButtonClick: { table: { disable: true } },
    labelProps: { table: { disable: true } },
    children: { table: { disable: true } },
    fileListLabel: { control: "text" },
  },
  args: {
    label: "Joindre un justificatif de domicile",
    description: "Description",
    required: false,
    helper: "2 fichiers max. / pdf, png, jpg, jpeg, gif / 5 Mo par fichier",
    message: "",
    dropzoneLabels: { dropzone: "", or: "", button: "" },
    fileListLabel: "",
  },
};

export default meta;

export const Playground: StoryObj<typeof FileUpload> = {
  render: ({
    fileListLabel,
    description,
    helper,
    label,
    message,
    dropzoneLabels,
    ...arg
  }) => {
    const innerDropzoneLabels = {} as Record<
      "dropzone" | "or" | "button",
      ReactNode
    >;
    if (dropzoneLabels?.dropzone) {
      innerDropzoneLabels.dropzone = dropzoneLabels.dropzone;
    }
    if (dropzoneLabels?.or) {
      innerDropzoneLabels.or = dropzoneLabels.or;
    }
    if (dropzoneLabels?.button) {
      innerDropzoneLabels.button = dropzoneLabels.button;
    }

    return (
      <FileUpload
        {...arg}
        dropzoneLabels={
          Object.keys(innerDropzoneLabels).length > 0
            ? innerDropzoneLabels
            : undefined
        }
        fileListLabel={fileListLabel || undefined}
        description={description || undefined}
        helper={helper || undefined}
        label={label || undefined}
        message={message || undefined}
      >
        <ItemFile
          file={
            new File([new Uint8Array(1_496)], "Wallpaper.jpg", {
              type: "image/jpg",
            })
          }
        />
        <ItemFile
          file={
            new File([new Uint8Array(5_159_852)], "Document.pdf", {
              type: "application/pdf",
            })
          }
          errorMessage="Le fichier que vous souhaitez importer est supérieur à 5 Mo."
        />
      </FileUpload>
    );
  },
};
