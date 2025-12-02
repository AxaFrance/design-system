import {
  Button,
  DebugGrid,
  Heading,
  DataAgent,
  Icon,
} from "@axa-fr/canopee-react/prospect";

import accountBalance from "@material-symbols/svg-400/rounded/account_balance-fill.svg";
import alternateEmail from "@material-symbols/svg-400/rounded/alternate_email-fill.svg";
import check from "@material-symbols/svg-400/rounded/check.svg";

export const Sortie = () => (
  <>
    <DebugGrid isCheckedByDefault forceVisible />
    <main className="grid exit-page">
      <section className="exit-page__content subgrid">
        <article className="subgrid">
          <Icon src={check} name="check" size="L" hasBackground />
          <Heading level={2}>Merci Sylvie,</Heading>
          <p>
            Vous recevrez dans quelques instants un e-mail récapitulatif avec le
            détail de votre tarif.
          </p>
          <p>
            Votre Conseiller AXA vous contactera rapidement pour confirmer vos
            informations et finaliser votre contrat.
          </p>
          <p>
            Vous souhaitez prendre les devants ? N&apos;hésitez pas à le
            contacter directement !
          </p>
        </article>
        <DataAgent
          agentProps={{
            picture: "https://dummyimage.com/48/48/fff&text=A",
            title: "Michel Lhote",
            subtitle: "AXA Assurance & Banque",
            type: "picture",
          }}
          agentContractProps={{
            title: "Contrat rattaché",
            subtitle: "Assurance Vie, Auto, Habitation, Complémentaire santé",
            type: "stick",
          }}
          contents={[
            {
              type: "icon",
              icon: accountBalance,
              subtitle1: "6 place du 14 juillet 28 240 Ivry la Bataille",
              title: "",
            },
            {
              type: "icon",
              icon: accountBalance,
              subtitle1: "01 23 34 45 67",
              title: "",
            },
            {
              type: "icon",
              icon: accountBalance,
              subtitle1:
                "Ouvert aujourd’hui de 09h00 à 13h00 et de 14h00 à 18h00",
              title: "",
            },
          ]}
          clickContents={[
            {
              variant: "large",
              icon: alternateEmail,
              title: "Nous contacter",
            },
            {
              variant: "small",
              icon: accountBalance,
              title: "Prendre rendez-vous",
            },
            {
              variant: "small",
              icon: accountBalance,
              title: "Voir le site-web",
            },
          ]}
          texteOrias="N° Orias (orias.fr) : 10057601 - 10057601"
          isCompact={false}
        />
        <div className="page-actions subgrid">
          <Button variant="primary">Retour à la page d&apos;accueil</Button>
        </div>
      </section>
    </main>
  </>
);
