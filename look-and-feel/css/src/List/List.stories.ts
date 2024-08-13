import type { Meta, StoryObj } from "@storybook/html";
import "../Card/Card.client.scss";
import "./List.scss";

const meta: Meta = {
  title: "Look-and-feel/Components/List",
};

export default meta;

export const Default: StoryObj = {
  render: ({ classModifier, ...args }) => {
    const list = document.createElement("section");

    list.className = `af-card ${["list", ...classModifier]
      .filter(Boolean)
      .map((modifier: string) => ` af-card--${modifier}`)
      .join("")}`;

    list.tabIndex = 0;

    const ul = document.createElement("ul");

    ul.className = "af-list";

    args.children.forEach((child: string, index: number) => {
      const item = document.createElement("li");
      item.className = "af-list__item";

      item.innerHTML = child;

      ul.appendChild(item);

      if (index < args.children.length - 1) {
        const separator = document.createElement("hr");
        separator.className = "af-list__separator";
        ul.appendChild(separator);
      }
    });

    list.appendChild(ul);

    return list;
  },
  args: {
    children: [
      "<div><span>Prénom NOM</span></div>",
      "<div><span>nom.prénom@mail.fr</span></div>",
      `<div style="display: flex; flex-direction: row; align-items: center; gap: 0.5rem;">
        <svg data-src="/@fs/C:/Users/B519MA/projects/design-system/node_modules/@material-symbols/svg-400/outlined/sync-fill.svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="injected-svg" viewBox="0 -960 960 960" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M167-160v-60h130l-15-12q-64-51-93-111t-29-134q0-106 62.5-190.5T387-784v62q-75 29-121 96.5T220-477q0 63 23.5 109.5T307-287l30 21v-124h60v230H167Zm407-15v-63q76-29 121-96.5T740-483q0-48-23.5-97.5T655-668l-29-26v124h-61v-230h230v60H665l15 14q60 56 90 120t30 123q0 106-62 191T574-175Z"></path>
        </svg>
        <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; width: 100%">
          <span>Modifier le profil</span>
          <svg data-src="/@fs/C:/Users/B519MA/projects/design-system/node_modules/@material-symbols/svg-400/outlined/arrow_right.svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="injected-svg" viewBox="0 -960 960 960" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M400-280v-400l200 200-200 200Z"></path>
          </svg>
        </div>
      </div>`,
      `<div style="display: flex; flex-direction: row; align-items: center; gap: 4rem;">
        <div style="display: flex; flex-direction: row; align-items: center; gap: 0.5rem;">
          <svg data-src="/@fs/C:/Users/B519MA/projects/design-system/node_modules/@material-symbols/svg-400/outlined/delete.svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="injected-svg" viewBox="0 -960 960 960" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M261-120q-24.75 0-42.37-17.63Q201-155.25 201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"></path>
          </svg>
          <span>Supprimer le profil</span>
        </div>
      </div>`,
    ],
    classModifier: [],
  },
  argTypes: {
    classModifier: {
      options: ["large", "first-separator-full-width"],
      control: { type: "multi-select" },
      defaultValue: [],
    },
  },
};
