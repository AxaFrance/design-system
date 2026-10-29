import {
  DateInput,
  SingleLineLabelPosition,
} from "@axa-fr/canopee-react/distributeur/experimental";
import { fn } from "storybook/test";
import preview from "../../../.storybook/preview";

const meta = preview.meta({
  component: DateInput,
  title: "Experimental/Form/DateInput",
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
    },
    labelPosition: {
      table: {
        category: "Visual Content",
      },
      control: {
        type: "select",
        options: ["centerLeft", "above", undefined] satisfies (
          | SingleLineLabelPosition
          | undefined
        )[],
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
    value: {
      table: {
        category: "Field state",
      },
      control: {
        type: "text",
      },
    },
    min: {
      table: {
        category: "Field state",
      },
      control: {
        type: "text",
      },
    },
    max: {
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
    containerClassName: {
      table: {
        category: "Technical Details",
      },
      control: {
        type: "text",
      },
    },
  },
  args: {
    label: "What is your birth date?",
    helpMessage: "The date written on your ID card",
    labelPosition: "centerLeft",
    errorMessage: "",
    required: true,
    disabled: false,
    value: "1990-03-28",
    id: "birthdateid",
    name: "myDateInput",
    onChange: fn(),
  },
});

export default meta;

export const Default = meta.story({
  args: {
    label: "What is your birth date?",
  },
});

export const Vertical = meta.story({
  args: {
    labelPosition: "above",
    label: "What is your birth date?",
  },
});

export const ErrorStory = meta.story({
  args: {
    required: true,
    errorMessage: "This field is required",
    helpMessage: "",
    value: "",
    name: "errorInput",
    label: "What is your birth date?",
  },
});

export const Disabled = meta.story({
  args: {
    disabled: true,
    name: "disabledInput",
    label: "What is your birth date?",
  },
});

export const WithBoundaries = meta.story({
  args: {
    label: "Pick a date in 2025",
    helpMessage: "Only dates in 2025 can be selected",
    value: "2025-03-28",
    min: "2025-01-01",
    max: "2025-12-31",
    name: "boundedInput",
  },
});

export const WithUnit = meta.story({
  args: {
    label: "Effective date",
    helpMessage: "",
    contentRight: "UTC",
    name: "unitInput",
  },
});

export const RichLabel = meta.story({
  args: {
    label: (
      <span>
        Birth date <em>optional</em>
      </span>
    ),
    name: "richLabelInput",
  },
});
