// eslint-disable-next-line import/no-extraneous-dependencies
import { useRef } from "react";

import {
  Button,
  InputText,
  InputDate,
  Modal,
  Message,
  messageVariants,
  Stepper,
  CheckboxText,
  InputPhone,
  CardRadioGroup,
  FormLayout,
  Link,
} from "@axa-fr/canopee-react/prospect";
import { flagsList } from "./FlagUtils";
import { LayoutDemo } from "../../layouts/LayoutDemo/LayoutDemo";

export const Coordonnees = () => {
  const refModal = useRef<HTMLDialogElement>(null);

  const handleOpenModal = () => refModal?.current?.showModal();
  const handleCloseModal = () => refModal?.current?.close();

  return (
    <LayoutDemo title="Devis Habitation">
      <FormLayout>
        <FormLayout.Header>
          <Stepper
            currentStep={0}
            currentStepProgress={100}
            currentSubtitle="Etape 1 sur 3"
            currentTitle="Mes coordonnées"
            nbSteps={3}
            helper="Sauf mention contraire, tous les champs sont obligatoires."
          />
        </FormLayout.Header>
        <FormLayout.Body>
          <Message
            variant={messageVariants.information}
            title="Protection des données personnelles"
            data-cols-desktop-small="8"
          >
            Vos données personnelles sont protégées et utilisées conformément à
            notre Politique de Confidentialité. Pour plus d&apos;informations
            sur la gestion de vos données, veuillez consulter vos documents.
          </Message>

          <CardRadioGroup
            position="line"
            cardStyle="horizontal"
            label="Civilité"
            options={[
              { label: "Madame", value: "madame" },
              { label: "Monsieur", value: "monsieur" },
            ]}
            name="civility"
          />

          <InputText
            name="nom"
            label="Nom de famille"
            placeholder="Doe"
            required
          />

          <InputText name="prenom" label="Prénom" placeholder="John" required />

          <InputDate
            name="naissance"
            label="Date de naissance"
            placeholder="JJ/MM/AAAA"
            description="Exemple: 22/03/1990"
            max="01-01-2010"
            min="01-01-1900"
          />

          <Message
            variant={messageVariants.warning}
            title="You have to be at least 18 years old"
          >
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </Message>

          <InputPhone
            name="telephone"
            label="Numéro de téléphone"
            description="Exemple: 06 07 08 09 10"
            placeholder="06 07 08 09 10"
            inputMode="tel"
            showSelect
            countryCodeOptions={flagsList}
          />

          <InputText
            name="email"
            label="E-mail"
            description="Exemple: exemple@domaine.com"
            placeholder="exemple@domaine.com"
            inputMode="email"
          />

          <InputText
            name="adresse"
            label="Adresse"
            moreButtonLabel="Comment remplir mon adresse ?"
            onMoreButtonClick={handleOpenModal}
            description={
              <>
                Exemple: 10 rue de la Paix, 75000, Paris
                <br /> Votre adresse doit se située en France
              </>
            }
            placeholder="10 rue de la Paix"
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
            containerProps={{
              "data-cols-desktop-small": "8",
            }}
          />

          <Message
            variant={messageVariants.information}
            data-cols-desktop-small="8"
            action={
              <Link
                className="af-button-client"
                href="https://www.axa.fr"
                openInNewTab
              >
                Vos données personnelles AXA
              </Link>
            }
          >
            Pour vous accompagner suite à votre demande, un conseiller vous
            rappelle. Vous disposez de droits sur les informations vous
            concernant.
          </Message>
        </FormLayout.Body>
        <FormLayout.Footer>
          <Button type="submit" variant="primary">
            Suivant
          </Button>
        </FormLayout.Footer>
      </FormLayout>
    </LayoutDemo>
  );
};
