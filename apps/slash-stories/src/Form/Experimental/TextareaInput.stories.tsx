import { HelpButton } from "@axa-fr/canopee-react/distributeur";
import { TextareaInput } from "@axa-fr/canopee-react/distributeur/experimental";
import { fn } from "storybook/test";
import preview from "../../../.storybook/preview";

const feedbackLabel = "Share your feedback";

const meta = preview.meta({
  component: TextareaInput,
  title: "Experimental/Form/TextareaInput",
  argTypes: {
    onChange: {
      action: "onChange",
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        category: "Visual Content",
      },
    },
    labelPosition: {
      table: {
        category: "Visual Content",
      },
      control: {
        type: "select",
        options: ["centerLeft", "topLeft", "above"],
      },
    },
    helpMessage: {
      table: {
        category: "Visual Content",
      },
      control: {
        type: "text",
      },
    },
    errorMessage: {
      table: {
        category: "Visual Content",
      },
      control: {
        type: "text",
      },
    },
    contentRight: {
      table: {
        category: "Visual Content",
      },
      control: {
        type: "text",
      },
    },
    required: {
      table: {
        category: "Field state",
      },
    },
    disabled: {
      table: {
        category: "Field state",
      },
    },
    readOnly: {
      table: {
        category: "Field state",
      },
    },
    rows: {
      table: {
        category: "Field state",
      },
      control: {
        type: "number",
      },
    },
    cols: {
      table: {
        category: "Field state",
      },
      control: {
        type: "number",
      },
    },
    maxLength: {
      table: {
        category: "Field state",
      },
      control: {
        type: "number",
      },
    },
    defaultValue: {
      table: {
        category: "Field state",
      },
      control: {
        type: "text",
      },
    },
    value: {
      table: {
        category: "Field state",
      },
      control: {
        type: "text",
      },
    },
    id: {
      table: {
        category: "Technical Details",
      },
    },
    name: {
      table: {
        category: "Technical Details",
      },
    },
    containerClassName: {
      table: {
        category: "Technical Details",
      },
      control: {
        type: "text",
      },
    },
    inputClassName: {
      table: {
        category: "Technical Details",
      },
      control: {
        type: "text",
      },
    },
    labelClassName: {
      table: {
        category: "Technical Details",
      },
      control: {
        type: "text",
      },
    },
  },
  args: {
    label: feedbackLabel,
    labelPosition: "topLeft",
    helpMessage: "Tell us what worked well and what could be improved.",
    errorMessage: "",
    required: false,
    disabled: false,
    readOnly: false,
    rows: 4,
    defaultValue:
      "The updated workflow is clear and easy to follow.\nI especially liked the improved navigation.",
    name: "feedback",
    onChange: fn(),
  },
});

export default meta;

export const Default = meta.story({
  args: {
    label: feedbackLabel,
  },
});

export const AboveLabel = meta.story({
  args: {
    label: feedbackLabel,
    labelPosition: "above",
  },
});

export const WithHelpButton = meta.story({
  args: {
    label: feedbackLabel,
    contentRight: (
      <HelpButton mode="click">
        Describe your experience without including personal information.
      </HelpButton>
    ),
  },
});

export const ErrorState = meta.story({
  args: {
    label: feedbackLabel,
    required: true,
    errorMessage: "Please add a little more detail.",
    helpMessage: "Your feedback helps us improve the experience.",
  },
});

export const Disabled = meta.story({
  args: {
    label: feedbackLabel,
    disabled: true,
    defaultValue: "This feedback field is disabled.",
  },
});

export const ReadOnly = meta.story({
  args: {
    label: feedbackLabel,
    readOnly: true,
    defaultValue: "This text can be selected and copied, but not edited.",
  },
});

export const CharacterLimit = meta.story({
  args: {
    label: "Short comment",
    helpMessage: "Keep your comment to 160 characters.",
    maxLength: 160,
    rows: 3,
    defaultValue: "A concise comment with a native character limit.",
  },
});
