import type { Meta, StoryObj } from "@storybook/html";
import "./Tabs.agent.scss";

const meta: Meta = {
  title: "Slash/Components/Tabs",
};

export default meta;

export const Default: StoryObj = {
  render: (args) => {
    const container = document.createElement("div");

    container.className = "af-tabs";
    container.innerHTML = `
        <ul class="af-tabs__control">
            <li class="af-tabs__item af-tabs__item--has-icon-left${args.activeIndex === 0 ? " af-tabs__item--active" : ""}">
                <button class="af-tabs__link">
                    <span>
                        <svg class="glyphicon glyphicon-ok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105 100">
                            <path d="M0.854 57.792l34.917 35 68.167-68.333-17.667-17.667-50.583 50.583-17.167-17.25z"></path>
                        </svg> ${args.firstTitle}
                    </span>
                </button>
            </li>
            <li class="af-tabs__item af-tabs__item--has-icon-right${args.activeIndex === 1 ? " af-tabs__item--active" : ""}">
                <button class="af-tabs__link">
                    <span>${args.secondTitle}
                        <svg class="glyphicon glyphicon-facetime-video" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <path d="M0 77.396v-54.167q0-2.583 1.833-4.417t4.417-1.833h62.5q2.583 0 4.417 1.833t1.833 4.417v54.167q0 2.583-1.833 4.417t-4.417 1.833h-62.5q-2.583 0-4.417-1.833t-1.833-4.417zM75 50.313l25-25v50z"></path>
                        </svg>
                    </span>
                </button>
            </li>
            <li class="af-tabs__item${args.activeIndex === 2 ? " af-tabs__item--active" : ""}">
                <button class="af-tabs__link">
                    <span>
                        ${args.thirdTitle}<span class="af-badge af-badge--danger"> ${args.badgeContent}</span>
                    </span>
                </button>
            </li>
        </ul>
        <div class="af-tabs__content">
            <div class="af-tabs__pane">${args.content}</div>
        </div>`;

    return container;
  },
  args: {
    activeIndex: 0,
    firstTitle: "Title with left icon",
    secondTitle: "Title with right icon",
    thirdTitle: "Title with badge",
    badgeContent: "42",
    content: "Content of my first tab",
  },
};
