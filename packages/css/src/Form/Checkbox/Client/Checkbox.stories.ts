import type { Meta, StoryObj } from "@storybook/html";
import "./Checkbox.scss";

const meta: Meta = {
  title: "Client/Components/Form/Input/Checkbox/old",
};

export default meta;

export const Default: StoryObj = {
  render: (args) => {
    const container = document.createElement("div");
    container.innerHTML = `<div class="col-md-2">
    <label class="af-form-client__checkbox-input-label" for=":r2:">${args.label}</label>
    <div class="af-form-client__checkbox-input-description">${args.description}</div>
 </div>
 <div class="col-md-10">
    <div class="af-form-client__checkbox-container-inline">
      <label class="af-form-client__checkbox-inline" for=":r2:">
        <input label="Paris" name="placeName" class="af-form-client__input-checkbox" id=":r2:" type="checkbox" value="paris" />
        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium af-form-client__checkbox-unchecked-icon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
          <path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></path>
        </svg>
        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium af-form-client__checkbox-checked-icon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxIcon">
          <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
        </svg>
        <div class="af-form-client__checkbox-content">
          <div class="af-form-client__checkbox-label">
            <div class="af-form-client__checkbox-title">Paris</div>
            <div class="af-form-client__checkbox-description">Capitale de la France</div>
          </div>
        </div>
      </label>
      <label class="af-form-client__checkbox-inline" for=":r2:">
        <input label="Lille" name="placeName" class="af-form-client__input-checkbox" id=":r2:" type="checkbox" value="lille" checked="" />
        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium af-form-client__checkbox-unchecked-icon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
          <path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></path>
        </svg>
        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium af-form-client__checkbox-checked-icon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxIcon">
          <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
        </svg>
        <div class="af-form-client__checkbox-content">
          <div class="af-form-client__checkbox-label">
            <div class="af-form-client__checkbox-title">Lille</div>
            <div class="af-form-client__checkbox-description"></div>
          </div>
        </div>
      </label>
      <label class="af-form-client__checkbox-inline" for=":r2:">
        <input label="Madrid" name="placeName" class="af-form-client__input-checkbox" id=":r2:" type="checkbox" value="madrid" checked="" />
        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium af-form-client__checkbox-unchecked-icon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
          <path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></path>
        </svg>
        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium af-form-client__checkbox-checked-icon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxIcon">
          <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
        </svg>
        <div class="af-form-client__checkbox-content">
          <div class="af-form-client__icon"></div>
          <div class="af-form-client__checkbox-label">
            <div class="af-form-client__checkbox-title">Madrid</div>
            <div class="af-form-client__checkbox-description">Capitale de l'Espagne</div>
          </div>
        </div>
      </label>
    </div>
  </div>`;

    container.className = "af-form__group row af-form__group--label-top";

    return container;
  },
  args: {
    label: "What cities have you visited ?",
    description: "In the past 10 years",
  },
  argTypes: {},
};
