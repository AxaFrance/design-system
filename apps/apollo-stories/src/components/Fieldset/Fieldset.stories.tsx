import {
  Fieldset,
  InputText,
  CheckboxText,
  Dropdown,
  Radio,
} from "@axa-fr/canopee-react/prospect";
import homeIcon from "@material-symbols/svg-400/outlined/home.svg";
import personIcon from "@material-symbols/svg-400/outlined/person.svg";
import creditCardIcon from "@material-symbols/svg-400/outlined/credit_card.svg";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Fieldset> = {
  title: "Components/Fieldset",
  component: Fieldset,
  argTypes: {
    title: {
      control: "text",
      description: "Titre affiché dans la légende du fieldset",
    },
    icon: {
      control: "text",
      description: "Icône à afficher (déprécié, utiliser iconProps)",
      table: {
        category: "Deprecated",
      },
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

export const Default: Story = {
  name: "Default",
  render: (args) => (
    <Fieldset {...args}>
      <InputText label="Prénom" name="firstname" />
      <InputText label="Nom" name="lastname" />
      <InputText label="Email" name="email" type="email" />
    </Fieldset>
  ),
  args: {
    title: "Informations personnelles",
    iconProps: {
      src: personIcon,
    },
  },
};

export const WithRadios: Story = {
  name: "With radio buttons",
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

export const PaymentForm: Story = {
  name: "Payment form",
  render: (args) => (
    <Fieldset {...args}>
      <InputText label="Numéro de carte" name="cardNumber" />
      <div style={{ display: "flex", gap: "1rem" }}>
        <InputText label="Date d'expiration" name="expiry" />
        <InputText label="CVV" name="cvv" />
      </div>
      <InputText label="Nom sur la carte" name="cardName" />
    </Fieldset>
  ),
  args: {
    title: "Informations de paiement",
    iconProps: {
      src: creditCardIcon,
    },
  },
};

export const MultipleFieldsets: Story = {
  name: "Multiples fieldsets",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <Fieldset
        title="Informations personnelles"
        iconProps={{ src: personIcon }}
      >
        <InputText label="Prénom" name="firstname" />
        <InputText label="Nom" name="lastname" />
        <InputText label="Email" name="email" type="email" />
      </Fieldset>

      <Fieldset title="Adresse" iconProps={{ src: homeIcon }}>
        <InputText label="Rue" name="street" />
        <div style={{ display: "flex", gap: "1rem" }}>
          <InputText label="Code postal" name="zipcode" />
          <InputText label="Ville" name="city" />
        </div>
        <Dropdown
          label="Pays"
          name="country"
          placeholder="Sélectionner un pays"
        >
          <option value="fr">France</option>
          <option value="be">Belgique</option>
          <option value="ch">Suisse</option>
        </Dropdown>
      </Fieldset>

      <Fieldset title="Paiement" iconProps={{ src: creditCardIcon }}>
        <InputText label="Numéro de carte" name="cardNumber" />
        <div style={{ display: "flex", gap: "1rem" }}>
          <InputText label="Date d'expiration" name="expiry" />
          <InputText label="CVV" name="cvv" />
        </div>
      </Fieldset>
    </div>
  ),
};

export const WithoutIcon: Story = {
  name: "Without icon",
  render: (args) => (
    <Fieldset {...args}>
      <InputText label="Commentaire" name="comment" />
      <CheckboxText
        label="J'accepte les conditions générales"
        name="terms"
        value="terms"
      />
    </Fieldset>
  ),
  args: {
    title: "Autres informations",
  },
};
