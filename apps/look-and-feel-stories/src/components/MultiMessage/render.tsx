import { type Args } from "storybook/internal/types";
import {
  Link,
  messageVariants,
  MultiMessage,
  type MultiMessageItem,
} from "@axa-fr/canopee-react/client";

const sampleItems: MultiMessageItem[] = [
  {
    variant: messageVariants.information,
    title: "Titre du message",
    children:
      "Ici quelques lignes pour présenter aux utilisateurs des éléments classés comme infos.",
    action: (
      <Link href="https://www.axa.fr" openInNewTab>
        Lien 1
      </Link>
    ),
  },
  {
    variant: messageVariants.validation,
    title: "Titre du message",
    children:
      "Ici quelques lignes pour présenter aux utilisateurs des éléments classés comme validations.",
    action: (
      <Link href="https://www.axa.fr" openInNewTab>
        Lien 1
      </Link>
    ),
  },
  {
    variant: messageVariants.warning,
    title: "Titre du message",
    children:
      "Ici quelques lignes pour présenter aux utilisateurs des éléments classés comme alertes.",
  },
  {
    variant: messageVariants.error,
    title: "Titre du message",
    children:
      "Ici quelques lignes pour présenter aux utilisateurs des éléments classés comme erreurs.",
    action: (
      <Link href="https://www.axa.fr" openInNewTab>
        Lien 1
      </Link>
    ),
  },
  {
    variant: messageVariants.neutral,
    title: "Titre du message",
    children:
      "Ici quelques lignes pour présenter aux utilisateurs des éléments classés comme neutres.",
  },
];

export const renderMultiMessage = ({ defaultActiveIndex }: Args) => (
  <MultiMessage items={sampleItems} defaultActiveIndex={defaultActiveIndex} />
);
