import type { Meta, StoryObj } from "@storybook/html";
import "../../common/icons.scss";
import "./Checkbox.agent.scss";

const meta: Meta = {
  title: "Checkbox",
};

export default meta;

export const Default: StoryObj<{ label: string }> = {
  render: ({ label }) => {
    const container = document.createElement("div");
    container.innerHTML = `
    <div class="col-md-2">
        <label class="af-form__group-label">${label}</label>
    </div>
    <div class="col-md-10">
        <div class="af-form__checkbox">
            <input class="af-form__input-checkbox" name="classic" type="checkbox" id="checkbox1" />
            <label class="af-form__label" for="checkbox1"><span class="af-form__indicator">
                    <svg class="glyphicon glyphicon-ok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105 100">
                        <path d="M0.854 57.792l34.917 35 68.167-68.333-17.667-17.667-50.583 50.583-17.167-17.25z"></path>
                    </svg></span><span class="af-form__description">lorem ipsum dolor sit amet</span></label>
        </div>
        <div class="af-form__checkbox">
            <input class="af-form__input-checkbox" name="classic" type="checkbox" id="checkbox2" />
            <label class="af-form__label" for="checkbox2"><span class="af-form__indicator">
                    <svg class="glyphicon glyphicon-ok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105 100">
                        <path d="M0.854 57.792l34.917 35 68.167-68.333-17.667-17.667-50.583 50.583-17.167-17.25z"></path>
                    </svg></span><span class="af-form__description">Nam sem nisi, auctor sit amet massa sit amet</span></label>
        </div>
        <div class="af-form__checkbox">
            <input class="af-form__input-checkbox" name="classic" type="checkbox" id="checkbox3" />
            <label class="af-form__label" for="checkbox3"><span class="af-form__indicator">
                    <svg class="glyphicon glyphicon-ok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105 100">
                        <path d="M0.854 57.792l34.917 35 68.167-68.333-17.667-17.667-50.583 50.583-17.167-17.25z"></path>
                    </svg></span><span class="af-form__description">Ut sollicitudin eleifend tincidunt</span></label>
        </div>
        <div class="af-form__checkbox  af-form__checkbox--disabled">
            <input class="af-form__input-checkbox" name="classic" type="checkbox" id="checkbox4" disabled="disabled" />
            <label class="af-form__label" for="checkbox4"><span class="af-form__indicator">
                    <svg class="glyphicon glyphicon-ok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105 100">
                        <path d="M0.854 57.792l34.917 35 68.167-68.333-17.667-17.667-50.583 50.583-17.167-17.25z"></path>
                    </svg></span><span class="af-form__description">disabled</span></label>
        </div>
    </div>`;

    container.className = "af-form__group row af-form__group--label-top";

    return container;
  },
  args: {
    label: "Classic Checkbox",
  },
  argTypes: {},
};
