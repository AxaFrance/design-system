// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentProps, useRef } from "react";

import {
  Button,
  DebugGrid,
  CardRadio,
  InputText,
  InputDate,
  Heading,
  Modal,
  Message,
  messageVariants,
  Stepper,
  CheckboxText,
  InputPhone,
} from "@axa-fr/design-system-apollo-react";
import { flagsList } from "./FlagUtils";

type CommonProps<
  T extends typeof InputText | typeof InputDate | typeof InputPhone,
> = ComponentProps<T> & { name: string };

const commonProps = <
  T extends typeof InputText | typeof InputDate | typeof InputPhone,
>({
  name,
  ...rest
}: CommonProps<T>) => ({
  name,
  id: name,
  required: true,
  ...rest,
});

export const Coordonnees = () => {
  const refModal = useRef<HTMLDialogElement>(null);

  const handleOpenModal = () => refModal?.current?.showModal();
  const handleCloseModal = () => refModal?.current?.close();

  return (
    <>
      <DebugGrid />
      <main className="grid example-form">
        <form className="form">
          <div className="form__header subgrid">
            <Heading>Devis Habitation</Heading>
            <Stepper
              currentStep={0}
              currentStepProgress={100}
              currentSubtitle="Etape 1 sur 3"
              currentTitle="Mes coordonnées"
              nbSteps={3}
              helper="Sauf mention contraire, tous les champs sont obligatoires."
            />
          </div>
          <div className="form__fields subgrid">
            <Message
              variant={messageVariants.information}
              title="Protection des données personnelles"
            >
              Vos données personnelles sont protégées et utilisées conformément
              à notre Politique de Confidentialité. Pour plus
              d&apos;informations sur la gestion de vos données, veuillez
              consulter vos documents.
            </Message>

            <CardRadio
              className="subgrid"
              type="horizontal"
              label="Civilité"
              options={[
                { label: "Madame", value: "madame" },
                { label: "Monsieur", value: "monsieur" },
              ]}
              name="radio-name"
            />

            <InputText
              {...commonProps<typeof InputText>({
                name: "nom",
                label: "Nom de famille",
                placeholder: "Doe",
              })}
              key="nom"
            />

            <InputText
              {...commonProps<typeof InputText>({
                name: "prenom",
                label: "Prénom",
                placeholder: "John",
              })}
              key="prenom"
            />

            <InputDate
              {...commonProps<typeof InputDate>({
                name: "naissance",
                label: "Date de naissance",
                placeholder: "JJ/MM/AAAA",
                description: "Exemple: 22/03/1990",
                max: "01-01-2010",
                min: "01-01-1900",
              })}
              key="naissance"
            />

            <InputPhone
              {...commonProps<typeof InputPhone>({
                name: "telephone",
                label: "Numéro de téléphone",
                description: "Exemple: 06 07 08 09 10",
                placeholder: "06 07 08 09 10",
                inputMode: "tel",
                showSelect: true,
                countryCodeOptions: flagsList,
              })}
              key="telephone"
            />

            <InputText
              {...commonProps<typeof InputText>({
                name: "email",
                label: "E-mail",
                description: "Exemple: exemple@domaine.com",
                placeholder: "exemple@domaine.com",
                inputMode: "email",
              })}
              key="email"
            />

            <InputText
              {...commonProps<typeof InputText>({
                name: "adresse",
                label: "Adresse",
                buttonLabel: "Comment remplir mon adresse ?",
                onButtonClick: handleOpenModal,
                description: (
                  <>
                    Exemple: 10 rue de la Paix, 75000, Paris
                    <br /> Votre adresse doit se située en France
                  </>
                ),
                placeholder: "10 rue de la Paix",
              })}
              key="adresse"
            />

            <Modal
              ref={refModal}
              onClose={handleCloseModal}
              primaryButtonProps={{
                children: "Fermer",
                onClick: handleCloseModal,
              }}
              title="Où trouver votre numéro de contrat ?"
            >
              <p>
                <strong>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                <br />
                <strong>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                <br />
                <strong>Lorem ipsum dolor sit amet : </strong>Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </p>
            </Modal>

            <CheckboxText
              name="consentement"
              id="consentement"
              value="consentement-ok"
              required
              label="J'accepte de fournir à AXA mes coordonnées ainsi que les données  relatives à mon projet et ma situation. Ces dernières seront transmises à mon conseiller AXA qui pourra  me contacter pour m'accompagner."
            />
          </div>
          <div className="form__actions subgrid">
            <Button type="submit" variant="primary">
              Suivant
            </Button>
          </div>
        </form>
      </main>
    </>
  );
};
