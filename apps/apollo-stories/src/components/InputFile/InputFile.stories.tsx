import { InputFile } from "@axa-fr/design-system-apollo-react";
import { Meta, StoryObj } from "@storybook/react";
import type { ReactNode } from "react";

const meta: Meta<typeof InputFile> = {
  title: "Components/Form/FileUpload/InputFile",
  component: InputFile,
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
  },
  args: {
    label: "Joindre un justificatif de domicile",
    description: "Description",
    required: false,
    helper: "2 fichiers max. / pdf, png, jpg, jpeg, gif / 19 Mo par fichier",
    message: "",
    dropzoneLabels: { dropzone: "", or: "", button: "" },
  },
};
export default meta;

export const Playground: StoryObj<typeof InputFile> = {
  render: ({ description, helper, label, message, dropzoneLabels, ...arg }) => {
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
      <InputFile
        {...arg}
        dropzoneLabels={
          Object.keys(innerDropzoneLabels).length > 0
            ? innerDropzoneLabels
            : undefined
        }
        description={description || undefined}
        helper={helper || undefined}
        label={label || undefined}
        message={message || undefined}
      />
    );
  },
};
