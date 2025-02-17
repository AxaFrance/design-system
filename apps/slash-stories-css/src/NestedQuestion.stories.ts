import type { Meta, StoryObj } from "@storybook/html";
import "@axa-fr/design-system-slash-css/dist/Form/NestedQuestion/NestedQuestion.scss";

const meta: Meta = {
  title: "Components/Form/NestedQuestion",
};

export default meta;

export const Primary: StoryObj = {
  render: (args) => {
    const container = document.createElement("div");
    container.innerHTML = `<section class="af-form__nested-question"><span class="af-form__nested-question-arrow"></span><section>${args.children}</section></section>`;

    return container;
  },
  args: {
    children: "NestedQuestion",
  },
};
