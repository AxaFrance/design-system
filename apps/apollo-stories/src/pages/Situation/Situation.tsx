import {
  Button,
  DebugGrid,
  CardRadio,
  Heading,
  Message,
  messageVariants,
  Stepper,
  Link,
} from "@axa-fr/design-system-apollo-react";

export const Situation = () => (
  <>
    <DebugGrid isCheckedByDefault />
    <main className="grid example-form">
      <form className="form">
        <div className="form__header subgrid">
          <Heading>Devis Habitation</Heading>
          <Stepper
            currentStep={1}
            currentStepProgress={100}
            currentSubtitle="Etape 2 sur 3"
            currentTitle="Votre situation"
            nbSteps={3}
            helper="Sauf mention contraire, tous les champs sont obligatoires."
          />
        </div>
        <div className="form__fields subgrid">
          <CardRadio
            className="subgrid"
            type="horizontal"
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
            avez besoin d&apos;un contrat d&apos;habitation spécifique. Si tel
            est votre cas, faites une demande de devis en ligne. Un conseiller
            reviendra vers vous.
            <Link
              openInNewTab
              href="https://www.axa.fr/assurance-habitation/devis-gratuit.html"
            >
              Faire une demande de devis auprès d’un conseiller
            </Link>
          </Message>

          <CardRadio
            className="subgrid"
            type="horizontal"
            label="Quelle est votre situation ?"
            name="profil"
            options={[
              { label: "Propriétaire", value: "proprietaire" },
              { label: "Locataire", value: "locataire" },
              { label: "Propriétaire non occupant", value: "non_occupant" },
            ]}
          />

          <CardRadio
            className="subgrid"
            type="horizontal"
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

          <CardRadio
            className="subgrid"
            type="horizontal"
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
        </div>
        <div className="form__actions subgrid">
          <Button variant="tertiary">Précédent</Button>
          <Button variant="primary">Suivant</Button>
        </div>
      </form>
    </main>
  </>
);
