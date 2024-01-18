import type { Meta, StoryObj } from "@storybook/html";
import "../../common/icons.scss";
import "./Select.agent.scss";

const meta: Meta = {
  title: "Select",
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const btn = document.createElement("div");
    btn.innerHTML = `<div class="col-md-2">
    <label class="af-form__group-label" for="select-story">Input Select *</label>
</div>
<div class="col-md-10">
    <div class="af-form__select">
        <div class="af-form__select-container">
            <select class="af-form__input-select" id="select-story" name="select-story" type="text">
                <option value="" disabled selected>- Sélectionner -</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
            </select>
            <span aria-controls="select-story" class="glyphicon glyphicon-menu-down" />
        </div><small class="af-form__message">Aide à la saisie</small>
    </div>
</div>`;

    btn.className = "af-form__group row";

    return btn;
  },
  args: {
    label: "Select",
  },
  argTypes: {},
};
