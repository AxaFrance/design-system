import type { Meta, StoryObj } from "@storybook/html";
import "./Loader.scss";

const meta: Meta = {
  title: "Agent/Components/Loader",
};

export default meta;

const texts: { [index: string]: string } = {
  get: "Chargement en cours",
  post: "Sauvegarde en cours",
  delete: "Suppression en cours",
  update: "Mise à jour en cours",
  error: "Une erreur est survenue lors du chargement du composant",
};

const Modes = {
  none: "none",
  get: "get",
  post: "post",
  delete: "delete",
  update: "update",
  error: "error",
};

export const Default: StoryObj = {
  render: (args) => {
    const loader = document.createElement("div");

    loader.className += [
      "af-loader",
      args.classModifier ? `af-loader--${args.classModifier}` : "",
    ].join(" ");

    const message = args.text || texts[args.mode];
    const isLoaderVisible = args.mode !== Modes.none;
    const isLoaderInError = args.mode === Modes.error;

    loader.innerHTML = `
      ${args.children}
      ${
        isLoaderVisible
          ? `<div class="af-loader af-loader-on">
      <div
      class="af-spinner"
        role="alert"
        aria-live="assertive"
        aria-busy="${isLoaderInError}"
        aria-label="${message}"
      >

      ${!isLoaderInError ? '<div class="af-spinner__animation" ></div>' : ""}
    
        <div class="af-spinner__caption">${message}</div>
      </div> 
    </div>`
          : ""
      }
`;

    return loader;
  },
  args: {
    text: "",
    mode: "get",
    classModifier: "",
    children: ` <div>
    <h1>Title Child</h1>
    <span>Here your child component</span>
  </div>`,
  },
  argTypes: {
    mode: {
      options: Modes,
      control: {
        type: "select",
      },
      defaultValue: Modes.get,
    },
  },
};
