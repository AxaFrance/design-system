import type { Meta, StoryObj } from "@storybook/html";
import "./Radio.scss";

const meta: Meta = {
  title: "Components/Form/Input/Radio",
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

const InputError = `
<div class="af-input-error">
  <svg class="af-input-error__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ErrorOutlineIcon"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path></svg>
  <span aria-live="assertive" id="cities-error" class="af-input-error__message">Veuillez sélectionner au moins une ville</span>
</div>`;

export const BasicWithError: StoryObj = {
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = `
    <div class="af-radio" aria-invalid="true">
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
    <div class="af-input-error">
      <svg class="af-input-error__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ErrorOutlineIcon">
        <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path>
      </svg>
      <span aria-live="assertive" class="af-input-error__message">
        Veuillez cocher une case
      </span>
    </div>`;

    return container;
  },
  args: {},
  argTypes: {},
};

export const Vertical: StoryObj = {
  render: () => {
    const container = document.createElement("div");
    container.classList.add("af-radio__container");
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
    container.classList.add("af-radio__container");
    container.innerHTML = `<div role="group" class="af-radio af-radio-select" aria-invalid="true" aria-describedby="cities-error">
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
    ${InputError}`;

    return container;
  },
  args: {},
  argTypes: {},
};

export const VerticalWithLabel: StoryObj = {
  render: () => {
    const container = document.createElement("div");
    container.classList.add("af-radio__container");
    container.innerHTML = `
     <span class="af-radio__label" aria-label="Quelle ville ?">
    Quelle ville ?<span aria-hidden="true">&nbsp;*</span>
  </span>
  <div
    role="radiogroup"
    class="af-radio af-radio-select af-radio-select--vertical"
    aria-invalid="false"
  >
    <label for=":r1:-Paris"
      ><input type="radio" name="cities" id=":r1:-Paris" value="paris" />
      <div class="af-radio__icons">
        <svg
          class="af-radio__unchecked"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="radioOutlineBlankOutlinedIcon"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
          ></path>
        </svg>
        <svg
          class="af-radio__checked"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="radioIcon"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
          ></path>
          <circle r="5" cy="12" cx="12"></circle>
        </svg>
      </div>
      <div class="af-radio__content">
        <svg
          class="af-radio__icon"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="HomeIcon"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
        </svg>
        <div class="af-radio__content-description">
          <span>Paris</span>
          <span>Capitale de la France</span>
          <span>Nord</span>
        </div>
      </div>
    </label>

    <label for=":r1:-Bruxelles"
      ><input
        type="radio"
        name="cities"
        id=":r1:-Bruxelles"
        value="bruxelles"
      />
      <div class="af-radio__icons">
        <svg
          class="af-radio__unchecked"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="radioOutlineBlankOutlinedIcon"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
          ></path>
        </svg>
        <svg
          class="af-radio__checked"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="radioIcon"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
          ></path>
          <circle r="5" cy="12" cx="12"></circle>
        </svg>
      </div>
      <div class="af-radio__content">
        <svg
          class="af-radio__icon"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="HomeIcon"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
        </svg>
        <div class="af-radio__content-description">
          <span>Bruxelles</span>
          <span>Capitale de la Belgique</span>
        </div>
      </div>
    </label>

    <label for=":r1:-Lille"
      ><input type="radio" name="cities" id=":r1:-Lille" value="lille" />
      <div class="af-radio__icons">
        <svg
          class="af-radio__unchecked"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="radioOutlineBlankOutlinedIcon"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
          ></path>
        </svg>
        <svg
          class="af-radio__checked"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="radioIcon"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
          ></path>
          <circle r="5" cy="12" cx="12"></circle>
        </svg>
      </div>
      <div class="af-radio__content">
        <svg
          class="af-radio__icon"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="HomeIcon"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
        </svg>
        <div class="af-radio__content-description">
          <span>Lille</span>
        </div>
      </div>
    </label>
  </div>
    `;

    return container;
  },
  args: {},
  argTypes: {},
};

export const Horizontal: StoryObj = {
  render: () => {
    const container = document.createElement("div");
    container.classList.add("af-radio__container");
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
    container.classList.add("af-radio__container");
    container.innerHTML = `<div role="group" class="af-radio af-radio-select af-radio-select--horizontal" aria-invalid="true" aria-describedby="cities-error">
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
    ${InputError}`;

    return container;
  },
  args: {},
  argTypes: {},
};
