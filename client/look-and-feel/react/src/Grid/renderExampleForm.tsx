import { MyFooter } from "./components/MyFooter";
import { MyHeader } from "./components/MyHeader";

import { Button, ButtonVariants, TextInput, Title } from "..";
import { DebugGrid } from "./DebugGrid";

function capitalizeFirstLetter(val: string) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

const setAttributesFields = (value: string, label: string, type = "text") => ({
  value,
  type,
  name: label,
  id: label,
  disabled: false,
  required: true,
  label: `${capitalizeFirstLetter(label)} de la personne`,
  placeholder: `Votre ${label}`,
  description: `Saisissez un ${label}`,
  error: `Un ${label} est obligatoire`,
  className: "subgrid af-form__input-text",
  helper: "Do you need help ?",
  buttonLabel: "En savoir plus",
});

const FIELDS = [
  setAttributesFields("Gomez", "nom"),
  setAttributesFields("Samuel", "prénom"),
  setAttributesFields("samuel.gomez@axa.fr", "email", "email"),
  setAttributesFields("0601020304", "téléphone"),
];

export const render = () => (
  <>
    <DebugGrid isCheckedByDefault />
    <MyHeader />
    <main className="grid example-form">
      <form className="form">
        <div className="form__header subgrid">
          <Title>Mon formulaire</Title>
          <p>Les mentions avec * sont obligatoires</p>
        </div>
        <div className="form__fields subgrid">
          {FIELDS.map((field) => (
            <TextInput
              key={field.id}
              {...field}
              classModifier={field.error ? "error" : ""}
            />
          ))}
        </div>
        <div className="form__actions subgrid">
          <Button variant={ButtonVariants.secondary}>Précédent</Button>
          <Button variant={ButtonVariants.primary}>Valider</Button>
        </div>
      </form>
    </main>
    <MyFooter />
  </>
);
