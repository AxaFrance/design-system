import {
  Button,
  CheckboxCard,
  DebugGrid,
  RadioCard,
  TextInput,
  Title,
} from "@axa-fr/design-system-look-and-feel-react";
import home from "@material-symbols/svg-400/outlined/home.svg";
import { MyFooter } from "./components/MyFooter";
import { MyHeader } from "./components/MyHeader";

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
  className: "subgrid",
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
          <RadioCard
            className="subgrid"
            type="horizontal"
            options={[
              { label: "Homme", value: "H", icon: home },
              { label: "Femme", value: "F", icon: home },
              { label: "Les deux", value: "HF", icon: home },
              {
                label: "Ne se prononce pas",
                value: "N",
                icon: home,
              },
            ]}
            name="radio-name"
          />
          <CheckboxCard
            className="subgrid"
            type="horizontal"
            labelGroup="Titre"
            options={[
              {
                label: "Développeur",
                value: "H",
                name: "Développeur",
                icon: home,
              },
              { label: "BA", value: "F", name: "BA", icon: home },
              {
                label: "EM",
                value: "HF",
                name: "EM",
                icon: home,
              },
              { label: "PO", value: "A", name: "PO", icon: home },
              {
                label: "DBA",
                value: "Au",
                name: "DBA",
                icon: home,
              },
              {
                label: "Scrum Master",
                value: "P",
                name: "Scrum Master",
                icon: home,
              },
              {
                label: "Ne se prononce pas",
                value: "N",
                name: "Ne se prononce pas",
                icon: home,
              },
            ]}
          />
          {FIELDS.map((field) => (
            <TextInput
              key={field.id}
              {...field}
              classModifier={field.error ? "error" : ""}
            />
          ))}
        </div>
        <div className="form__actions subgrid">
          <Button variant="secondary">Précédent</Button>
          <Button variant="primary">Valider</Button>
        </div>
      </form>
    </main>
    <MyFooter />
  </>
);
