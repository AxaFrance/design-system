import {
  Button,
  CardRadioGroup,
  Message,
  messageVariants,
  Stepper,
  Link,
  FormLayout,
  Icon,
  AccordionCore,
} from "@axa-fr/canopee-react/prospect";
import arrowLeftAlt from "@material-symbols/svg-400/outlined/arrow_left_alt.svg";
import { LayoutDemo } from "../../layouts/LayoutDemo/LayoutDemo";

export const Situation = () => (
  <LayoutDemo title="Devis Habitation">
    <FormLayout>
      <FormLayout.Header>
        <Stepper
          currentStep={1}
          currentStepProgress={100}
          currentSubtitle="Etape 2 sur 3"
          currentTitle="Votre situation"
          nbSteps={3}
          helper="Sauf mention contraire, tous les champs sont obligatoires."
        />
      </FormLayout.Header>
      <FormLayout.Body>
        <CardRadioGroup
          position="line"
          cardStyle="horizontal"
          label="Que souhaitez-vous assurer ?"
          name="logement"
          options={[
            { label: "Une maison", value: "maison" },
            { label: "Un appartement", value: "appartement" },
            { label: "Une chambre individuelle", value: "chambre" },
          ]}
        />

        <Message variant={messageVariants.information}>
          Pour tout autre type de bien (manoir, château, mobil-home...), vous
          avez besoin d&apos;un contrat d&apos;habitation spécifique. Si tel est
          votre cas, faites une demande de devis en ligne. Un conseiller
          reviendra vers vous.
          <Link
            openInNewTab
            href="https://www.axa.fr/assurance-habitation/devis-gratuit.html"
          >
            Faire une demande de devis auprès d’un conseiller
          </Link>
        </Message>

        <CardRadioGroup
          position="line"
          cardStyle="horizontal"
          label="Quelle est votre situation ?"
          name="profil"
          options={[
            { label: "Propriétaire", value: "proprietaire" },
            { label: "Locataire", value: "locataire" },
            { label: "Propriétaire non occupant", value: "non_occupant" },
          ]}
        />

        <CardRadioGroup
          position="line"
          cardStyle="horizontal"
          label="Quel en est votre usage ?"
          name="usage-logement"
          options={[
            {
              label: "Résidence secondaire",
              value: "residence_secondaire",
            },
            {
              label: "Résidence principale",
              value: "residence_principale",
            },
          ]}
        />

        <CardRadioGroup
          position="line"
          cardStyle="horizontal"
          label="Louez-vous occasionnellement votre logement ?"
          name="location"
          options={[
            {
              label: "Oui",
              value: "oui",
            },
            {
              label: "Non",
              value: "non",
            },
          ]}
        />
      </FormLayout.Body>
      <FormLayout.Footer>
        <Link
          href="/"
          className="af-btn-client af-btn-client--secondary"
          leftIcon={<Icon src={arrowLeftAlt} />}
        >
          Précédent
        </Link>
        <Button variant="primary">Suivant</Button>
      </FormLayout.Footer>
      <FormLayout.Faq>
        <AccordionCore
          summary="Question 1"
          className="af-apollo-accordion--plain"
        >
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
        </AccordionCore>
        <AccordionCore
          className="af-apollo-accordion--plain"
          summary="Question 2"
        >
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
        </AccordionCore>
      </FormLayout.Faq>
    </FormLayout>
  </LayoutDemo>
);
