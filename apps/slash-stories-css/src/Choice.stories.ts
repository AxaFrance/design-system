import "@axa-fr/design-system-slash-css/dist/common/icons.scss";
import "@axa-fr/design-system-slash-css/dist/Form/Choice/Choice.scss";
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Form/Input/Choice",
};

const defaultOptions = ["Oui", "Non"];

export default meta;

export const Default: StoryObj = {
  render: (args) => {
    const container = document.createElement("div");
    container.innerHTML = `<div class="col-md-2">
        <label class="af-form__group-label">${args.label}</label>
    </div>
    <div class="col-md-10">
      <div class="af-form__radio-custom">
        <input name="placeName" placeholder="Paris" class="af-form__input-radio" id="radioItemTrue" type="radio" value="true" />
        <label class="af-form__label" for="radioItemTrue">
          <span class="af-form__description">${args.options[0] ?? "Oui"}</span>
        </label>
      </div>
      <div class="af-form__radio-custom">
        <input name="placeName" placeholder="Paris" class="af-form__input-radio" id="radioItemFalse" type="radio" value="false" />
        <label class="af-form__label" for="radioItemFalse">
          <span class="af-form__description">${args.options[1] ?? "Non"}</span>
        </label>
      </div>
    </div>`;

    container.className = "af-form__group row";

    return container;
  },
  args: {
    label: "Choice",
    options: defaultOptions,
  },
  argTypes: {},
};
