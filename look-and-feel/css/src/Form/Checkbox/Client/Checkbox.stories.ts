import type { Meta, StoryObj } from "@storybook/html";
import "./Checkbox.scss";

const meta: Meta = {
  title: "Look-and-feel/Components/Form/Input/Checkbox",
};

export default meta;

export const Basic: StoryObj = {
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = `<div class="af-checkbox">
        <label>
          <input type="checkbox" name="lorem" value="lorem" />        
          <div class="af-checkbox__icons">
            <svg class="af-checkbox__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankOutlinedIcon">
              <path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></path>
            </svg>
            <svg class="af-checkbox__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxIcon">
              <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
            </svg>
          </div>
          J'accepte la convention de preuve relative à ma demande de versement complémentaire sur internet et déclare en accepter expressément les conditions. Je déclare être pleinement informé(e) qu'AXA, en sa qualité d'organisme financier, est soumise aux obligations légales issues principalement du code monétaire et financier en matière de lutte contre le blanchiment des capitaux et le financement du terrorisme.
        </label>
      </div>
      <div class="af-checkbox">
        <label>
          <input type="checkbox" name="lorem" value="lorem" checked />        
          <div class="af-checkbox__icons">
            <svg class="af-checkbox__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankOutlinedIcon">
              <path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></path>
            </svg>
            <svg class="af-checkbox__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxIcon">
              <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
            </svg>
          </div>
          J'accepte la convention de preuve relative à ma demande de versement complémentaire sur internet et déclare en accepter expressément les conditions. Je déclare être pleinement informé(e) qu'AXA, en sa qualité d'organisme financier, est soumise aux obligations légales issues principalement du code monétaire et financier en matière de lutte contre le blanchiment des capitaux et le financement du terrorisme.
        </label>
      </div>
      <div class="af-checkbox">
        <label>
          <input type="checkbox" name="lorem" value="lorem" disabled />        
          <div class="af-checkbox__icons">
            <svg class="af-checkbox__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankOutlinedIcon">
              <path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></path>
            </svg>
            <svg class="af-checkbox__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxIcon">
              <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
            </svg>
          </div>
          J'accepte la convention de preuve relative à ma demande de versement complémentaire sur internet et déclare en accepter expressément les conditions. Je déclare être pleinement informé(e) qu'AXA, en sa qualité d'organisme financier, est soumise aux obligations légales issues principalement du code monétaire et financier en matière de lutte contre le blanchiment des capitaux et le financement du terrorisme.
        </label>
      </div>
      <div class="af-checkbox">
        <label>
          <input type="checkbox" name="lorem" value="lorem" disabled checked />        
          <div class="af-checkbox__icons">
            <svg class="af-checkbox__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankOutlinedIcon">
              <path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></path>
            </svg>
            <svg class="af-checkbox__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxIcon">
              <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
            </svg>
          </div>
          J'accepte la convention de preuve relative à ma demande de versement complémentaire sur internet et déclare en accepter expressément les conditions. Je déclare être pleinement informé(e) qu'AXA, en sa qualité d'organisme financier, est soumise aux obligations légales issues principalement du code monétaire et financier en matière de lutte contre le blanchiment des capitaux et le financement du terrorisme.
        </label>
    </div>`;

    return container;
  },
  args: {},
  argTypes: {},
};

export const BasicWithError: StoryObj = {
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = `<div class="af-checkbox">
      <label>
        <input type="checkbox" name="lorem" value="lorem" aria-invalid="true" />        
        <div class="af-checkbox__icons">
          <svg class="af-checkbox__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankOutlinedIcon">
            <path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></path>
          </svg>
          <svg class="af-checkbox__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxIcon">
            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
          </svg>
        </div>
        J'accepte la convention de preuve relative à ma demande de versement complémentaire sur internet et déclare en accepter expressément les conditions. Je déclare être pleinement informé(e) qu'AXA, en sa qualité d'organisme financier, est soumise aux obligations légales issues principalement du code monétaire et financier en matière de lutte contre le blanchiment des capitaux et le financement du terrorisme.
      </label>
    </div>
    <div class="af-checkbox__error" aria-live="assertive">
      <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ErrorOutlineIcon">
        <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path>
      </svg>
      Veuillez cocher une case
    </div>`;

    return container;
  },
  args: {},
  argTypes: {},
};

export const Vertical: StoryObj = {
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = `<div role="group" class="af-checkbox af-checkbox-select">
      <label>
        <input type="checkbox" name="paris" value="paris" />
        <div class="af-checkbox__icons">
          <svg class="af-checkbox__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankOutlinedIcon">
            <path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></path>
          </svg>
          <svg class="af-checkbox__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxIcon">
            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
          </svg>
        </div>
        <div class="af-checkbox__content">
          <svg class="af-checkbox__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HomeIcon">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
          </svg>
          <div class="af-checkbox__content-description">
            <span>Paris</span>
            <span>Capitale de la France</span>
            <span>Nord</span>
          </div>
        </div>
      </label>
      <label>
        <input type="checkbox" name="bruxelles" value="bruxelles" checked />
        <div class="af-checkbox__icons">
          <svg class="af-checkbox__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankOutlinedIcon">
            <path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></path>
          </svg>
          <svg class="af-checkbox__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxIcon">
            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
          </svg>
        </div>
        <div class="af-checkbox__content">
          <svg class="af-checkbox__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HomeIcon">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
          </svg>
          <div class="af-checkbox__content-description">
            <span>Bruxelles</span>
            <span>Capitale de la Belgique</span>
          </div>
        </div>
      </label>
      <label>
        <input type="checkbox" name="lille" value="lille" disabled checked />
        <div class="af-checkbox__icons">
          <svg class="af-checkbox__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
            <path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></path>
          </svg>
          <svg class="af-checkbox__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxIcon">
            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
          </svg>
        </div>
        <div class="af-checkbox__content">
          <svg class="af-checkbox__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HomeIcon">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
          </svg>
          <div class="af-checkbox__content-description">
            <span>Lille</span>
          </div>
        </div>
      </label>
    </div>`;

    return container;
  },
  args: {},
  argTypes: {},
};

export const VerticalWithError: StoryObj = {
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = `<div role="group" class="af-checkbox af-checkbox-select">
      <label>
        <input type="checkbox" name="paris" value="paris" aria-invalid="true" />
        <div class="af-checkbox__icons">
          <svg class="af-checkbox__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankOutlinedIcon">
            <path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></path>
          </svg>
          <svg class="af-checkbox__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxIcon">
            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
          </svg>
        </div>
        <div class="af-checkbox__content">
          <svg class="af-checkbox__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HomeIcon">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
          </svg>
          <div class="af-checkbox__content-description">
            <span>Paris</span>
            <span>Capitale de la France</span>
            <span>Nord</span>
          </div>
        </div>
      </label>
      <label>
        <input type="checkbox" name="bruxelles" value="bruxelles" aria-invalid="true" />
        <div class="af-checkbox__icons">
          <svg class="af-checkbox__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankOutlinedIcon">
            <path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></path>
          </svg>
          <svg class="af-checkbox__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxIcon">
            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
          </svg>
        </div>
        <div class="af-checkbox__content">
          <svg class="af-checkbox__icon"focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HomeIcon">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
          </svg>
          <div class="af-checkbox__content-description">
            <span>Bruxelles</span>
            <span>Capitale de la Belgique</span>
          </div>
        </div>
      </label>
    </div>
    <div class="af-checkbox__error" aria-live="assertive">
      <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ErrorOutlineIcon">
        <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path>
      </svg>
      Veuillez sélectionner au moins une ville
    </div>`;

    return container;
  },
  args: {},
  argTypes: {},
};

export const Horizontal: StoryObj = {
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = `<div role="group" class="af-checkbox af-checkbox-select af-checkbox-select--horizontal">
      <label>
        <input type="checkbox" name="paris" value="paris" />
        <div class="af-checkbox__icons">
          <svg class="af-checkbox__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankOutlinedIcon">
            <path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></path>
          </svg>
          <svg class="af-checkbox__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxIcon">
            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
          </svg>
        </div>
        <div class="af-checkbox__content">
          <svg class="af-checkbox__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HomeIcon">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
          </svg>
          <div class="af-checkbox__content-description">
            <span>Paris</span>
            <span>Capitale de la France</span>
            <span>Nord</span>
          </div>
        </div>
      </label>
      <label>
        <input type="checkbox" name="bruxelles" value="bruxelles" checked />
        <div class="af-checkbox__icons">
          <svg class="af-checkbox__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankOutlinedIcon">
            <path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></path>
          </svg>
          <svg class="af-checkbox__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxIcon">
            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
          </svg>
        </div>
        <div class="af-checkbox__content">
          <svg class="af-checkbox__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HomeIcon">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
          </svg>
          <div class="af-checkbox__content-description">
            <span>Bruxelles</span>
            <span>Capitale de la Belgique</span>
          </div>
        </div>
      </label>
      <label>
        <input type="checkbox" name="lille" value="lille" disabled checked />
        <div class="af-checkbox__icons">
          <svg class="af-checkbox__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
            <path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></path>
          </svg>
          <svg class="af-checkbox__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxIcon">
            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
          </svg>
        </div>
        <div class="af-checkbox__content">
          <svg class="af-checkbox__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HomeIcon">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
          </svg>
          <div class="af-checkbox__content-description">
            <span>Lille</span>
          </div>
        </div>
      </label>
    </div>`;

    return container;
  },
  args: {},
  argTypes: {},
};

export const HorizontalWithError: StoryObj = {
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = `<div role="group" class="af-checkbox af-checkbox-select af-checkbox-select--horizontal">
      <label>
        <input type="checkbox" name="paris" value="paris" aria-invalid="true" />
        <div class="af-checkbox__icons">
          <svg class="af-checkbox__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankOutlinedIcon">
            <path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></path>
          </svg>
          <svg class="af-checkbox__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxIcon">
            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
          </svg>
        </div>
        <div class="af-checkbox__content">
          <svg class="af-checkbox__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HomeIcon">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
          </svg>
          <div class="af-checkbox__content-description">
            <span>Paris</span>
            <span>Capitale de la France</span>
            <span>Nord</span>
          </div>
        </div>
      </label>
      <label>
        <input type="checkbox" name="bruxelles" value="bruxelles" aria-invalid="true" />
        <div class="af-checkbox__icons">
          <svg class="af-checkbox__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankOutlinedIcon">
            <path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></path>
          </svg>
          <svg class="af-checkbox__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxIcon">
            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
          </svg>
        </div>
        <div class="af-checkbox__content">
          <svg class="af-checkbox__icon"focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HomeIcon">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
          </svg>
          <div class="af-checkbox__content-description">
            <span>Bruxelles</span>
            <span>Capitale de la Belgique</span>
          </div>
        </div>
      </label>
    </div>
    <div class="af-checkbox__error" aria-live="assertive">
      <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ErrorOutlineIcon">
        <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path>
      </svg>
      Veuillez sélectionner au moins une ville
    </div>`;

    return container;
  },
  args: {},
  argTypes: {},
};
