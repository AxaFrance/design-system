import type { Meta, StoryObj } from "@storybook/html";
import "./Radio.scss";

const meta: Meta = {
  title: "Client/Components/Form/Input/Radio",
};

export default meta;

export const Default: StoryObj = {
  render: (args) => {
    const container = document.createElement("div");
    container.innerHTML = `<div class="col-md-2">
      <label class="af-form__group-label">${args.label}</label>
    </div>
    <div class="col-md-10">
  <div class="af-form-client__radio-container-inline">
    <label class="af-form-client__radio-inline" for="paris-input">
      <input
        name="placeName"
        class="af-form-client__input-radio"
        id="paris-input"
        type="radio"
        value="paris"
      />
      <div class="af-form-client__content">
        <div class="af-form-client__label">
          <div class="af-form-client__choice">Paris</div>
          <div class="af-form-client__description">Capitale de la France</div>
        </div>
      </div>
    </label>
    <label class="af-form-client__radio-inline" for="lille-input">
      <input
        name="placeName"
        class="af-form-client__input-radio"
        id="lille-input"
        type="radio"
        value="lille"
      />
      <div class="af-form-client__content">
        <div class="af-form-client__label">
          <div class="af-form-client__choice">Lille</div>
          <div class="af-form-client__description"></div>
        </div>
      </div>
    </label>
    <label class="af-form-client__radio-inline" for="madrid-input">
      <input
        name="placeName"
        class="af-form-client__input-radio"
        id="madrid-input"
        type="radio"
        value="madrid"
      />
      <div class="af-form-client__content">
        <div class="af-form-client__label">
          <div class="af-form-client__choice">Madrid</div>
          <div class="af-form-client__description">Capitale de l'Espagne</div>
        </div>
        </div>
    </label>
  </div>
</div>`;

    container.className = "af-form__group row af-form__group--label-top";

    return container;
  },
  args: {
    label: "Where are you ?",
  },
  argTypes: {},
};
