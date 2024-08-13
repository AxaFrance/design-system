import type { Meta, StoryObj } from "@storybook/html";
import "./Radio.scss";

const meta: Meta = {
  title: "Look-and-feel/Components/Form/Input/Radio",
};

export default meta;

export const Basic: StoryObj = {
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = `<div class="af-radio">
        <label>
          <input type="radio" name="lorem" value="lorem" />        
          <div class="af-radio__icons">
            <svg class="af-radio__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioOutlineBlankOutlinedIcon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
            </svg>
            <svg class="af-radio__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioIcon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><circle r="5" cy="12" cx="12"></circle></svg>
            </svg>
          </div>
          J'accepte la convention de preuve relative à ma demande de versement complémentaire sur internet et déclare en accepter expressément les conditions. Je déclare être pleinement informé(e) qu'AXA, en sa qualité d'organisme financier, est soumise aux obligations légales issues principalement du code monétaire et financier en matière de lutte contre le blanchiment des capitaux et le financement du terrorisme.
        </label>
      </div>
      <div class="af-radio">
        <label>
          <input type="radio" name="lorem" value="lorem" checked />        
          <div class="af-radio__icons">
            <svg class="af-radio__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioOutlineBlankOutlinedIcon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
            </svg>
            <svg class="af-radio__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioIcon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><circle r="5" cy="12" cx="12"></circle></svg>
            </svg>
          </div>
          J'accepte la convention de preuve relative à ma demande de versement complémentaire sur internet et déclare en accepter expressément les conditions. Je déclare être pleinement informé(e) qu'AXA, en sa qualité d'organisme financier, est soumise aux obligations légales issues principalement du code monétaire et financier en matière de lutte contre le blanchiment des capitaux et le financement du terrorisme.
        </label>
      </div>
      <div class="af-radio">
        <label>
          <input type="radio" name="lorem" value="lorem" disabled />        
          <div class="af-radio__icons">
            <svg class="af-radio__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioOutlineBlankOutlinedIcon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
            </svg>
            <svg class="af-radio__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioIcon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><circle r="5" cy="12" cx="12"></circle></svg>
            </svg>
          </div>
          J'accepte la convention de preuve relative à ma demande de versement complémentaire sur internet et déclare en accepter expressément les conditions. Je déclare être pleinement informé(e) qu'AXA, en sa qualité d'organisme financier, est soumise aux obligations légales issues principalement du code monétaire et financier en matière de lutte contre le blanchiment des capitaux et le financement du terrorisme.
        </label>
      </div>
      <div class="af-radio">
        <label>
          <input type="radio" name="lorem" value="lorem" disabled checked />        
          <div class="af-radio__icons">
            <svg class="af-radio__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioOutlineBlankOutlinedIcon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
            </svg>
            <svg class="af-radio__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioIcon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><circle r="5" cy="12" cx="12"></circle></svg>
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
    container.innerHTML = `<div class="af-radio">
      <label>
        <input type="radio" name="lorem" value="lorem" aria-invalid="true" />        
        <div class="af-radio__icons">
          <svg class="af-radio__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioOutlineBlankOutlinedIcon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
          </svg>
          <svg class="af-radio__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioIcon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><circle r="5" cy="12" cx="12"></circle></svg>
          </svg>
        </div>
        J'accepte la convention de preuve relative à ma demande de versement complémentaire sur internet et déclare en accepter expressément les conditions. Je déclare être pleinement informé(e) qu'AXA, en sa qualité d'organisme financier, est soumise aux obligations légales issues principalement du code monétaire et financier en matière de lutte contre le blanchiment des capitaux et le financement du terrorisme.
      </label>
    </div>
    <div class="af-radio__error" aria-live="assertive">
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
    container.innerHTML = `<div role="group" class="af-radio af-radio-select">
      <label>
        <input type="radio" name="cities" value="paris" />
        <div class="af-radio__icons">
          <svg class="af-radio__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioOutlineBlankOutlinedIcon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
          </svg>
          <svg class="af-radio__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioIcon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><circle r="5" cy="12" cx="12"></circle></svg>
          </svg>
        </div>
        <div class="af-radio__content">
          <svg class="af-radio__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HomeIcon">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
          </svg>
          <div class="af-radio__content-description">
            <span>Paris</span>
            <span>Capitale de la France</span>
            <span>Nord</span>
          </div>
        </div>
      </label>
      <label>
        <input type="radio" name="cities" value="bruxelles" checked />
        <div class="af-radio__icons">
          <svg class="af-radio__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioOutlineBlankOutlinedIcon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
          </svg>
          <svg class="af-radio__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioIcon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><circle r="5" cy="12" cx="12"></circle></svg>
          </svg>
        </div>
        <div class="af-radio__content">
          <svg class="af-radio__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HomeIcon">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
          </svg>
          <div class="af-radio__content-description">
            <span>Bruxelles</span>
            <span>Capitale de la Belgique</span>
          </div>
        </div>
      </label>
      <label>
        <input type="radio" name="cities" value="lille" disabled checked />
        <div class="af-radio__icons">
          <svg class="af-radio__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioOutlineBlankIcon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
          </svg>
          <svg class="af-radio__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioIcon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><circle r="5" cy="12" cx="12"></circle></svg>
          </svg>
        </div>
        <div class="af-radio__content">
          <svg class="af-radio__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HomeIcon">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
          </svg>
          <div class="af-radio__content-description">
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
    container.innerHTML = `<div role="group" class="af-radio af-radio-select">
      <label>
        <input type="radio" name="cities" value="paris" aria-invalid="true" />
        <div class="af-radio__icons">
          <svg class="af-radio__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioOutlineBlankOutlinedIcon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
          </svg>
          <svg class="af-radio__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioIcon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><circle r="5" cy="12" cx="12"></circle></svg>
          </svg>
        </div>
        <div class="af-radio__content">
          <svg class="af-radio__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HomeIcon">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
          </svg>
          <div class="af-radio__content-description">
            <span>Paris</span>
            <span>Capitale de la France</span>
            <span>Nord</span>
          </div>
        </div>
      </label>
      <label>
        <input type="radio" name="cities" value="bruxelles" aria-invalid="true" />
        <div class="af-radio__icons">
          <svg class="af-radio__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioOutlineBlankOutlinedIcon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
          </svg>
          <svg class="af-radio__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioIcon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><circle r="5" cy="12" cx="12"></circle></svg>
          </svg>
        </div>
        <div class="af-radio__content">
          <svg class="af-radio__icon"focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HomeIcon">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
          </svg>
          <div class="af-radio__content-description">
            <span>Bruxelles</span>
            <span>Capitale de la Belgique</span>
          </div>
        </div>
      </label>
    </div>
    <div class="af-radio__error" aria-live="assertive">
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
    container.innerHTML = `<div role="group" class="af-radio af-radio-select af-radio-select--horizontal">
      <label>
        <input type="radio" name="cities" value="paris" />
        <div class="af-radio__icons">
          <svg class="af-radio__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioOutlineBlankOutlinedIcon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
          </svg>
          <svg class="af-radio__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioIcon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><circle r="5" cy="12" cx="12"></circle></svg>
          </svg>
        </div>
        <div class="af-radio__content">
          <svg class="af-radio__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HomeIcon">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
          </svg>
          <div class="af-radio__content-description">
            <span>Paris</span>
            <span>Capitale de la France</span>
            <span>Nord</span>
          </div>
        </div>
      </label>
      <label>
        <input type="radio" name="cities" value="bruxelles" checked />
        <div class="af-radio__icons">
          <svg class="af-radio__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioOutlineBlankOutlinedIcon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
          </svg>
          <svg class="af-radio__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioIcon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><circle r="5" cy="12" cx="12"></circle></svg>
          </svg>
        </div>
        <div class="af-radio__content">
          <svg class="af-radio__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HomeIcon">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
          </svg>
          <div class="af-radio__content-description">
            <span>Bruxelles</span>
            <span>Capitale de la Belgique</span>
          </div>
        </div>
      </label>
      <label>
        <input type="radio" name="cities" value="lille" disabled checked />
        <div class="af-radio__icons">
          <svg class="af-radio__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioOutlineBlankIcon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
          </svg>
          <svg class="af-radio__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioIcon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><circle r="5" cy="12" cx="12"></circle></svg>
          </svg>
        </div>
        <div class="af-radio__content">
          <svg class="af-radio__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HomeIcon">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
          </svg>
          <div class="af-radio__content-description">
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
    container.innerHTML = `<div role="group" class="af-radio af-radio-select af-radio-select--horizontal">
      <label>
        <input type="radio" name="cities" value="paris" aria-invalid="true" />
        <div class="af-radio__icons">
          <svg class="af-radio__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioOutlineBlankOutlinedIcon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
          </svg>
          <svg class="af-radio__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioIcon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><circle r="5" cy="12" cx="12"></circle></svg>
          </svg>
        </div>
        <div class="af-radio__content">
          <svg class="af-radio__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HomeIcon">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
          </svg>
          <div class="af-radio__content-description">
            <span>Paris</span>
            <span>Capitale de la France</span>
            <span>Nord</span>
          </div>
        </div>
      </label>
      <label>
        <input type="radio" name="cities" value="bruxelles" aria-invalid="true" />
        <div class="af-radio__icons">
          <svg class="af-radio__unchecked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioOutlineBlankOutlinedIcon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
          </svg>
          <svg class="af-radio__checked" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="radioIcon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><circle r="5" cy="12" cx="12"></circle></svg>
          </svg>
        </div>
        <div class="af-radio__content">
          <svg class="af-radio__icon"focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HomeIcon">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
          </svg>
          <div class="af-radio__content-description">
            <span>Bruxelles</span>
            <span>Capitale de la Belgique</span>
          </div>
        </div>
      </label>
    </div>
    <div class="af-radio__error" aria-live="assertive">
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
