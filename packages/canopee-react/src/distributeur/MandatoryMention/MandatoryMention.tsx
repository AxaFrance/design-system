import "@axa-fr/canopee-css/distributeur/MandatoryMention/MandatoryMention.css";

const variantTexts = {
  all: "Tous les champs sont obligatoires",
  one: "Champs obligatoires *",
} as const;

type MandatoryVariant = keyof typeof variantTexts;

type MandatoryMentionProps = {
  variant: MandatoryVariant;
  id?: string;
};

export const MandatoryMention = ({ variant, id }: MandatoryMentionProps) => {
  const text = variantTexts[variant];

  return (
    <p id={id} className={`af-mandatory--${variant}`}>
      {text}
    </p>
  );
};
