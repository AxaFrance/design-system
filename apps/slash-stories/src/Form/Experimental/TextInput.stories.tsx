import {
  SingleLineLabelPosition,
  TextInput,
} from "@axa-fr/canopee-react/distributeur/experimental";
import { fn } from "storybook/test";
import preview from "../../../.storybook/preview";

const meta = preview.meta({
  component: TextInput,
  title: "Experimental/Form/TextInput",
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
    placeholder: {
      table: {
        category: "Visual Content",
      },
    },
    labelPosition: {
      table: {
        category: "Visual Content",
        // type: {
        //   summary: '"centerLeft" | "above"',
        // },
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
    label: "What is your name?",
    helpMessage: "This is your government name",
    labelPosition: "centerLeft",
    errorMessage: "",
    placeholder: "Your name",
    required: true,
    disabled: false,
    value: "John Doe",
    id: "nameid",
    name: "myTextInput",
    onChange: fn(),
  },
});

export default meta;

export const Default = meta.story({
  args: {},
});

export const Vertical = meta.story({
  args: {
    disabled: true,
    labelPosition: "above",
  },
});

export const ErrorStory = meta.story({
  args: {
    required: true,
    errorMessage: "This field is required",
    helpMessage: "",
    value: "",
    name: "errorInput",
  },
});

export const Disabled = meta.story({
  args: {
    disabled: true,
    value: "Disabled input",
    name: "disabledInput",
  },
});

export const WithUnit = meta.story({
  args: {
    label: "Price",
    placeholder: "Enter amount",
    contentRight: "€",
    name: "unitInput",
  },
});

export const RichLabel = meta.story({
  args: {
    label: (
      <span>
        Place name <em>optional</em>
      </span>
    ),
    name: "richLabelInput",
  },
});
