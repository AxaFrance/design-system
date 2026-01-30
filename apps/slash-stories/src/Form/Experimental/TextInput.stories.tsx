import { TextInput } from "@axa-fr/canopee-react/distributeur/experimental";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta: Meta<typeof TextInput> = {
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
    errorMessage: "",
    placeholder: "Your name",
    required: true,
    disabled: false,
    value: "John Doe",
    id: "nameid",
    name: "myTextInput",
    onChange: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  render: ({ onChange, ...args }) => (
    <TextInput onChange={onChange} {...args} />
  ),
  args: {},
};

export const Vertical: Story = {
  render: ({ onChange, ...args }) => (
    <TextInput onChange={onChange} {...args} />
  ),
  args: {
    disabled: true,
    labelPosition: "above",
  },
};

export const Error: Story = {
  render: ({ onChange, ...args }) => (
    <TextInput
      onChange={onChange}
      {...args}
      errorMessage="This field is required"
    />
  ),
  args: {
    required: true,
    errorMessage: "This field is required",
    helpMessage: "",
    value: "",
    name: "errorInput",
  },
};

export const Disabled: Story = {
  render: ({ onChange, ...args }) => (
    <TextInput onChange={onChange} {...args} />
  ),
  args: {
    disabled: true,
    value: "Disabled input",
    name: "disabledInput",
  },
};

export const WithUnit: Story = {
  render: ({ onChange, ...args }) => (
    <TextInput onChange={onChange} {...args} />
  ),
  args: {
    label: "Price",
    placeholder: "Enter amount",
    contentRight: "€",
    name: "unitInput",
  },
};

export const RichLabel: Story = {
  render: ({ onChange, ...args }) => (
    <TextInput onChange={onChange} {...args} />
  ),
  args: {
    label: (
      <span>
        Place name <em>optional</em>
      </span>
    ),
    name: "richLabelInput",
  },
};
