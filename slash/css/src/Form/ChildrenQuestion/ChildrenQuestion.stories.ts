import type { Meta, StoryObj } from "@storybook/html";
import "./ChildrenQuestion.scss";

const meta: Meta = {
  title: "Components/Form/ChildrenQuestion",
};

export default meta;

export const Primary: StoryObj = {
  render: (args) => {
    const container = document.createElement("div");
    container.innerHTML = `<section class="af-form__children-question"><span class="af-form__children-question-arrow"></span><section>${args.content}</section></section>`;

    return container;
  },
  args: {
    content: "ChildrenQuestion",
  },
};
