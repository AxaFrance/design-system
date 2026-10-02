import {
  SelectInput,
  SingleLineLabelPosition,
} from "@axa-fr/canopee-react/distributeur/experimental";
import { fn } from "storybook/test";
import preview from "../../../.storybook/preview";

const countries = (
  <>
    <option value="fr">France</option>
    <option value="be">Belgique</option>
    <option value="es">Espagne</option>
    <option value="it" disabled>
      Italie
    </option>
  </>
);

const groupedCountries = (
  <>
    <optgroup label="Europe">
      <option value="fr">France</option>
      <option value="be">Belgique</option>
      <option value="es">Espagne</option>
    </optgroup>
    <optgroup label="Amérique">
      <option value="us">États-Unis</option>
      <option value="ca">Canada</option>
    </optgroup>
  </>
);

const meta = preview.meta({
  component: SelectInput,
  title: "Experimental/Form/SelectInput",
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
    options: {
      table: {
        category: "Visual Content",
      },
      control: false,
    },
    placeholder: {
      table: {
        category: "Visual Content",
      },
      control: {
        type: "text",
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
    label: "In which country do you live?",
    helpMessage: "The country of your main residence",
    options: countries,
    labelPosition: "centerLeft",
    errorMessage: "",
    required: true,
    disabled: false,
    value: "fr",
    id: "countryid",
    name: "mySelectInput",
    onChange: fn(),
  },
});

export default meta;

export const Default = meta.story({
  args: {
    label: "In which country do you live?",
    options: countries,
  },
});

export const Vertical = meta.story({
  args: {
    labelPosition: "above",
    label: "In which country do you live?",
    options: countries,
  },
});

export const ErrorStory = meta.story({
  args: {
    required: true,
    errorMessage: "This field is required",
    helpMessage: "",
    value: "",
    name: "errorInput",
    label: "In which country do you live?",
    options: countries,
  },
});

export const Disabled = meta.story({
  args: {
    disabled: true,
    name: "disabledInput",
    label: "In which country do you live?",
    options: countries,
  },
});

export const Grouped = meta.story({
  args: {
    label: "In which country do you live?",
    helpMessage: "Options can be grouped with <optgroup>",
    options: groupedCountries,
    name: "groupedInput",
  },
});

export const WithoutPlaceholder = meta.story({
  args: {
    label: "In which country do you live?",
    options: countries,
    helpMessage: "No empty option is rendered",
    placeholder: null,
    name: "noPlaceholderInput",
  },
});

export const WithUnit = meta.story({
  args: {
    label: "In which country do you live?",
    options: countries,
    helpMessage: "",
    contentRight: "UE",
    name: "unitInput",
  },
});

export const RichLabel = meta.story({
  args: {
    label: (
      <span>
        Country <em>optional</em>
      </span>
    ),
    options: countries,
    name: "richLabelInput",
  },
});
