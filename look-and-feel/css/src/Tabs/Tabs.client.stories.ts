import type { Meta, StoryObj } from "@storybook/html";
import "./Tabs.client.scss";

const meta: Meta = {
  title: "Look-and-feel/Components/Tabs",
};

export default meta;

export const Tabs: StoryObj = {
  render: (args) => {
    const tabs = Array.from({ length: args.numberOfTabs }, (_, i) => {
      const id = `tab-${i + 1}`;
      const ariaSelected = i + 1 === args.activeTab;
      const tabIndex = ariaSelected ? 0 : -1;
      return `<button role="tab" type="button" aria-selected="${ariaSelected}" tabindex="${tabIndex}" id="${id}" aria-controls="tabpanel-${i + 1}"><div>Icon ${i + 1}</div><span>Tab ${i + 1}</span></button>`;
    }).join("\n");

    const panels = Array.from({ length: args.numberOfTabs }, (_, i) => {
      const id = `tabpanel-${i + 1}`;
      const ariaHidden = i + 1 !== args.activeTab;
      return `<div role="tabpanel" aria-hidden="${ariaHidden}" id="${id}" aria-labelledby="tab-${i + 1}">Content ${i + 1}</div>`;
    }).join("\n");

    const container = document.createElement("div");
    container.innerHTML = `<div role="tablist">
      ${tabs}
    </div>
    ${panels}
    `;

    container.className = [
      "af-tabs-client",
      `af-tabs-client--${args.position}`,
    ].join(" ");

    return container;
  },
  args: {
    position: "center",
    numberOfTabs: 3,
    activeTab: 1,
  },
  argTypes: {
    position: {
      control: "select",
      options: ["center", "left"],
      description: "Position des onglets",
    },
    numberOfTabs: {
      control: { type: "range", min: 1, max: 10 },
      description: "Nombre d'onglets à afficher",
    },
    activeTab: {
      control: { type: "number", min: 1, max: 10 },
      description: "Onglet actif",
    },
  },
};
