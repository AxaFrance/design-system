import { Fieldset, CheckboxText, Radio } from "@axa-fr/canopee-react/client";
import homeIcon from "@material-symbols/svg-400/outlined/home.svg";
import personIcon from "@material-symbols/svg-400/outlined/person.svg";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Fieldset> = {
  title: "Components/Fieldset",
  component: Fieldset,
  argTypes: {
    title: {
      control: "text",
      description: "Titre affiché dans la légende du fieldset",
    },
    iconProps: {
      control: "object",
      description: "Props de l'icône à afficher",
    },
    className: {
      control: "text",
      description: "Classes CSS additionnelles",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Fieldset>;

export const WithRadios: Story = {
  name: "With radios",
  render: (args) => (
    <Fieldset {...args}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Radio id="gender-male" name="gender" value="male" />
        <label htmlFor="gender-male">Homme</label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Radio id="gender-female" name="gender" value="female" />
        <label htmlFor="gender-female">Femme</label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Radio id="gender-other" name="gender" value="other" />
        <label htmlFor="gender-other">Autre</label>
      </div>
    </Fieldset>
  ),
  args: {
    title: "Genre",
    iconProps: {
      src: personIcon,
    },
  },
};

export const WithCheckboxes: Story = {
  name: "With checkboxes",
  render: (args) => (
    <Fieldset {...args}>
      <CheckboxText label="Newsletter" name="newsletter" value="newsletter" />
      <CheckboxText
        label="Offres promotionnelles"
        name="promotions"
        value="promotions"
      />
      <CheckboxText label="Notifications SMS" name="sms" value="sms" />
    </Fieldset>
  ),
  args: {
    title: "Préférences de communication",
    iconProps: {
      src: homeIcon,
    },
  },
};
