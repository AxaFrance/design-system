import { Link, Message } from "@axa-fr/canopee-react/client";

export const Cotisations = () => (
  <Message
    variant="warning"
    title="Vous avez des cotisations à payer"
    action={
      <Link href="/paiement" openInNewTab>
        Payer maintenant
      </Link>
    }
  >
    Pensez à payer vos cotisations dès à présent grâce au service de paiement en
    ligne.
  </Message>
);
