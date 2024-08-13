import type { Meta, StoryObj } from "@storybook/html";
import "../../../common/icons.scss";
import "./Select.client.scss";

const meta: Meta = {
  title: "Look-and-feel/Components/Form/Input/Select",
};

export default meta;

export const Default: StoryObj = {
  render: (args) => {
    const label = document.createElement("label");
    label.htmlFor = "nameid";
    label.className = "af-form__select-label";
    label.textContent = args.label;

    if (args.required) {
      const required = document.createElement("span");
      required.textContent = " *";
      label.appendChild(required);
    }

    const select = document.createElement("div");
    select.innerHTML = `
     <div style="width: 300px">
            <select class="af-form__input-select-container" id="select-story" name="select-story" type="text">
                <option class="af-form__input-select-option" value="" disabled selected>Sélectionner</option>
                <option class="af-form__input-select-option" value="1">Option 1</option>
                <option class="af-form__input-select-option" value="2">Option 2</option>
                <option class="af-form__input-select-option" value="3">Option 3</option>
                <option class="af-form__input-select-option" value="4">Option 4</option>
            </select>
        </div>
        `;

    if (args.disabled) {
      select
        .querySelector("div")
        ?.classList.add("af-form__input-select-container--disabled");
      select.querySelector("select")?.setAttribute("disabled", "");
    }

    const container = document.createElement("div");
    container.className = "af-form__select";

    container.appendChild(label);
    container.appendChild(select);

    return container;
  },
  args: {
    label: "Select",
    disabled: false,
    required: false,
  },
  argTypes: {},
};
