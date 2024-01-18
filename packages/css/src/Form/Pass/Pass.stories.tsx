import type { Meta, StoryObj } from "@storybook/html";
import "../../common/icons.scss";
import "./Pass.agent.scss";

const meta: Meta = {
  title: "Pass",
};

export default meta;

export const Default: StoryObj<{ label: string; strength: string }> = {
  name: "Pass",
  render: ({ label, strength }) => {
    const classname =
      strength === "default" ? "" : `af-form__pass--${strength}`;
    const container = document.createElement("div");
    container.innerHTML = `
    <div class="col-md-2">
        <label class="af-form__group-label" for="inputpassword">${label} *</label>
    </div>
    <div class="col-md-10">
        <div class="af-form__pass-container">
            <div class="af-form__pass af-form__pass--hasinfobulle ${classname}">
                <div class="af-form__pass-strength"></div>
                <input class="af-form__input-text" id="uniqueid" name="inputpassword" value="" tabindex="" type="password" />
                <button class="af-form__pass-btn" type="button">
                    <i class="glyphicon glyphicon-eye-open"></i>
                </button>
            </div>
            <div class="af-popover__container">
                <div class="af-popover__container-over">
                    <button class="af-btn--circle-small"><span class="af-more-help">i</span></button>
                </div>
            </div><small class="af-form__help">8 caractères minimum</small>
        </div>
    </div>`;

    container.className = "af-form__group row";

    return container;
  },
  args: {
    label: "Input Password",
    strength: "default",
  },
  argTypes: {
    strength: {
      options: ["default", "bad", "okay", "good", "verygood", "excellent"],
      control: {
        type: "inline-radio",
      },
    },
  },
};
